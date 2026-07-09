# A Semantic Enterprise Knowledge Graph for Interdisciplinary Rehabilitation

## Working Title

**A Semantic Enterprise Knowledge Graph for Interdisciplinary
Rehabilitation: Human--LLM Collaborative Modeling and Clinical Data
Integration**

------------------------------------------------------------------------

# Core Idea

The paper proposes a new framework for representing an interdisciplinary
rehabilitation center as a **Semantic Enterprise Knowledge Graph
(SEKG)** rather than as a collection of disconnected databases.

Instead of storing only data, the organization stores **knowledge**:
patients, professionals, assessments, interventions, outcomes,
departments, equipment, research activities, and their semantic
relationships.

Large Language Models (LLMs) are not used to replace experts, but to
**collaborate with them** during the construction and evolution of the
enterprise model.

------------------------------------------------------------------------

# Motivation

Current rehabilitation centers generate heterogeneous clinical and
administrative data:

-   Patient demographics
-   Diagnoses
-   Assessments
-   Therapy sessions
-   Clinical outcomes
-   Administrative information
-   Research data

These datasets usually exist in isolated systems without explicit
semantic relationships.

Consequently:

-   interoperability is limited,
-   knowledge cannot easily be reused,
-   natural language querying is difficult,
-   AI-based decision support remains limited.

------------------------------------------------------------------------

# Proposed Solution

Create a **Semantic Enterprise Knowledge Graph** that models the
rehabilitation organization.

The model includes:

-   Patients
-   Healthcare professionals
-   Departments
-   Assessments
-   Interventions
-   Outcomes
-   Appointments
-   Devices
-   Clinical protocols
-   Research projects

All entities are connected through semantic relationships.

For PoEM 2026, the enterprise contribution is that the graph does not
only integrate clinical records. It also represents the rehabilitation
center as an enterprise model: departments, professional and
computational roles, responsibilities, source provenance, data-governance
tasks, and the human--LLM workflow used to evolve the model. In the
current proof of concept, the `DemoRehabilitationCenter` is linked to
physiotherapy, occupational therapy, gait/movement analysis, and clinical
data-governance departments. Roles such as physiotherapist, occupational
therapist, data steward, rehabilitation domain expert, and LLM modeling
assistant are explicitly assigned responsibilities in the enterprise
knowledge graph.

The contribution can be stated more precisely as follows:

> The paper introduces an enterprise-modeling perspective into the
> construction of a rehabilitation knowledge graph. The graph models not
> only clinical concepts and data records, but also the organization
> itself: roles, responsibilities, care processes, value creation,
> provenance, governance, and human--AI modeling decisions.

This distinguishes the SEKG from a clinical-only or biomedical-only
knowledge graph. The center itself becomes the object of semantic
modeling, not merely the place where clinical data happen to be stored.

------------------------------------------------------------------------

# Enterprise Modeling Scope

The proof of concept now represents three complementary enterprise
views:

1.  **Process view.** The representative rehabilitation pathway is
    modeled as referral/intake, initial assessment, goal setting,
    intervention planning, therapy delivery, re-assessment, and
    discharge or research reuse. These stages connect clinical evidence
    to responsible enterprise roles.
2.  **Value view.** The modeled value proposition is coordinated
    interdisciplinary rehabilitation: making assessments, functional
    domains, sensor evidence, professional responsibilities, provenance,
    and governance decisions traceable across the organization.
3.  **Governance view.** Changes to the ontology or instance graph follow
    a human--LLM governance workflow: LLM suggestion, provenance/privacy
    review, clinical validation, decision recording, and graph release.

The SEKG is not proposed as a replacement for established enterprise
modeling languages such as ArchiMate or DEMO. Those languages are useful
for high-level architecture, transactions, roles, and organizational
coordination. The SEKG deliberately focuses on a complementary need:
making rehabilitation-specific enterprise knowledge executable,
queryable, provenance-aware, and connectable to clinical and sensor data
through RDF and SPARQL.

## Methodological pipeline and metamodel

The contribution is a methodology and architectural framework, not only
the resulting TTL files. The bridging mechanism is:

