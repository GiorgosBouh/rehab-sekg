# SPARQL evaluation results

Date: 2026-07-09

Loaded graph: `kg/sekg_ontology.ttl` + `kg/sekg_instances.ttl`

Triple count: **876**

## Summary

| Metric | Result |
| --- | --- |
| Competency questions | 10 |
| Answerable competency questions | 10/10 |
| CQ answerability rate | 100% |
| Mapped variables | 20/20 |
| Variable coverage | 100% |
| Expert validation | pending |

## Query results

| SPARQL query | Rows | Answerable |
| --- | --- | --- |
| cq01_cases_by_functional_domain.rq | 22 | yes |
| cq02_assessment_instruments_by_case.rq | 10 | yes |
| cq03_records_by_source_type.rq | 5 | yes |
| cq04_professional_roles_by_record.rq | 5 | yes |
| cq05_observed_variables_by_record.rq | 29 | yes |
| cq06_sensor_measurements_by_record.rq | 5 | yes |
| cq07_cerebral_palsy_cases_domains.rq | 15 | yes |
| cq08_sensor_variables_by_source.rq | 11 | yes |
| cq09_enterprise_roles_by_department.rq | 6 | yes |
| cq10_enterprise_process_value_view.rq | 21 | yes |

### cq01_cases_by_functional_domain.rq

| case | caseLabel | serviceAreaLabel | domainLabel |
| --- | --- | --- | --- |
| sekg:KEDEEA_Case_001 | KEDEEA de-identified clinical case 001 | Occupational therapy | Activities of daily living |
| sekg:KEDEEA_Case_002 | KEDEEA de-identified clinical case 002 | Occupational therapy | Activities of daily living |
| sekg:KEDEEA_Case_001 | KEDEEA de-identified clinical case 001 | Occupational therapy | Adaptation and separation |
| sekg:KEDEEA_Case_003 | KEDEEA de-identified clinical case 003 | Physiotherapy | Assistive device use |
| sekg:KEDEEA_Case_001 | KEDEEA de-identified clinical case 001 | Occupational therapy | Attention |
| sekg:KEDEEA_Case_002 | KEDEEA de-identified clinical case 002 | Occupational therapy | Balance |
| sekg:KEDEEA_Case_003 | KEDEEA de-identified clinical case 003 | Physiotherapy | Balance |
| sekg:KEDEEA_Case_001 | KEDEEA de-identified clinical case 001 | Occupational therapy | Cognition |
| sekg:KEDEEA_Case_002 | KEDEEA de-identified clinical case 002 | Occupational therapy | Cognition |
| sekg:KEDEEA_Case_002 | KEDEEA de-identified clinical case 002 | Occupational therapy | Community participation |
| sekg:KEDEEA_Case_003 | KEDEEA de-identified clinical case 003 | Physiotherapy | Falls risk |
| sekg:KEDEEA_Case_001 | KEDEEA de-identified clinical case 001 | Occupational therapy | Fine motor function |
| sekg:KEDEEA_Case_002 | KEDEEA de-identified clinical case 002 | Occupational therapy | Fine motor function |
| sekg:KEDEEA_Case_003 | KEDEEA de-identified clinical case 003 | Physiotherapy | Gait |
| sekg:KEDEEA_Case_001 | KEDEEA de-identified clinical case 001 | Occupational therapy | Gross motor function |
| sekg:KEDEEA_Case_002 | KEDEEA de-identified clinical case 002 | Occupational therapy | Gross motor function |
| sekg:KEDEEA_Case_003 | KEDEEA de-identified clinical case 003 | Physiotherapy | Muscle strength |
| sekg:KEDEEA_Case_003 | KEDEEA de-identified clinical case 003 | Physiotherapy | Pain |
| sekg:KEDEEA_Case_001 | KEDEEA de-identified clinical case 001 | Occupational therapy | Play and interaction |
| sekg:KEDEEA_Case_003 | KEDEEA de-identified clinical case 003 | Physiotherapy | Posture |
| sekg:KEDEEA_Case_003 | KEDEEA de-identified clinical case 003 | Physiotherapy | Range of motion |
| sekg:KEDEEA_Case_002 | KEDEEA de-identified clinical case 002 | Occupational therapy | Visual-spatial perception |

