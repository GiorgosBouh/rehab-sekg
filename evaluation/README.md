# Evaluation artifacts

This folder contains the evaluation package for the rehabilitation SEKG
proof-of-concept.

## Files

- `evaluation_plan.md`: overall research evaluation design.
- `competency_questions.md`: competency questions and pass criteria.
- `sparql/`: one SPARQL query per competency question.
- `coverage_matrix.csv`: source-variable-to-ontology coverage matrix.
- `extensibility_protocol.md`: protocol for adding a new heterogeneous
  case and measuring ontology impact, including a worked sensory
  processing extension scenario.
- `expert_validation_form.md`: lightweight review form for rehabilitation
  experts.
- `expert_evaluation/`: simple sendable expert-evaluation packet with
  one CSV form, short instructions, and a Greek email template.
- `run_sparql.py`: local runner that loads the ontology and instances
  into an in-memory RDF store using `rdflib`.
- `sparql_results.md`: generated SPARQL evaluation results.
- `sparql_results.json`: machine-readable version of the generated
  SPARQL results.

## How to use

1. Load `kg/sekg_ontology.ttl` and `kg/sekg_instances.ttl` into a
   SPARQL-capable RDF store, or run:
   `python evaluation/run_sparql.py`.
2. Run the queries in `evaluation/sparql/`.
3. Compare the query results with the competency questions.
4. Use `coverage_matrix.csv` to report source-variable coverage.
5. Apply `extensibility_protocol.md` when adding a new case.
6. Use `expert_evaluation/` for domain expert review.

## Current run

The current run loaded 876 triples and answered all 10 competency
questions. The selected-variable coverage was 20/20. Expert validation is
still pending.

The goal is to evaluate semantic adequacy, not diagnostic accuracy.