1.  **Enterprise analysis.** Identify rehabilitation actors, departments,
    responsibilities, care processes, value propositions, data sources,
    governance decisions, and stakeholder information needs.
2.  **Metamodel translation.** Translate the enterprise analysis into a
    lightweight SEKG metamodel: `EnterpriseRole`, `Department`,
    `EnterpriseProcess`, `WorkflowStage`, `ValueProposition`,
    `DataSource`, `RepresentativeRecord`, and `ObservedVariable`.
3.  **Ontology construction.** Encode the metamodel as RDF/OWL classes
    and properties so that enterprise concepts can be queried together
    with clinical cases and sensor evidence.
4.  **Instantiation.** Populate the ontology with de-identified local
    cases and representative open-dataset records.
5.  **LLM-assisted modeling.** Use structured prompts to propose
    candidate concepts, mappings, documentation, and SPARQL queries.
6.  **Human governance.** Accept only changes that pass provenance,
    privacy, clinical, and organizational validation.

The proof of concept therefore uses a **custom lightweight enterprise
metamodel** rather than a full ArchiMate, DEMO, BPMN, or TOGAF model. The
choice is deliberate: those frameworks provide useful enterprise
architecture and process-analysis concepts, but the present prototype
requires an RDF-native model that directly links roles, processes,
observed variables, clinical cases, provenance, and SPARQL competency
questions. The custom metamodel is compatible with enterprise-modeling
thinking: roles map to enterprise actors/responsibilities, workflow
stages map to process elements, value propositions map to enterprise
goals or outcomes, and governance criteria map to decision/control
points.

------------------------------------------------------------------------

# Positioning Against Healthcare Standards

The proposed SEKG is also not intended to replace healthcare standards
or biomedical terminologies. It is a semantic integration layer that can
align with them:

-   **FHIR** supports clinical data exchange. The SEKG can link to FHIR
    resources or FHIR RDF representations where available, while adding
    organization-specific semantics about roles, responsibilities,
    workflows, and governance.
-   **ICF** supports classification of functioning, disability,
    activity, participation, and environmental factors. The SEKG can use
    ICF as a reference for functional-domain alignment, while still
    modeling local rehabilitation workflows and responsibilities.
-   **UMLS and SNOMED CT** support biomedical terminology integration
    and clinical concept normalization. The SEKG can align clinical
    concepts to such terminologies, while focusing its own contribution
    on enterprise-level semantic integration.

Thus, the SEKG should be read as complementary infrastructure: FHIR
helps exchange data, ICF helps classify functioning, UMLS/SNOMED CT help
normalize clinical terms, and the SEKG connects these resources to the
rehabilitation organization's processes, roles, provenance, and
governance.

The current implementation uses conceptual alignment rather than a full
standards import. For example, functional domains such as gait, balance,
activities of daily living, cognition, pain, and participation are
modeled as SEKG functional-domain instances that can later be aligned to
ICF categories. This avoids overstating standards compliance while
making the intended integration path explicit.

------------------------------------------------------------------------

# Proof-of-Concept Data Strategy

The proof-of-concept should use real rehabilitation data, but only as
small representative samples. The purpose is not to train a predictive
model; it is to demonstrate how the SEKG can integrate heterogeneous
sources while preserving provenance, modality, clinical meaning, and
governance information.

The initial sample layer uses one representative record from each
available data-source type:

-   **MEx Multi-modal Exercise dataset**: one subject/exercise recording
    with wrist accelerometer, thigh accelerometer, pressure mat, and
    depth-camera data.
-   **PhysioNet Gait in Parkinson's Disease**: one force-sensor gait
    recording from a Parkinson's disease subject.
-   **KEDEEA local clinical cases**: three de-identified real assessment
    cases from occupational therapy and physiotherapy, represented only
    through clinically relevant fields such as service area, assessment
    tools, functional domains, and intervention focus.

These samples must not be interpreted as belonging to the same patient,
clinic, or care episode. They are independent real-world examples used to
show how an enterprise knowledge graph can connect data sources, sensors,
measurements, assessment documents, clinical conditions, professional
roles, departments, and data-governance responsibilities. Direct personal
identifiers from the local clinical files are excluded from the
proof-of-concept artifacts. This is more appropriate than using purely
synthetic data because it demonstrates the SEKG's ability to deal with
realistic heterogeneity while keeping the prototype small enough for
manual validation by rehabilitation experts.

