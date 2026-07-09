# Evaluation plan for the rehabilitation SEKG

The proof-of-concept is evaluated as a semantic modeling contribution,
not as a predictive clinical model. The goal is to test whether the
ontology and graph can represent heterogeneous rehabilitation data,
answer meaningful questions, cover source variables, and accept new
cases without major redesign.

## Evaluation dimensions

1. **Competency-question answering**
   - Define questions that the SEKG should answer.
   - Implement each question as a SPARQL query over `kg/sekg_instances.ttl`.
   - Report whether the query is answerable and whether the returned
     records match the expected interpretation.

2. **Source-variable coverage**
   - List the variables in the selected samples.
   - Map each variable to a class, property, or `sekg:ObservedVariable`.
   - Report coverage as:
     `mapped variables / total selected variables`.

3. **Extensibility with heterogeneous cases**
   - Add or simulate a new case with at least one previously unseen
     characteristic.
   - Record whether the new characteristic can be represented as a new
     `sekg:ObservedVariable`, a new concept instance, or whether a new
     ontology class/property is required.
   - Re-run the competency questions and check whether existing queries
     still work.

4. **Expert validation**
   - Ask rehabilitation experts to review the concepts, relations, and
     mappings.
   - Use a small scoring sheet for correctness, completeness, usefulness,
     and clarity.
   - Record disagreements and revise mappings only after expert approval.

## Metrics

- **CQ answerability rate**: answered competency questions / total
  competency questions.
- **Variable coverage**: mapped selected variables / total selected
  variables.
- **Extensibility impact**: number of ontology-level changes required
  for a new case.
- **Expert agreement**: percentage of reviewed concepts and relations
  accepted by experts.

## Expected claim

The evaluation does not claim clinical predictive accuracy. It supports
the claim that the SEKG can semantically integrate clinical cases,
sensor data, professional roles, assessment instruments, functional
domains, and provenance in a way that is queryable, extensible, and
clinically reviewable.