### cq02_assessment_instruments_by_case.rq

| case | caseLabel | instrumentLabel |
| --- | --- | --- |
| sekg:KEDEEA_Case_001 | KEDEEA de-identified clinical case 001 | Clinical observation |
| sekg:KEDEEA_Case_002 | KEDEEA de-identified clinical case 002 | Bruininks-Oseretsky Test of Motor Proficiency, Second Edition |
| sekg:KEDEEA_Case_002 | KEDEEA de-identified clinical case 002 | Canadian Occupational Performance Measure |
| sekg:KEDEEA_Case_002 | KEDEEA de-identified clinical case 002 | Modified Barthel Index |
| sekg:KEDEEA_Case_002 | KEDEEA de-identified clinical case 002 | Montreal Cognitive Assessment |
| sekg:KEDEEA_Case_003 | KEDEEA de-identified clinical case 003 | Assistive device review |
| sekg:KEDEEA_Case_003 | KEDEEA de-identified clinical case 003 | Functional gait assessment |
| sekg:KEDEEA_Case_003 | KEDEEA de-identified clinical case 003 | Manual muscle testing |
| sekg:KEDEEA_Case_003 | KEDEEA de-identified clinical case 003 | Range of motion assessment |
| sekg:KEDEEA_Case_003 | KEDEEA de-identified clinical case 003 | Visual analogue pain scale |

### cq03_records_by_source_type.rq

| record | recordLabel | source | sourceLabel | sourceType |
| --- | --- | --- | --- | --- |
| sekg:KEDEEA_Case_001 | KEDEEA de-identified clinical case 001 | sekg:KEDEEA_LocalClinicalCases | KEDEEA local de-identified clinical cases | sekg:LocalClinicalCaseSource |
| sekg:KEDEEA_Case_002 | KEDEEA de-identified clinical case 002 | sekg:KEDEEA_LocalClinicalCases | KEDEEA local de-identified clinical cases | sekg:LocalClinicalCaseSource |
| sekg:KEDEEA_Case_003 | KEDEEA de-identified clinical case 003 | sekg:KEDEEA_LocalClinicalCases | KEDEEA local de-identified clinical cases | sekg:LocalClinicalCaseSource |
| sekg:PhysioNet_GaPt03_01 | PhysioNet GaPt03_01 representative force recording | sekg:PhysioNetGaitPDB | PhysioNet Gait in Parkinson's Disease | sekg:OpenGaitDataset |
| sekg:MEx_Subject01_Exercise01 | MEx subject 01, exercise 01 representative recording | sekg:MEx | MEx Multi-modal Exercise dataset | sekg:OpenRehabilitationDataset |

### cq04_professional_roles_by_record.rq

| role | roleLabel | record | recordLabel |
| --- | --- | --- | --- |
| sekg:OccupationalTherapistRole | Occupational therapist | sekg:KEDEEA_Case_001 | KEDEEA de-identified clinical case 001 |
| sekg:OccupationalTherapistRole | Occupational therapist | sekg:KEDEEA_Case_002 | KEDEEA de-identified clinical case 002 |
| sekg:PhysiotherapistRole | Physiotherapist | sekg:KEDEEA_Case_003 | KEDEEA de-identified clinical case 003 |
| sekg:PhysiotherapistRole | Physiotherapist | sekg:MEx_Subject01_Exercise01 | MEx subject 01, exercise 01 representative recording |
| sekg:PhysiotherapistRole | Physiotherapist | sekg:PhysioNet_GaPt03_01 | PhysioNet GaPt03_01 representative force recording |

### cq05_observed_variables_by_record.rq