The corresponding local proof-of-concept artifacts are:

-   `data/samples/`: small CSV snippets extracted from real source files.
-   `kg/sekg_ontology.ttl`: the ontology layer, defining reusable
    classes and properties such as rehabilitation enterprise,
    department, enterprise role, modeling workflow, clinical case, data
    source, assessment instrument, functional domain, sensor modality,
    and observed variable.
-   `kg/sekg_instances.ttl`: the instance layer, representing the current
    MEx, PhysioNet, and KEDEEA examples using the ontology.
-   `demo/index.html`: a lightweight static demonstrator for browsing
    representative records, enterprise structure, graph links, ontology
    artifacts, and SPARQL evaluation results.
-   `docs/enterprise_model_views.md`: a compact enterprise-modeling view
    with care-pathway, governance, role-responsibility, standards, and
    value perspectives.
-   `docs/llm_modeling_protocol.md`: the structured LLM prompt workflow,
    including expected inputs, outputs, and human validation rules.
-   `docs/standards_alignment.md`: the current conceptual alignment
    between SEKG concepts and FHIR, ICF, UMLS, and SNOMED CT.

The ontology is intentionally variable-aware but not restricted to the
current variables only. Existing fields such as age group, assessment
period, functional domains, intervention focus, accelerometer axes, and
force-sensor values are modeled as observed variables. If a future case
contains a different characteristic, it can be added as a new observed
variable and linked to the relevant case, assessment instrument, or
functional domain. The ontology itself only needs to be extended when the
new case introduces a genuinely new kind of entity or relationship.

------------------------------------------------------------------------

# Evaluation Strategy

The proposed SEKG is evaluated as a semantic modeling artifact rather
than as a predictive clinical model. The evaluation therefore focuses on
representational adequacy, queryability, coverage, extensibility, and
expert validation.

The current evaluation tests expressiveness, semantic fidelity, and
traceability. It does not test computational performance, large-scale
storage, query optimization, or statistical generalization. The small
sample size is intentional for this proof of concept: the objective is
to demonstrate whether the enterprise-modeling method can represent
heterogeneous rehabilitation evidence and governance structures in a
queryable form.

The evaluation follows four complementary steps:

1.  **Competency-question answering.** A set of competency questions is
    defined to test whether the graph can answer meaningful
    rehabilitation-enterprise questions connected to stakeholder
    information needs, such as which cases involve balance problems,
    which assessment instruments were used, which records come from local
    clinical sources, which records contain sensor measurements, which
    professional roles interpret each record, which enterprise roles are
    assigned to which departments and responsibilities, and which
    enterprise processes support the modeled value proposition. Each
    competency question is implemented as a SPARQL query.
2.  **Source-variable coverage.** The selected variables from the KEDEEA
    cases, MEx samples, and PhysioNet gait sample are mapped to ontology
    classes, properties, or `sekg:ObservedVariable` instances. Coverage is
    reported as the number of mapped variables divided by the total
    number of selected variables. The coverage matrix also records the
    enterprise role responsible for or expected to use each variable.
3.  **Extensibility test.** A new or simulated case is added to the
    graph. The test records whether new information can be represented as
    new instances, new observed variables, or whether deeper ontology
    changes are required. Existing competency questions are re-run to
    check that the graph remains stable. A worked scenario for adding a
    sensory-processing assessment demonstrates that many future
    extensions require new instances or variables, not ontology redesign.
4.  **Expert validation.** Rehabilitation experts review the modeled
    concepts, relationships, and mappings, focusing on clinical
    correctness, completeness, usefulness, and clarity. LLM-generated or
    LLM-assisted ontology suggestions are accepted only after human
    validation. The current packet supports an initial review by one
    rehabilitation collaborator and can be extended to 2-3 experts for a
    stronger final study.

The corresponding local evaluation artifacts are:

-   `evaluation/competency_questions.md`: the competency questions and
    pass criteria.
-   `evaluation/sparql/`: executable SPARQL query templates for each
    competency question.
