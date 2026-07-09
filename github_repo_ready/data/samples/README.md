# Representative rehabilitation samples

This folder contains small representative samples for the rehabilitation
SEKG proof-of-concept. The samples are intentionally small: they are used
to demonstrate provenance, modality modeling, and semantic integration,
not to train or evaluate a clinical model.

## Sampling rule

The records are not assumed to describe the same person or care episode.
Each record is a separate representative example from a real data source.
The knowledge graph therefore links them through data-source provenance,
clinical context, and rehabilitation concepts, not through patient
identity.

The KEDEEA local cases are represented only in de-identified derived
form. Direct identifiers from the original local files are not copied
into the sample CSV or the knowledge graph.

## Materialized samples

- `mex_subject01_exercise01_thigh_accelerometer_sample.csv`: first five
  timestamped rows from MEx subject 01, exercise 01, `act` modality.
- `mex_subject01_exercise01_wrist_accelerometer_sample.csv`: first five
  timestamped rows from MEx subject 01, exercise 01, `acw` modality.
- `mex_subject01_exercise01_depth_camera_reduced_sample.csv`: first
  three timestamped rows from the MEx depth-camera file, reduced to the
  first 12 depth features for readability.
- `mex_subject01_exercise01_pressure_mat_reduced_sample.csv`: first
  three timestamped rows from the MEx pressure-mat file, reduced to the
  first 12 pressure features for readability.
- `physionet_gaitpdb_GaPt03_01_force_sample.csv`: first five rows from
  the PhysioNet Gait in Parkinson's Disease `GaPt03_01.txt` force-sensor
  recording.
- `kedeea_cases_deidentified.csv`: three de-identified local clinical
  assessment cases from KEDEEA, summarized by service area, assessment
  tools, functional domains, and intervention focus.

## Source data

- MEx: open UCI dataset with 7 physiotherapy exercises, 30 subjects,
  two accelerometers, a pressure mat, and a depth camera. Source:
  <https://archive.ics.uci.edu/dataset/500/mex>. DOI: `10.24432/C59K6T`.
- PhysioNet Gait in Parkinson's Disease: open PhysioNet database with
  force-sensor gait recordings from Parkinson's disease patients and
  healthy controls. Source:
  <https://physionet.org/content/gaitpdb/1.0.0/>. DOI:
  `10.13026/C24H3N`.
- KEDEEA local clinical cases: real occupational-therapy and
  physiotherapy assessment files stored locally in `data from ciderr`.
  Only de-identified derived fields are used in the proof-of-concept.

## Ontology use

The main ontology files are in `kg/`:

- `kg/sekg_ontology.ttl`: reusable ontology classes and properties.
- `kg/sekg_instances.ttl`: current representative records and observed
  variables instantiated from the ontology.

The ontology is based on the kinds of characteristics present in the
current samples, but it is designed to accept cases with different
features. New fields should be added as `sekg:ObservedVariable`
instances and linked to the relevant case.
