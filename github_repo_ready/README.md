# Rehabilitation Semantic Enterprise Knowledge Graph

This repository contains a proof-of-concept for a PoEM 2026 research
project on a Semantic Enterprise Knowledge Graph (SEKG) for
interdisciplinary rehabilitation.

The project models a rehabilitation center as an enterprise, not only as
a clinical data repository. It connects de-identified clinical cases,
open sensor datasets, departments, professional roles, responsibilities,
care-process stages, provenance, governance decisions, and human-LLM
modeling support.

## Demo

Open the static demo:

```text
demo/index.html
```

If the repository is published with GitHub Pages, the demo will be
available at:

```text
https://USERNAME.github.io/REPOSITORY-NAME/demo/
```

The demo has no backend and no build step.

## Optional: rerun SPARQL evaluation

The generated SPARQL results are already included. To rerun them locally:

```text
pip install -r requirements.txt
python evaluation/run_sparql.py
```

## Repository contents

```text
demo/                       Static HTML demo
docs/                       Reviewer-facing diagrams and methodology notes
evaluation/                 SPARQL queries, results, coverage, expert form
kg/                         Ontology and instance RDF/Turtle files
data/samples/               Small de-identified and derived sample CSV files
PoEM2026_...Idea.md         Current paper/proposal draft
```

## Current proof-of-concept results

- RDF triples loaded: 876
- Competency questions answered: 10/10
- Selected source variables mapped: 20/20
- Expert evaluation: pending

The evaluation tests semantic expressiveness, traceability, and
queryability. It does not claim predictive clinical accuracy, large-scale
performance, or clinical deployment readiness.

## Privacy and data policy

This public repository should include only de-identified derived samples
and open-dataset snippets.

Do not commit:

- `data from ciderr/`
- raw clinical documents
- files containing names or direct identifiers
- `data/external/`
- local dependency folders such as `.local_pydeps/`

The `.gitignore` is configured to exclude those files.

## Expert evaluation

For a collaborator, send or share:

- the GitHub Pages demo link, or `demo/index.html`
- `evaluation/expert_evaluation/expert_evaluation.csv`

The collaborator only needs to inspect the demo and return the completed
CSV.

## Main artifacts

- `kg/sekg_ontology.ttl`
- `kg/sekg_instances.ttl`
- `evaluation/sparql_results.md`
- `docs/enterprise_model_views.md`
- `docs/llm_modeling_protocol.md`
- `docs/standards_alignment.md`