-   `evaluation/coverage_matrix.csv`: mapping between source variables
    and ontology elements.
-   `evaluation/extensibility_protocol.md`: protocol for testing new
    heterogeneous cases.
-   `evaluation/expert_validation_form.md`: lightweight expert review
    form.

This evaluation supports the claim that the SEKG can represent
heterogeneous rehabilitation data in a way that is semantically
queryable, variable-aware, extensible, and clinically reviewable.

## Preliminary SPARQL Results

The current proof-of-concept ontology and instance graph were loaded into
an in-memory RDF store using `rdflib`. The graph contained 876 triples
across the ontology and instance layers. All ten competency-question
queries executed successfully and returned non-empty result sets,
indicating that the current graph can answer the predefined
rehabilitation-enterprise questions.

| Metric | Result |
| --- | --- |
| RDF triples loaded | 876 |
| Competency questions tested | 10 |
| Answerable competency questions | 10/10 |
| Competency-question answerability rate | 100% |
| Selected variables mapped | 20/20 |
| Source-variable coverage | 100% |
| Expert validation | Pending |

The SPARQL results should be interpreted as preliminary feasibility
evidence. They show that the proposed ontology can represent the selected
data sources and support semantic querying over clinical cases, sensor
records, assessment instruments, professional roles, enterprise
departments, care-process stages, value propositions, role
responsibilities, functional domains, observed variables, and provenance.
The added enterprise-process query returned 21 process-stage,
responsibility, and value-proposition rows. The results do not yet
establish clinical validity, because expert validation remains a planned
evaluation step.

------------------------------------------------------------------------

# Human--LLM Collaborative Modeling

The proposed framework follows a human-in-the-loop approach.

## Human experts

Domain experts define:

-   concepts
-   relationships
-   business rules
-   validation

## LLM

The LLM assists by:

-   suggesting ontology concepts
-   proposing relationships
-   identifying inconsistencies
-   generating ontology fragments
-   translating natural language into Cypher/SPARQL queries

Human experts always validate the proposed knowledge.

## Governance protocol

The LLM is treated as a controlled modeling assistant, not as an
autonomous ontology engineer. The proposed governance protocol is:

1.  **Candidate suggestion.** The LLM proposes candidate classes,
    properties, mappings, documentation, or SPARQL queries.
2.  **Provenance and privacy review.** The data steward checks whether
    the suggestion is supported by an available source and whether it
    respects the de-identification policy.
3.  **Clinical validation.** A rehabilitation expert checks clinical
    meaning, role fit, and whether the mapping is understandable to the
    relevant discipline.
4.  **Decision recording.** The candidate is accepted, revised, rejected,
    or postponed. Rejected or revised suggestions are not added silently.
5.  **Graph release.** Accepted changes are added to the ontology,
    instance graph, demo, and evaluation artifacts. Competency questions
    and coverage checks are re-run.

This makes the LLM contribution auditable: its role is to accelerate
candidate modeling work, while acceptance remains a human governance
decision.

The LLM workflow is documented as a reusable prompt protocol rather than
as ad-hoc interaction. Each prompt specifies the input artifact, modeling
task, constraints, expected structured output, and human validation step.
This supports reproducibility and helps distinguish LLM assistance from
final expert-approved ontology content.

------------------------------------------------------------------------

# Enterprise Modeling Workflow

1.  Model the rehabilitation organization.
2.  Define enterprise entities.
3.  Define semantic relationships.
4.  Implement the Enterprise Knowledge Graph.
5.  Use LLMs to support continuous model evolution.
6.  Enable intelligent applications.

------------------------------------------------------------------------

# Potential Applications

-   Natural language querying
-   Clinical decision support
-   Semantic interoperability
-   Knowledge discovery
-   Research analytics
-   Explainable AI
-   Clinical pathway exploration

------------------------------------------------------------------------

# Proposed Abstract

