# Standards alignment

The SEKG is positioned as an integration layer, not as a replacement for
healthcare standards or biomedical terminologies.

## Standards positioning

| Standard or terminology | What it provides | SEKG role |
| --- | --- | --- |
| FHIR | Clinical data exchange resources and APIs | SEKG can link to FHIR resources and add local enterprise context such as roles, responsibilities, provenance, and governance decisions. |
| ICF | Classification of functioning, disability, activity, participation, and environmental factors | SEKG functional domains can be aligned to ICF categories while preserving local rehabilitation workflow and organizational context. |
| UMLS | Biomedical terminology integration | SEKG clinical concepts can be mapped to normalized biomedical concepts where appropriate. |
| SNOMED CT | Clinical terminology | SEKG can align clinical conditions and assessment concepts where licensing and local implementation allow. |

## Current ICF-oriented conceptual alignment

The current prototype does not claim a complete ICF import or official
ICF coding. It uses conceptual alignment that can later be refined by a
rehabilitation expert.

| SEKG functional domain | ICF-oriented area |
| --- | --- |
| Gait | Mobility |
| Balance | Body functions and mobility |
| Activities of daily living | Self-care and domestic life |
| Cognition | Mental functions |
| Attention | Mental functions |
| Fine motor function | Mobility and hand/arm use |
| Gross motor function | Mobility |
| Pain | Body functions |
| Posture | Body functions and mobility |
| Community participation | Participation |
| Play and interaction | Activities and participation |
| Assistive device use | Environmental factors and mobility support |

## Reporting boundary

The paper should state that standards alignment is conceptual in the
current proof of concept. Full FHIR, ICF, UMLS, or SNOMED CT integration
is a future extension and would require expert terminology review and,
where relevant, licensing or implementation checks.
