from __future__ import annotations

import csv
import json
import sys
from datetime import date
from pathlib import Path

sys.path.insert(0, str(Path(".local_pydeps").resolve()))

from rdflib import Graph  # noqa: E402


ROOT = Path(__file__).resolve().parents[1]
EVAL_DIR = ROOT / "evaluation"
SPARQL_DIR = EVAL_DIR / "sparql"
ONTOLOGY_FILE = ROOT / "kg" / "sekg_ontology.ttl"
INSTANCES_FILE = ROOT / "kg" / "sekg_instances.ttl"
COVERAGE_FILE = EVAL_DIR / "coverage_matrix.csv"


def markdown_table(headers: list[str], rows: list[list[str]]) -> str:
    escaped_rows = []
    for row in rows:
        escaped_rows.append([str(cell).replace("\n", " ").replace("|", "\\|") for cell in row])
    lines = [
        "| " + " | ".join(headers) + " |",
        "| " + " | ".join(["---"] * len(headers)) + " |",
    ]
    for row in escaped_rows:
        lines.append("| " + " | ".join(row) + " |")
    return "\n".join(lines)


def term_to_text(value) -> str:
    text = str(value)
    prefix = "https://example.org/sekg/rehab#"
    if text.startswith(prefix):
        return "sekg:" + text[len(prefix) :]
    return text


def main() -> None:
    graph = Graph()
    graph.parse(ONTOLOGY_FILE, format="turtle")
    graph.parse(INSTANCES_FILE, format="turtle")

    query_summaries = []
    query_details = {}

    for query_path in sorted(SPARQL_DIR.glob("cq*.rq")):
        query_text = query_path.read_text()
        result = graph.query(query_text)
        vars_ = [str(var) for var in result.vars]
        rows = [[term_to_text(value) for value in row] for row in result]
        query_summaries.append(
            {
                "query": query_path.name,
                "columns": vars_,
                "row_count": len(rows),
                "answerable": len(rows) > 0,
            }
        )
        query_details[query_path.name] = {
            "columns": vars_,
            "rows": rows,
        }

    with COVERAGE_FILE.open() as f:
        coverage_rows = list(csv.DictReader(f))
    covered = sum(1 for row in coverage_rows if row["coverage_status"].strip().lower() == "covered")
    total = len(coverage_rows)
    coverage_rate = covered / total if total else 0

    summary = {
        "date": date.today().isoformat(),
        "ontology_file": str(ONTOLOGY_FILE.relative_to(ROOT)),
        "instances_file": str(INSTANCES_FILE.relative_to(ROOT)),
        "triple_count": len(graph),
        "competency_questions": len(query_summaries),
        "answerable_competency_questions": sum(1 for item in query_summaries if item["answerable"]),
        "query_summaries": query_summaries,
        "covered_variables": covered,
        "total_variables": total,
        "coverage_rate": coverage_rate,
        "expert_validation_status": "pending",
    }

    (EVAL_DIR / "sparql_results.json").write_text(
        json.dumps({"summary": summary, "details": query_details}, indent=2, ensure_ascii=False)
    )

    summary_rows = [
        [item["query"], str(item["row_count"]), "yes" if item["answerable"] else "no"]
        for item in query_summaries
    ]
    results_md = [
        "# SPARQL evaluation results",
        "",
        f"Date: {summary['date']}",
        "",
        f"Loaded graph: `{summary['ontology_file']}` + `{summary['instances_file']}`",
        "",
        f"Triple count: **{summary['triple_count']}**",
        "",
        "## Summary",
        "",
        markdown_table(
            ["Metric", "Result"],
            [
                ["Competency questions", str(summary["competency_questions"])],
                ["Answerable competency questions", f"{summary['answerable_competency_questions']}/{summary['competency_questions']}"],
                ["CQ answerability rate", f"{summary['answerable_competency_questions'] / summary['competency_questions']:.0%}"],
                ["Mapped variables", f"{covered}/{total}"],
                ["Variable coverage", f"{coverage_rate:.0%}"],
                ["Expert validation", "pending"],
            ],
        ),
        "",
        "## Query results",
        "",
        markdown_table(["SPARQL query", "Rows", "Answerable"], summary_rows),
    ]

    for query_name, detail in query_details.items():
        rows = detail["rows"]
        results_md.extend(["", f"### {query_name}", ""])
        if rows:
            results_md.append(markdown_table(detail["columns"], rows))
        else:
            results_md.append("No rows returned.")

    (EVAL_DIR / "sparql_results.md").write_text("\n".join(results_md) + "\n")

    print(json.dumps(summary, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    main()