Interdisciplinary rehabilitation centers generate large volumes of
heterogeneous clinical, administrative, and research data. Although
these data support patient care, they are typically stored in isolated
information systems that lack explicit semantic relationships, limiting
interoperability, knowledge reuse, and intelligent decision support.
This paper proposes a Semantic Enterprise Knowledge Graph (SEKG)
framework for modeling rehabilitation organizations as interconnected
semantic ecosystems rather than collections of independent databases.
The proposed framework captures patients, healthcare professionals,
assessments, interventions, outcomes, clinical pathways, and
organizational processes within a unified enterprise knowledge graph.
Unlike clinical-only knowledge graphs, the SEKG explicitly represents the
organization itself through departments, roles, responsibilities, care
processes, value propositions, provenance, and governance decisions.
Large Language Models (LLMs) are introduced as collaborative assistants
that support domain experts during the modeling process by suggesting
concepts, relationships, and ontology extensions while keeping human
experts responsible for validation and governance. The proof of concept
uses de-identified local rehabilitation cases and representative open
sensor datasets to demonstrate semantic integration, SPARQL
queryability, source-variable coverage, and enterprise-process
traceability. The resulting
semantic representation enables natural language querying, semantic
interoperability, knowledge discovery, and AI-assisted clinical decision
support. The paper discusses the architecture, collaborative modeling
workflow, and potential applications of the proposed approach,
illustrating how enterprise modeling and generative AI can jointly
support the digital transformation of interdisciplinary rehabilitation
services.

------------------------------------------------------------------------

# Related Work

Research on enterprise modeling and enterprise interoperability has long
argued that organizations should be represented not only through isolated
information systems, but also through explicit models of their processes,
resources, goals, actors, and constraints. Vernadat describes enterprise
modeling and integration as a foundation for coordinating heterogeneous
organizational functions, while later work on enterprise integration and
interoperability emphasizes that interoperability is not only technical,
but also semantic and organizational [1,2]. Ontology-based enterprise
modeling extends this view by giving enterprise concepts formal meaning,
shared vocabularies, and machine-processable relationships. In this
tradition, enterprise models are not merely diagrams for documentation;
they become knowledge structures that can support reasoning, validation,
and reuse [3,4]. However, most enterprise modeling work remains focused
on generic organizational processes or industrial/business settings, and
less attention has been given to rehabilitation organizations where
clinical pathways, interdisciplinary teams, patient functioning,
administrative resources, and research activities must be modeled
together.

Knowledge graphs provide a complementary foundation for representing such
heterogeneous organizational knowledge. General knowledge graph research
defines KGs as graph-based structures that combine entities,
relationships, schemas, identity management, context, reasoning, and
data integration mechanisms [5]. Surveys on KG construction and
refinement show that KGs can support enrichment, quality assessment,
entity alignment, link prediction, and the integration of structured and
semi-structured data [6,7]. These capabilities are important for
rehabilitation centers because relevant knowledge is distributed across
clinical records, assessment tools, appointments, professional roles,
equipment, outcome measures, and research datasets. Yet, general KG
research usually treats the domain schema as a given technical artifact;
it does not by itself explain how a complex care organization should be
modeled as an enterprise or how domain experts should participate in the
continuous evolution of that model.

Biomedical informatics has developed important resources for semantic
interoperability and clinical data integration. The Unified Medical
Language System (UMLS) demonstrates how large-scale biomedical
terminologies can be integrated to support concept normalization and
semantic access across heterogeneous vocabularies [8]. In parallel,
standards-based approaches such as SMART on FHIR show how clinical
systems can expose interoperable health data and applications through
shared APIs and information models [9]. Biomedical knowledge graph
research further shows how graph-based representations can connect
biomedical entities and support discovery, interpretation, and
decision-support tasks [10]. These efforts are highly relevant, but their
main focus is usually biomedical knowledge, terminology integration, or
electronic health record interoperability. They do not fully address the
enterprise-level modeling of a rehabilitation center as a socio-technical
organization in which patients, professionals, departments,
interventions, devices, appointments, outcomes, and research processes
are all first-class semantic entities.

Rehabilitation introduces additional modeling requirements because care
is organized around functioning, participation, and longitudinal change,
not only around diagnoses. The International Classification of
Functioning, Disability and Health (ICF) has been widely discussed in
rehabilitation literature as a biopsychosocial framework for describing
body functions, activities, participation, and environmental factors
[11,12]. Work on ICF linking rules also shows how clinical instruments
and assessment items can be mapped to standardized functioning
categories [13]. This literature provides an important semantic anchor
for rehabilitation assessment and outcome modeling. Nevertheless, ICF
does not model the local enterprise context in which rehabilitation is
delivered: the professionals involved, the scheduling and coordination of
interventions, the equipment and facilities used, the administrative
constraints, or the research activities connected to clinical practice.
A rehabilitation knowledge graph therefore needs to connect clinical
functioning concepts with organizational and operational knowledge.

