# Rehabilitation SEKG ontology files

The proof-of-concept is now split into two layers:

- `sekg_ontology.ttl`: the ontology/schema layer. It defines the classes
  and properties used to describe rehabilitation enterprises, data
  sources, clinical cases, sensor recordings, assessment tools,
  functional domains, observed variables, enterprise roles, departments,
  responsibilities, enterprise processes, workflow stages, value
  propositions, external standards, and human-LLM modeling workflows.
- `sekg_instances.ttl`: the instance/data layer. It instantiates the
  current MEx, PhysioNet, and KEDEEA records using the ontology.

`representative_sekg_sample.ttl` is the earlier compact mixed graph. It
is kept as a simple prototype artifact, but new work and evaluation
should use the ontology plus instances split.

## Extending with a new case

If a new case has fields already covered by the ontology, add a new
`sekg:DeidentifiedClinicalCase` instance and link it to the relevant
`sekg:AssessmentInstrument`, `sekg:FunctionalDomain`,
`sekg:ClinicalCondition`, and `sekg:ObservedVariable` instances.

If the case has a new characteristic, add it as a new
`sekg:ObservedVariable`. If the characteristic belongs to a new
rehabilitation domain, also add a new `sekg:FunctionalDomain`. The
ontology only needs to change when the new case requires a genuinely new
kind of entity or relationship.