| record | recordLabel | variable | variableLabel | variableName |
| --- | --- | --- | --- | --- |
| sekg:KEDEEA_Case_001 | KEDEEA de-identified clinical case 001 | sekg:CaseAgeGroupVariable | Age group variable | age_group |
| sekg:KEDEEA_Case_001 | KEDEEA de-identified clinical case 001 | sekg:CaseAssessmentInstrumentsVariable | Assessment instruments variable | assessment_instruments |
| sekg:KEDEEA_Case_001 | KEDEEA de-identified clinical case 001 | sekg:CaseAssessmentPeriodVariable | Assessment period variable | assessment_period |
| sekg:KEDEEA_Case_001 | KEDEEA de-identified clinical case 001 | sekg:CaseConditionSummaryVariable | Condition summary variable | condition_summary |
| sekg:KEDEEA_Case_001 | KEDEEA de-identified clinical case 001 | sekg:CaseFunctionalDomainsVariable | Functional domains variable | functional_domains |
| sekg:KEDEEA_Case_001 | KEDEEA de-identified clinical case 001 | sekg:CaseInterventionFocusVariable | Intervention focus variable | intervention_focus |
| sekg:KEDEEA_Case_002 | KEDEEA de-identified clinical case 002 | sekg:CaseAgeGroupVariable | Age group variable | age_group |
| sekg:KEDEEA_Case_002 | KEDEEA de-identified clinical case 002 | sekg:CaseAssessmentInstrumentsVariable | Assessment instruments variable | assessment_instruments |
| sekg:KEDEEA_Case_002 | KEDEEA de-identified clinical case 002 | sekg:CaseAssessmentPeriodVariable | Assessment period variable | assessment_period |
| sekg:KEDEEA_Case_002 | KEDEEA de-identified clinical case 002 | sekg:CaseConditionSummaryVariable | Condition summary variable | condition_summary |
| sekg:KEDEEA_Case_002 | KEDEEA de-identified clinical case 002 | sekg:CaseFunctionalDomainsVariable | Functional domains variable | functional_domains |
| sekg:KEDEEA_Case_002 | KEDEEA de-identified clinical case 002 | sekg:CaseInterventionFocusVariable | Intervention focus variable | intervention_focus |
| sekg:KEDEEA_Case_003 | KEDEEA de-identified clinical case 003 | sekg:CaseAgeGroupVariable | Age group variable | age_group |
| sekg:KEDEEA_Case_003 | KEDEEA de-identified clinical case 003 | sekg:CaseAssessmentInstrumentsVariable | Assessment instruments variable | assessment_instruments |
| sekg:KEDEEA_Case_003 | KEDEEA de-identified clinical case 003 | sekg:CaseAssessmentPeriodVariable | Assessment period variable | assessment_period |
| sekg:KEDEEA_Case_003 | KEDEEA de-identified clinical case 003 | sekg:CaseConditionSummaryVariable | Condition summary variable | condition_summary |
| sekg:KEDEEA_Case_003 | KEDEEA de-identified clinical case 003 | sekg:CaseFunctionalDomainsVariable | Functional domains variable | functional_domains |
| sekg:KEDEEA_Case_003 | KEDEEA de-identified clinical case 003 | sekg:CaseInterventionFocusVariable | Intervention focus variable | intervention_focus |
| sekg:MEx_Subject01_Exercise01 | MEx subject 01, exercise 01 representative recording | sekg:DepthFeatureVectorVariable | Depth feature vector variable | depth_01..depth_12 |
| sekg:MEx_Subject01_Exercise01 | MEx subject 01, exercise 01 representative recording | sekg:PressureFeatureVectorVariable | Pressure feature vector variable | pressure_01..pressure_12 |
| sekg:MEx_Subject01_Exercise01 | MEx subject 01, exercise 01 representative recording | sekg:TimestampVariable | Timestamp variable | timestamp |
| sekg:MEx_Subject01_Exercise01 | MEx subject 01, exercise 01 representative recording | sekg:AccelerationXVariable | Acceleration X variable | x |
| sekg:MEx_Subject01_Exercise01 | MEx subject 01, exercise 01 representative recording | sekg:AccelerationYVariable | Acceleration Y variable | y |
| sekg:MEx_Subject01_Exercise01 | MEx subject 01, exercise 01 representative recording | sekg:AccelerationZVariable | Acceleration Z variable | z |
| sekg:PhysioNet_GaPt03_01 | PhysioNet GaPt03_01 representative force recording | sekg:LeftFootSensorForceVariable | Left foot sensor force variable | left_sensor_1..left_sensor_8 |
| sekg:PhysioNet_GaPt03_01 | PhysioNet GaPt03_01 representative force recording | sekg:LeftTotalForceVariable | Left total force variable | left_total_force |
| sekg:PhysioNet_GaPt03_01 | PhysioNet GaPt03_01 representative force recording | sekg:RightFootSensorForceVariable | Right foot sensor force variable | right_sensor_1..right_sensor_8 |
| sekg:PhysioNet_GaPt03_01 | PhysioNet GaPt03_01 representative force recording | sekg:RightTotalForceVariable | Right total force variable | right_total_force |
| sekg:PhysioNet_GaPt03_01 | PhysioNet GaPt03_01 representative force recording | sekg:TimeSecondsVariable | Time in seconds variable | time_sec |