Recent work on human-in-the-loop and interactive machine learning is
also relevant because clinical knowledge modeling cannot be delegated
entirely to automated systems. Human-in-the-loop approaches in health
informatics emphasize that expert judgment is necessary when machine
learning systems operate in complex and safety-critical domains [14].
More broadly, interactive machine learning research argues for systems in
which humans guide, correct, and validate model behavior rather than
simply consume automated outputs [15]. This perspective is particularly
important for ontology and knowledge graph engineering, where apparently
plausible concepts or relationships may be clinically wrong,
organizationally inappropriate, or insufficiently governed.

Large Language Models (LLMs) add a new dimension to this discussion.
Clinical LLM studies show that language models can encode substantial
medical knowledge and support language-mediated tasks, but they also
highlight limitations related to factuality, safety, bias, and the need
for rigorous human evaluation before clinical use [16]. For the present
proposal, this suggests a restrained role for LLMs: they should not act
as autonomous clinical decision makers or authoritative ontology
designers. Instead, they can assist domain experts by proposing candidate
concepts, relationships, mappings, documentation, and natural-language
queries over the graph. The final responsibility for validation,
governance, and clinical interpretation remains with human experts.

The proposed Semantic Enterprise Knowledge Graph (SEKG) is positioned at
the intersection of these research streams. Compared with enterprise
modeling, it gives the enterprise model a semantic graph implementation
that can be queried, evolved, and reused. It does not replace enterprise
modeling languages such as ArchiMate or DEMO; rather, it operationalizes
selected enterprise views as RDF resources that are directly connected
to rehabilitation cases, variables, roles, provenance, and competency
queries. Compared with biomedical
knowledge graphs, it treats the rehabilitation center itself as the
domain of knowledge, not merely as a data source. Compared with
interoperability standards, it aims to represent not only exchanged
clinical data, but also the relationships among assessments,
interventions, outcomes, professionals, departments, resources, and
research activities. Compared with existing human-in-the-loop AI work, it
focuses specifically on collaborative enterprise modeling, where LLMs
support but do not replace expert modeling work. This combination
addresses a gap in the literature: the lack of a rehabilitation-specific
semantic enterprise model that integrates clinical data, organizational
knowledge, and expert-supervised LLM assistance within a single evolving
knowledge graph.

------------------------------------------------------------------------

# Novelty

The contribution is not simply another knowledge graph.

The key idea is:

> The Enterprise Model represents the digital understanding of the
> rehabilitation organization. The Knowledge Graph is its semantic
> implementation. LLMs act as collaborative assistants that continuously
> help experts design, enrich, and maintain this model.

More specifically, the paper shifts the focus from data modeling to
organization modeling: clinical cases, sensor measurements, and
assessment variables are connected to the enterprise structures that
produce, interpret, govern, and reuse them.

This combines three research areas:

1.  Enterprise Modeling
2.  Semantic Knowledge Graphs
3.  Human--LLM Collaborative Modeling

This combination aligns closely with the PoEM 2026 topics:

-   AI-assisted Enterprise Modeling
-   LLM-enhanced Enterprise Modeling
-   AI and Human Collaboration for Enterprise Modeling

------------------------------------------------------------------------

# References (Scopus-indexed)

[1] Vernadat, F. B. (2002). Enterprise Modeling and Integration (EMI):
Current Status and Research Perspectives. *Annual Reviews in Control*,
26(1), 15-25. https://doi.org/10.1016/S1367-5788(02)00007-1

[2] Chen, D., Doumeingts, G., & Vernadat, F. (2008). Architectures for
enterprise integration and interoperability: Past, present and future.
*Computers in Industry*, 59(7), 647-659.
https://doi.org/10.1016/j.compind.2007.12.016

