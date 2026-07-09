# Competency questions

These competency questions define what the rehabilitation SEKG should be
able to answer. Each question has a corresponding SPARQL file in
`evaluation/sparql/`.

| ID | Competency question | Stakeholder information need | Evidence expected |
| --- | --- | --- | --- |
| CQ1 | Which de-identified clinical cases are associated with a given functional domain, such as balance or activities of daily living? | Clinicians need to identify cases related to a functional concern. | Case IDs, labels, service areas, functional domains |
| CQ2 | Which assessment instruments were used for each KEDEEA clinical case? | Therapists and reviewers need traceability between cases and assessment tools. | Case IDs and assessment instruments |
| CQ3 | Which records are derived from local clinical sources and which are derived from external open datasets? | Data stewards need to distinguish local clinical evidence from open research datasets. | Records and source data |
| CQ4 | Which professional roles interpret which representative records? | Managers need to know which roles are responsible for interpreting each kind of evidence. | Professional roles and records |
| CQ5 | Which observed variables are available for each representative record? | Data users need to know what variables can support queries and future analyses. | Record IDs and variables |
| CQ6 | Which records include sensor-derived measurements, and what modality do they use? | Movement-analysis staff need to locate sensor evidence and modalities. | Record IDs, measurement types, sensor modalities |
| CQ7 | Which cases are linked to cerebral palsy and what functional domains do they cover? | Clinicians need condition-specific views across functional domains. | Case IDs, condition, functional domains |
| CQ8 | Which source data capture variables related to sensor time-series data? | Technical and clinical users need to understand which datasets contain sensor variables. | Data sources and sensor variables |
| CQ9 | Which enterprise roles are assigned to which departments, and what responsibilities do they have in the modeling workflow? | Governance reviewers need role-responsibility traceability. | Enterprise roles, departments, role types, responsibilities |
| CQ10 | Which enterprise processes, workflow stages, responsible roles, and value propositions are represented? | Reviewers need evidence that the graph models enterprise processes and value creation, not only data records. | Processes, stages, responsible roles, stage purposes, value proposition |

## Pass criteria

A competency question is considered answered if:

- the SPARQL query runs over the instance graph,
- the result set is non-empty when the current sample data should contain
  an answer,
- the returned records are semantically consistent with the source data,
- no direct personal identifiers are required to answer the question.