### cq06_sensor_measurements_by_record.rq

| record | recordLabel | measurementLabel | modalityLabel |
| --- | --- | --- | --- |
| sekg:MEx_Subject01_Exercise01 | MEx subject 01, exercise 01 representative recording | Depth-camera movement measurement | Depth camera |
| sekg:MEx_Subject01_Exercise01 | MEx subject 01, exercise 01 representative recording | Pressure-mat movement measurement | Pressure mat |
| sekg:MEx_Subject01_Exercise01 | MEx subject 01, exercise 01 representative recording | Thigh acceleration measurement | Thigh accelerometer |
| sekg:MEx_Subject01_Exercise01 | MEx subject 01, exercise 01 representative recording | Wrist acceleration measurement | Wrist accelerometer |
| sekg:PhysioNet_GaPt03_01 | PhysioNet GaPt03_01 representative force recording | Vertical ground reaction force measurement | Foot force sensor array |

### cq07_cerebral_palsy_cases_domains.rq

| case | caseLabel | domainLabel |
| --- | --- | --- |
| sekg:KEDEEA_Case_002 | KEDEEA de-identified clinical case 002 | Activities of daily living |
| sekg:KEDEEA_Case_002 | KEDEEA de-identified clinical case 002 | Balance |
| sekg:KEDEEA_Case_002 | KEDEEA de-identified clinical case 002 | Cognition |
| sekg:KEDEEA_Case_002 | KEDEEA de-identified clinical case 002 | Community participation |
| sekg:KEDEEA_Case_002 | KEDEEA de-identified clinical case 002 | Fine motor function |
| sekg:KEDEEA_Case_002 | KEDEEA de-identified clinical case 002 | Gross motor function |
| sekg:KEDEEA_Case_002 | KEDEEA de-identified clinical case 002 | Visual-spatial perception |
| sekg:KEDEEA_Case_003 | KEDEEA de-identified clinical case 003 | Assistive device use |
| sekg:KEDEEA_Case_003 | KEDEEA de-identified clinical case 003 | Balance |
| sekg:KEDEEA_Case_003 | KEDEEA de-identified clinical case 003 | Falls risk |
| sekg:KEDEEA_Case_003 | KEDEEA de-identified clinical case 003 | Gait |
| sekg:KEDEEA_Case_003 | KEDEEA de-identified clinical case 003 | Muscle strength |
| sekg:KEDEEA_Case_003 | KEDEEA de-identified clinical case 003 | Pain |
| sekg:KEDEEA_Case_003 | KEDEEA de-identified clinical case 003 | Posture |
| sekg:KEDEEA_Case_003 | KEDEEA de-identified clinical case 003 | Range of motion |

