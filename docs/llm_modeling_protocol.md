# LLM modeling protocol

This document records how LLM assistance is used in the SEKG proof of
concept. The LLM is not an autonomous ontology builder. It proposes
candidate artifacts that require human validation before they can become
part of the ontology, instance graph, demo, or evaluation package.

## Inputs

The LLM may receive only de-identified or public material:

- de-identified sample variables from `data/samples/`
- current ontology excerpts from `kg/sekg_ontology.ttl`
- current instance excerpts from `kg/sekg_instances.ttl`
- competency questions from `evaluation/competency_questions.md`
- SPARQL query results from `evaluation/sparql_results.md`
- reviewer or expert comments without personal identifiers

Raw clinical documents and direct personal identifiers must not be used
as LLM prompt input.

## Prompt template

```text
You are assisting with a Semantic Enterprise Knowledge Graph for
interdisciplinary rehabilitation.

Input artifact:
[paste de-identified variables, ontology excerpt, competency question,
or reviewer comment]

Task:
[choose one: suggest ontology concepts, suggest mappings, draft SPARQL,
identify missing enterprise roles/processes, improve documentation]

Constraints:
- Do not invent patient-specific facts.
- Do not include personal identifiers.
- Treat all output as a candidate suggestion.
- Prefer reuse of existing SEKG classes/properties where possible.
- If a new class or property is proposed, explain why an instance or
  observed variable is insufficient.
- Separate clinical meaning from enterprise/governance meaning.

Expected output:
1. Candidate change
2. Rationale
3. Affected artifacts
4. Required human validator
5. Risks or uncertainty
```

## Candidate output types

| Output type | Example | Required validator |
| --- | --- | --- |
| Ontology concept | New class, property, or constraint | Rehabilitation domain expert and data steward |
| Variable mapping | Source variable to `sekg:ObservedVariable` | Relevant therapist and data steward |
| Enterprise mapping | Role, department, workflow stage, responsibility | Domain expert or manager |
| SPARQL query | New competency-query implementation | Data steward and domain expert |
| Documentation | Explanation, README text, review response | Author and domain expert |

## Governance decision

Every LLM candidate must be assigned one decision:

- `accept`: the candidate is clinically and organizationally valid.
- `revise`: the candidate is useful but must be modified.
- `reject`: the candidate is incorrect, unsupported, or unsafe.
- `postpone`: more evidence or expert input is needed.

Accepted changes must be reflected in the relevant artifact and followed
by re-running the SPARQL and coverage checks.

## Reproducibility note

The paper should report that LLM use followed a structured prompt
protocol and that accepted outputs were manually reviewed. It should not
claim that the LLM independently generated a clinically validated
ontology.