[3] Vernadat, F. B. (2020). Enterprise Modelling: Research review and
outlook. *Computers in Industry*, 122, Article 103265.
https://doi.org/10.1016/j.compind.2020.103265

[4] Gruber, T. R. (1995). Toward principles for the design of ontologies
used for knowledge sharing. *International Journal of Human-Computer
Studies*, 43(5-6), 907-928. https://doi.org/10.1006/ijhc.1995.1081

[5] Hogan, A., Blomqvist, E., Cochez, M., d'Amato, C., de Melo, G.,
Gutierrez, C., Gayo, J. E. L., Kirrane, S., Neumaier, S., Polleres, A.,
Navigli, R., Ngonga Ngomo, A. C., Rashid, S. M., Rula, A.,
Schmelzeisen, L., Sequeda, J., Staab, S., & Zimmermann, A. (2021).
Knowledge Graphs. *ACM Computing Surveys*, 54(4), Article 71.
https://doi.org/10.1145/3447772

[6] Paulheim, H. (2017). Knowledge graph refinement: A survey of
approaches and evaluation methods. *Semantic Web*, 8(3), 489-508.
https://doi.org/10.3233/SW-160218

[7] Ji, S., Pan, S., Cambria, E., Marttinen, P., & Yu, P. S. (2022). A
survey on knowledge graphs: Representation, acquisition, and
applications. *IEEE Transactions on Neural Networks and Learning
Systems*, 33(2), 494-514.
https://doi.org/10.1109/TNNLS.2021.3070843

[8] Bodenreider, O. (2004). The Unified Medical Language System (UMLS):
integrating biomedical terminology. *Nucleic Acids Research*, 32(Database
issue), D267-D270. https://doi.org/10.1093/nar/gkh061

[9] Mandel, J. C., Kreda, D. A., Mandl, K. D., Kohane, I. S., & Ramoni,
R. B. (2016). SMART on FHIR: a standards-based, interoperable apps
platform for electronic health records. *Journal of the American Medical
Informatics Association*, 23(5), 899-908.
https://doi.org/10.1093/jamia/ocv189

[10] Nicholson, D. N., & Greene, C. S. (2020). Constructing knowledge
graphs and their biomedical applications. *Computational and Structural
Biotechnology Journal*, 18, 1414-1428.
https://doi.org/10.1016/j.csbj.2020.05.017

[11] Ustun, T. B., Chatterji, S., Bickenbach, J., Kostanjsek, N., &
Schneider, M. (2003). The International Classification of Functioning,
Disability and Health: A new tool for understanding disability and
health. *Disability and Rehabilitation*, 25(11-12), 565-571.

[12] Stucki, G., Ewert, T., & Cieza, A. (2002). Value and application of
the ICF in rehabilitation medicine. *Disability and Rehabilitation*,
24(17), 932-938.

[13] Cieza, A., Geyh, S., Chatterji, S., Kostanjsek, N., Ustun, B., &
Stucki, G. (2005). ICF linking rules: An update based on lessons learned.
*Journal of Rehabilitation Medicine*, 37(4), 212-218.

[14] Holzinger, A. (2016). Interactive machine learning for health
informatics: When do we need the human-in-the-loop? *Brain Informatics*,
3(2), 119-131. https://doi.org/10.1007/s40708-016-0042-6

[15] Holzinger, A., Plass, M., Kickmeier-Rust, M., Holzinger, K.,
Crisan, G. C., Pintea, C. M., & Palade, V. (2019). Interactive machine
learning: experimental evidence for the human in the algorithmic loop.
*Applied Intelligence*, 49(7), 2401-2414.
https://doi.org/10.1007/s10489-018-1361-5

[16] Singhal, K., Azizi, S., Tu, T., Mahdavi, S. S., Wei, J., Chung, H.
W., Scales, N., Tanwani, A., Cole-Lewis, H., Pfohl, S., Payne, P.,
Seneviratne, M., Gamble, P., Kelly, C., Babiker, A., Scharli, N.,
Chowdhery, A., Mansfield, P., Demner-Fushman, D., et al. (2023). Large
language models encode clinical knowledge. *Nature*, 620, 172-180.
https://doi.org/10.1038/s41586-023-06291-2