### cq08_sensor_variables_by_source.rq

| source | sourceLabel | variable | variableLabel | variableName |
| --- | --- | --- | --- | --- |
| sekg:MEx | MEx Multi-modal Exercise dataset | sekg:DepthFeatureVectorVariable | Depth feature vector variable | depth_01..depth_12 |
| sekg:MEx | MEx Multi-modal Exercise dataset | sekg:PressureFeatureVectorVariable | Pressure feature vector variable | pressure_01..pressure_12 |
| sekg:MEx | MEx Multi-modal Exercise dataset | sekg:TimestampVariable | Timestamp variable | timestamp |
| sekg:MEx | MEx Multi-modal Exercise dataset | sekg:AccelerationXVariable | Acceleration X variable | x |
| sekg:MEx | MEx Multi-modal Exercise dataset | sekg:AccelerationYVariable | Acceleration Y variable | y |
| sekg:MEx | MEx Multi-modal Exercise dataset | sekg:AccelerationZVariable | Acceleration Z variable | z |
| sekg:PhysioNetGaitPDB | PhysioNet Gait in Parkinson's Disease | sekg:LeftFootSensorForceVariable | Left foot sensor force variable | left_sensor_1..left_sensor_8 |
| sekg:PhysioNetGaitPDB | PhysioNet Gait in Parkinson's Disease | sekg:LeftTotalForceVariable | Left total force variable | left_total_force |
| sekg:PhysioNetGaitPDB | PhysioNet Gait in Parkinson's Disease | sekg:RightFootSensorForceVariable | Right foot sensor force variable | right_sensor_1..right_sensor_8 |
| sekg:PhysioNetGaitPDB | PhysioNet Gait in Parkinson's Disease | sekg:RightTotalForceVariable | Right total force variable | right_total_force |
| sekg:PhysioNetGaitPDB | PhysioNet Gait in Parkinson's Disease | sekg:TimeSecondsVariable | Time in seconds variable | time_sec |

### cq09_enterprise_roles_by_department.rq

| enterpriseLabel | departmentLabel | roleLabel | roleTypeLabel | responsibility |
| --- | --- | --- | --- | --- |
| Demo interdisciplinary rehabilitation center | Clinical data governance office | Clinical data steward | Professional role | Checks source provenance, privacy treatment, sample documentation, and data-to-ontology traceability. |
| Demo interdisciplinary rehabilitation center | Clinical data governance office | LLM modeling assistant | Computational assistant role | Suggests candidate ontology concepts, mappings, documentation, and SPARQL queries for human review. |
| Demo interdisciplinary rehabilitation center | Clinical data governance office | Rehabilitation domain expert | Professional role | Validates clinical meaning, organizational fit, ontology mappings, and final acceptance of candidate graph changes. |
| Demo interdisciplinary rehabilitation center | Gait and movement analysis laboratory | Physiotherapist | Professional role | Interprets physiotherapy cases, movement measurements, gait information, and exercise-recording variables. |
| Demo interdisciplinary rehabilitation center | Occupational therapy department | Occupational therapist | Professional role | Interprets occupational therapy assessments, activities of daily living, cognition, participation, and intervention focus. |
| Demo interdisciplinary rehabilitation center | Physiotherapy department | Physiotherapist | Professional role | Interprets physiotherapy cases, movement measurements, gait information, and exercise-recording variables. |

### cq10_enterprise_process_value_view.rq

