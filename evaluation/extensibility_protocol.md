# Extensibility protocol

This protocol tests whether the SEKG can accept a new case with
different characteristics.

## Step 1: Add a new de-identified case

Create a new instance such as:

```turtle
sekg:KEDEEA_Case_004 a sekg:DeidentifiedClinicalCase ;
    rdfs:label "KEDEEA de-identified clinical case 004" ;
    sekg:hasSourceData sekg:KEDEEA_LocalClinicalCases ;
    sekg:serviceArea sekg:OccupationalTherapy ;
    sekg:condition sekg:NewCondition ;
    sekg:usesAssessmentInstrument sekg:NewAssessmentTool ;
    sekg:hasFunctionalDomain sekg:SensoryProcessing ;
    sekg:hasObservedVariable sekg:SensoryProcessingProfileVariable .
```

## Step 2: Classify what changed

Record each new characteristic as one of:

- **New value only**: a new instance of an existing class, such as a new
  `sekg:AssessmentInstrument`.
- **New observed variable**: a new `sekg:ObservedVariable`, such as a
  sensory-processing score.
- **New ontology construct**: a new class or property. This should be
  needed only when the new case introduces a fundamentally new type of
  entity or relationship.

## Step 3: Re-run competency questions

Re-run all SPARQL queries in `evaluation/sparql/`.

The extension passes if:

- existing queries still return valid results,
- the new case appears in relevant queries,
- no direct personal identifiers are required,
- the ontology does not require broad restructuring.

## Suggested reporting table

| Test item | Result |
| --- | --- |
| New case added | yes/no |
| New observed variables required | number |
| New functional domains required | number |
| New classes required | number |
| New object/datatype properties required | number |
| Existing competency queries still work | yes/no |
| Expert review required | yes/no |

## Worked proof-of-concept scenario

This scenario documents how the current ontology would absorb a future
heterogeneous case without broad redesign.

Example future case: an occupational-therapy case includes a sensory
processing profile score that is not present in the current KEDEEA
sample.

Representation:

```turtle
sekg:SensoryProcessing a sekg:FunctionalDomain ;
    rdfs:label "Sensory processing" .

sekg:SensoryProfileAssessment a sekg:AssessmentInstrument ;
    rdfs:label "Sensory profile assessment" .

sekg:SensoryProcessingProfileVariable a sekg:AssessmentVariable ;
    rdfs:label "Sensory processing profile variable" ;
    sekg:variableName "sensory_processing_profile" ;
    sekg:mapsToFunctionalDomain sekg:SensoryProcessing .
```

Expected impact:

| Impact item | Expected result |
| --- | --- |
| New case instance | required |
| New assessment instrument instance | required |
| New functional-domain instance | required |
| New observed-variable instance | required |
| New ontology class | not required |
| New ontology property | not required |
| Existing SPARQL queries | should still run |
| Expert validation | required before acceptance |

This demonstrates the intended extensibility pattern: most new
rehabilitation characteristics should be represented as new instances or
observed variables. The ontology should change only when the new case
requires a genuinely new relationship type or enterprise concept.