| processLabel | stageOrder | stageLabel | roleLabel | purpose | valueLabel |
| --- | --- | --- | --- | --- | --- |
| Representative rehabilitation care pathway | 1 | Referral and intake | Clinical data steward | Register the case context and establish the data source and privacy treatment. | Coordinated rehabilitation value proposition |
| Representative rehabilitation care pathway | 2 | Initial assessment | Occupational therapist | Capture clinical assessment instruments, functional domains, observed variables, and relevant sensor evidence. | Coordinated rehabilitation value proposition |
| Representative rehabilitation care pathway | 2 | Initial assessment | Physiotherapist | Capture clinical assessment instruments, functional domains, observed variables, and relevant sensor evidence. | Coordinated rehabilitation value proposition |
| Representative rehabilitation care pathway | 3 | Goal setting | Occupational therapist | Translate assessment findings into rehabilitation goals and priority functional domains. | Coordinated rehabilitation value proposition |
| Representative rehabilitation care pathway | 3 | Goal setting | Physiotherapist | Translate assessment findings into rehabilitation goals and priority functional domains. | Coordinated rehabilitation value proposition |
| Representative rehabilitation care pathway | 4 | Intervention planning | Occupational therapist | Connect goals, clinical conditions, assessments, and responsible professionals to planned interventions. | Coordinated rehabilitation value proposition |
| Representative rehabilitation care pathway | 4 | Intervention planning | Physiotherapist | Connect goals, clinical conditions, assessments, and responsible professionals to planned interventions. | Coordinated rehabilitation value proposition |
| Representative rehabilitation care pathway | 5 | Therapy delivery | Occupational therapist | Deliver occupational therapy, physiotherapy, and movement-analysis activities using the relevant enterprise roles and data. | Coordinated rehabilitation value proposition |
| Representative rehabilitation care pathway | 5 | Therapy delivery | Physiotherapist | Deliver occupational therapy, physiotherapy, and movement-analysis activities using the relevant enterprise roles and data. | Coordinated rehabilitation value proposition |
| Representative rehabilitation care pathway | 6 | Re-assessment | Occupational therapist | Re-evaluate functional domains and compare assessment evidence over time. | Coordinated rehabilitation value proposition |
| Representative rehabilitation care pathway | 6 | Re-assessment | Physiotherapist | Re-evaluate functional domains and compare assessment evidence over time. | Coordinated rehabilitation value proposition |
| Representative rehabilitation care pathway | 7 | Discharge or research reuse | Clinical data steward | Summarize outcomes, preserve provenance, and enable approved research reuse of de-identified evidence. | Coordinated rehabilitation value proposition |
| Representative rehabilitation care pathway | 7 | Discharge or research reuse | Rehabilitation domain expert | Summarize outcomes, preserve provenance, and enable approved research reuse of de-identified evidence. | Coordinated rehabilitation value proposition |
| SEKG change-governance process | 1 | Candidate suggestion | LLM modeling assistant | Suggest candidate classes, properties, mappings, documentation, or SPARQL queries. | Coordinated rehabilitation value proposition |
| SEKG change-governance process | 2 | Provenance and privacy review | Clinical data steward | Check source traceability, privacy treatment, and whether the change can be justified from available evidence. | Coordinated rehabilitation value proposition |
| SEKG change-governance process | 3 | Clinical validation | Occupational therapist | Validate clinical meaning, rehabilitation fit, and role responsibility assignments. | Coordinated rehabilitation value proposition |
| SEKG change-governance process | 3 | Clinical validation | Physiotherapist | Validate clinical meaning, rehabilitation fit, and role responsibility assignments. | Coordinated rehabilitation value proposition |
| SEKG change-governance process | 3 | Clinical validation | Rehabilitation domain expert | Validate clinical meaning, rehabilitation fit, and role responsibility assignments. | Coordinated rehabilitation value proposition |
| SEKG change-governance process | 4 | Governance decision | Clinical data steward | Record whether the candidate change is accepted, revised, rejected, or postponed. | Coordinated rehabilitation value proposition |
| SEKG change-governance process | 4 | Governance decision | Rehabilitation domain expert | Record whether the candidate change is accepted, revised, rejected, or postponed. | Coordinated rehabilitation value proposition |
| SEKG change-governance process | 5 | Graph release | Clinical data steward | Update ontology, instances, demo artifacts, and competency-query results after accepted changes. | Coordinated rehabilitation value proposition |
