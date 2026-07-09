const demoData = {
  metrics: {
    triples: 876,
    records: 5,
    competencyQuestions: "10/10",
    variableCoverage: "20/20",
  },
  records: [
    {
      id: "KEDEEA_Case_001",
      type: "Clinical case",
      title: "De-identified clinical case 001",
      source: "KEDEEA local clinical assessments",
      service: "Occupational Therapy",
      condition: "Developmental immaturity",
      variables: ["age_group", "assessment_period", "condition_summary", "functional_domains"],
      domains: ["Adaptation and separation", "Attention", "Play and interaction", "Cognition", "Gross motor", "Fine motor", "ADL"],
      tools: ["Clinical observation"],
    },
    {
      id: "KEDEEA_Case_002",
      type: "Clinical case",
      title: "De-identified clinical case 002",
      source: "KEDEEA local clinical assessments",
      service: "Occupational Therapy",
      condition: "Cerebral palsy",
      variables: ["age_group", "assessment_period", "assessment_instruments", "functional_domains"],
      domains: ["Cognition", "Visual-spatial perception", "Gross motor", "Fine motor", "Balance", "ADL", "Community participation"],
      tools: ["MoCA", "BOT-2", "Modified Barthel Index", "COPM"],
    },
    {
      id: "KEDEEA_Case_003",
      type: "Clinical case",
      title: "De-identified clinical case 003",
      source: "KEDEEA local clinical assessments",
      service: "Physiotherapy",
      condition: "Cerebral palsy",
      variables: ["age_group", "assessment_period", "intervention_focus", "functional_domains"],
      domains: ["Pain", "Posture", "Balance", "Falls risk", "Gait", "ROM", "Muscle strength", "Assistive device use"],
      tools: ["VAS", "ROM assessment", "Manual muscle testing", "Functional gait assessment", "Assistive device review"],
    },
    {
      id: "MEx_Subject01_Exercise01",
      type: "Sensor recording",
      title: "MEx subject 01 exercise 01",
      source: "MEx Multi-modal Exercise dataset",
      service: "Physiotherapy exercise recording",
      condition: "Exercise quality / movement analysis",
      variables: ["timestamp", "x", "y", "z", "depth_01..depth_12", "pressure_01..pressure_12"],
      domains: ["Movement measurement", "Exercise recording"],
      tools: ["Thigh accelerometer", "Wrist accelerometer", "Depth camera", "Pressure mat"],
    },
    {
      id: "PhysioNet_GaPt03_01",
      type: "Sensor recording",
      title: "PhysioNet GaPt03_01 force recording",
      source: "PhysioNet Gait in Parkinson's Disease",
      service: "Gait recording",
      condition: "Parkinson's disease",
      variables: ["time_sec", "left_sensor_1..8", "right_sensor_1..8", "left_total_force", "right_total_force"],
      domains: ["Gait", "Force measurement"],
      tools: ["Foot force sensor array"],
    },
  ],
  evaluation: {
    metrics: [
      ["RDF triples loaded", "876"],
      ["Competency questions tested", "10"],
      ["Answerable competency questions", "10/10"],
      ["CQ answerability rate", "100%"],
      ["Selected variables mapped", "20/20"],
      ["Source-variable coverage", "100%"],
      ["Expert validation", "Pending"],
    ],
    queries: [
      ["CQ1 cases by functional domain", 22, true],
      ["CQ2 assessment instruments by case", 10, true],
      ["CQ3 records by source type", 5, true],
      ["CQ4 professional roles by record", 5, true],
      ["CQ5 observed variables by record", 29, true],
      ["CQ6 sensor measurements by record", 5, true],
      ["CQ7 cerebral palsy cases domains", 15, true],
      ["CQ8 sensor variables by source", 11, true],
      ["CQ9 enterprise roles by department", 6, true],
      ["CQ10 enterprise process value view", 21, true],
    ],
  },
  enterprise: {
    value: {
      title: "Coordinated rehabilitation value proposition",
      text: "The SEKG supports coordinated interdisciplinary rehabilitation by making cases, assessments, functional domains, sensor evidence, roles, provenance, and governance decisions semantically traceable.",
    },
    departments: [
      {
        name: "Physiotherapy department",
        responsibility: "Movement assessment, physiotherapy intervention planning, and interpretation of physiotherapy-relevant cases and recordings.",
        roles: ["Physiotherapist"],
      },
      {
        name: "Occupational therapy department",
        responsibility: "Assessment of activities of daily living, cognition, play, interaction, participation, and occupational performance.",
        roles: ["Occupational therapist"],
      },
      {
        name: "Gait and movement analysis laboratory",
        responsibility: "Sensor-based gait and movement data capture, preprocessing, and measurement interpretation.",
        roles: ["Physiotherapist"],
      },
      {
        name: "Clinical data governance office",
        responsibility: "Data provenance, privacy treatment, ontology governance, and human validation of graph changes.",
        roles: ["Clinical data steward", "Rehabilitation domain expert", "LLM modeling assistant"],
      },
    ],
    roles: [
      {
        name: "Physiotherapist",
        type: "Professional role",
        department: "Physiotherapy department; gait and movement analysis laboratory",
        responsibility: "Interprets physiotherapy cases, movement measurements, gait information, and exercise-recording variables.",
      },
      {
        name: "Occupational therapist",
        type: "Professional role",
        department: "Occupational therapy department",
        responsibility: "Interprets occupational therapy assessments, activities of daily living, cognition, participation, and intervention focus.",
      },
      {
        name: "Clinical data steward",
        type: "Professional role",
        department: "Clinical data governance office",
        responsibility: "Checks source provenance, privacy treatment, sample documentation, and data-to-ontology traceability.",
      },
      {
        name: "Rehabilitation domain expert",
        type: "Professional role",
        department: "Clinical data governance office",
        responsibility: "Validates clinical meaning, organizational fit, ontology mappings, and final acceptance of candidate graph changes.",
      },
      {
        name: "LLM modeling assistant",
        type: "Computational assistant role",
        department: "Clinical data governance office",
        responsibility: "Suggests candidate ontology concepts, mappings, documentation, and SPARQL queries for human review.",
      },
    ],
    workflow: [
      ["1", "Sample evidence", "KEDEEA, MEx, and PhysioNet records define the current graph evidence."],
      ["2", "LLM suggestion", "The assistant proposes candidate concepts, mappings, and query templates."],
      ["3", "Human validation", "Domain and data-governance roles approve clinical meaning, provenance, and ontology fit."],
      ["4", "Graph update", "Accepted changes become ontology, instance, and evaluation artifacts."],
    ],
    processStages: [
      ["1", "Referral and intake", "Register case context, data source, and privacy treatment."],
      ["2", "Initial assessment", "Capture assessment tools, functional domains, observed variables, and sensor evidence."],
      ["3", "Goal setting", "Translate findings into rehabilitation goals and priority domains."],
      ["4", "Intervention planning", "Connect goals, conditions, assessments, and responsible professionals."],
      ["5", "Therapy delivery", "Deliver occupational therapy, physiotherapy, and movement-analysis activities."],
      ["6", "Re-assessment", "Re-evaluate functional domains and compare evidence over time."],
      ["7", "Discharge or research reuse", "Summarize outcomes and preserve approved de-identified evidence."],
    ],
    governanceStages: [
      ["1", "Candidate suggestion", "LLM output is treated only as a candidate artifact."],
      ["2", "Provenance review", "Data steward checks source traceability and privacy treatment."],
      ["3", "Clinical validation", "Domain experts validate clinical meaning and role fit."],
      ["4", "Decision recording", "Accepted, revised, rejected, or postponed changes are recorded."],
      ["5", "Graph release", "Competency questions and coverage checks are re-run after changes."],
    ],
    standards: [
      ["FHIR", "Clinical data exchange reference; the SEKG can link to FHIR resources rather than replace them."],
      ["ICF", "Functioning and participation reference for rehabilitation domains."],
      ["UMLS", "Biomedical terminology integration reference."],
      ["SNOMED CT", "Clinical terminology alignment reference where licensing and implementation context permit it."],
    ],
  },
  files: [
    {
      title: "Ontology layer",
      path: "../kg/sekg_ontology.ttl",
      text: "Reusable classes and properties for enterprise, data sources, cases, recordings, variables, provenance, and modeling workflow.",
    },
    {
      title: "Instance layer",
      path: "../kg/sekg_instances.ttl",
      text: "Current representative records from KEDEEA, MEx, and PhysioNet instantiated from the ontology.",
    },
    {
      title: "SPARQL results",
      path: "../evaluation/sparql_results.md",
      text: "Generated results from running the competency questions over the RDF graph.",
    },
    {
      title: "Coverage matrix",
      path: "../evaluation/coverage_matrix.csv",
      text: "Mapping between selected source variables and ontology elements.",
    },
    {
      title: "Enterprise model views",
      path: "../docs/enterprise_model_views.md",
      text: "Process, governance, role-responsibility, standards-positioning, and value views for the enterprise layer.",
    },
    {
      title: "LLM modeling protocol",
      path: "../docs/llm_modeling_protocol.md",
      text: "Structured prompt workflow, expected outputs, and human validation decisions for LLM-assisted modeling.",
    },
    {
      title: "Standards alignment",
      path: "../docs/standards_alignment.md",
      text: "Positioning against FHIR, ICF, UMLS, and SNOMED CT, including current ICF-oriented conceptual alignment.",
    },
  ],
};

const graphModel = {
  nodes: [
    { id: "KEDEEA", label: "KEDEEA source", type: "source", x: 130, y: 270 },
    { id: "MEx", label: "MEx dataset", type: "source", x: 130, y: 120 },
    { id: "PhysioNet", label: "PhysioNet GaitPDB", type: "source", x: 130, y: 420 },
    { id: "Enterprise", label: "Demo rehab center", type: "enterprise", x: 840, y: 70 },
    { id: "Departments", label: "Departments", type: "department", x: 840, y: 180 },
    { id: "C1", label: "Case 001", type: "case", x: 360, y: 190 },
    { id: "C2", label: "Case 002", type: "case", x: 360, y: 270 },
    { id: "C3", label: "Case 003", type: "case", x: 360, y: 350 },
    { id: "R1", label: "MEx recording", type: "recording", x: 360, y: 100 },
    { id: "R2", label: "Gait recording", type: "recording", x: 360, y: 440 },
    { id: "Domains", label: "Functional domains", type: "concept", x: 640, y: 240 },
    { id: "Tools", label: "Assessment tools", type: "concept", x: 640, y: 340 },
    { id: "Variables", label: "Observed variables", type: "concept", x: 640, y: 140 },
    { id: "Roles", label: "Professional roles", type: "concept", x: 840, y: 290 },
  ],
  edges: [
    ["KEDEEA", "C1"], ["KEDEEA", "C2"], ["KEDEEA", "C3"],
    ["MEx", "R1"], ["PhysioNet", "R2"],
    ["Enterprise", "Departments"], ["Enterprise", "Roles"], ["Departments", "Roles"],
    ["C1", "Domains"], ["C2", "Domains"], ["C3", "Domains"],
    ["C1", "Tools"], ["C2", "Tools"], ["C3", "Tools"],
    ["R1", "Variables"], ["R2", "Variables"], ["C1", "Variables"], ["C2", "Variables"], ["C3", "Variables"],
    ["C1", "Roles"], ["C2", "Roles"], ["C3", "Roles"], ["R1", "Roles"], ["R2", "Roles"],
  ],
};

const typeClass = {
  "Clinical case": "case",
  "Sensor recording": "recording",
};

const graphColors = {
  case: "#2f7d68",
  recording: "#3f6f9f",
  concept: "#a36322",
  source: "#9c4b4b",
  enterprise: "#4d5962",
  department: "#7b5c96",
};

function createChip(text) {
  const chip = document.createElement("span");
  chip.className = "chip";
  chip.textContent = text;
  return chip;
}

function renderRecords(filter = "all") {
  const grid = document.getElementById("recordGrid");
  grid.innerHTML = "";
  const records = demoData.records.filter((record) => filter === "all" || record.type === filter);

  records.forEach((record) => {
    const card = document.createElement("article");
    card.className = "record-card";
    card.innerHTML = `
      <header>
        <div>
          <div class="record-id">${record.id}</div>
          <h3>${record.title}</h3>
        </div>
        <span class="badge ${typeClass[record.type]}">${record.type}</span>
      </header>
      <dl class="meta-list">
        <div><dt>Source</dt><dd>${record.source}</dd></div>
        <div><dt>Context</dt><dd>${record.service}</dd></div>
        <div><dt>Clinical / analytical focus</dt><dd>${record.condition}</dd></div>
      </dl>
    `;

    const domainBlock = document.createElement("div");
    domainBlock.className = "meta-list";
    domainBlock.innerHTML = "<div><dt>Domains</dt><dd class=\"chip-row\"></dd></div>";
    record.domains.slice(0, 8).forEach((domain) => domainBlock.querySelector(".chip-row").appendChild(createChip(domain)));
    card.appendChild(domainBlock);

    const variableBlock = document.createElement("div");
    variableBlock.className = "meta-list";
    variableBlock.innerHTML = "<div><dt>Observed variables / tools</dt><dd class=\"chip-row\"></dd></div>";
    [...record.variables.slice(0, 4), ...record.tools.slice(0, 2)].forEach((item) => {
      variableBlock.querySelector(".chip-row").appendChild(createChip(item));
    });
    card.appendChild(variableBlock);

    grid.appendChild(card);
  });
}

function renderEvaluation() {
  const metricRows = document.getElementById("metricRows");
  metricRows.innerHTML = demoData.evaluation.metrics
    .map(([metric, result]) => `<tr><td>${metric}</td><td>${result}</td></tr>`)
    .join("");

  const queryRows = document.getElementById("queryRows");
  queryRows.innerHTML = demoData.evaluation.queries
    .map(([query, rows, ok]) => `<tr><td>${query}</td><td>${rows}</td><td class="status-yes">${ok ? "answerable" : "check"}</td></tr>`)
    .join("");
}

function renderFiles() {
  const list = document.getElementById("fileList");
  list.innerHTML = "";
  demoData.files.forEach((file) => {
    const card = document.createElement("article");
    card.className = "file-card";
    card.innerHTML = `
      <h3>${file.title}</h3>
      <p>${file.text}</p>
      <a href="${file.path}">${file.path}</a>
    `;
    list.appendChild(card);
  });
}

function renderEnterprise() {
  const departments = document.getElementById("departmentGrid");
  departments.innerHTML = "";
  demoData.enterprise.departments.forEach((department) => {
    const card = document.createElement("article");
    card.className = "department-card";
    card.innerHTML = `
      <h3>${department.name}</h3>
      <p>${department.responsibility}</p>
      <div class="role-list"></div>
    `;
    const roleList = card.querySelector(".role-list");
    department.roles.forEach((role) => roleList.appendChild(createChip(role)));
    departments.appendChild(card);
  });

  const roleRows = document.getElementById("enterpriseRoleRows");
  roleRows.innerHTML = demoData.enterprise.roles
    .map((role) => `<tr><td><strong>${role.name}</strong><br><span>${role.type}</span></td><td>${role.department}</td><td>${role.responsibility}</td></tr>`)
    .join("");

  const workflowSteps = document.getElementById("workflowSteps");
  workflowSteps.innerHTML = demoData.enterprise.workflow
    .map(([step, title, text]) => `<article class="workflow-step"><span>${step}</span><h3>${title}</h3><p>${text}</p></article>`)
    .join("");

  const processGrid = document.getElementById("processGrid");
  processGrid.innerHTML = demoData.enterprise.processStages
    .map(([step, title, text]) => `<article class="process-card"><span>${step}</span><h3>${title}</h3><p>${text}</p></article>`)
    .join("");

  const governanceGrid = document.getElementById("governanceGrid");
  governanceGrid.innerHTML = demoData.enterprise.governanceStages
    .map(([step, title, text]) => `<article class="process-card"><span>${step}</span><h3>${title}</h3><p>${text}</p></article>`)
    .join("");

  const standardGrid = document.getElementById("standardGrid");
  standardGrid.innerHTML = demoData.enterprise.standards
    .map(([title, text]) => `<article class="standard-card"><h3>${title}</h3><p>${text}</p></article>`)
    .join("");

  const valuePanel = document.getElementById("valuePanel");
  valuePanel.innerHTML = `<h3>${demoData.enterprise.value.title}</h3><p>${demoData.enterprise.value.text}</p>`;
}

function renderGraph() {
  const svg = document.getElementById("kgGraph");
  const width = 980;
  const height = 540;
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.innerHTML = "";

  graphModel.edges.forEach(([sourceId, targetId]) => {
    const source = graphModel.nodes.find((node) => node.id === sourceId);
    const target = graphModel.nodes.find((node) => node.id === targetId);
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", source.x);
    line.setAttribute("y1", source.y);
    line.setAttribute("x2", target.x);
    line.setAttribute("y2", target.y);
    line.setAttribute("class", "graph-edge");
    svg.appendChild(line);
  });

  graphModel.nodes.forEach((node) => {
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.setAttribute("class", "graph-node");

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", node.x);
    circle.setAttribute("cy", node.y);
    circle.setAttribute("r", node.type === "concept" ? 36 : 32);
    circle.setAttribute("fill", graphColors[node.type]);
    group.appendChild(circle);

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", node.x);
    text.setAttribute("y", node.y + 52);
    text.setAttribute("text-anchor", "middle");
    text.textContent = node.label;
    group.appendChild(text);

    svg.appendChild(group);
  });
}

function activateTab(tabName) {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tabName);
  });
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    panel.classList.toggle("active", panel.id === tabName);
  });
}

function init() {
  document.getElementById("tripleCount").textContent = demoData.metrics.triples;
  document.getElementById("recordCount").textContent = demoData.metrics.records;
  document.getElementById("cqRate").textContent = demoData.metrics.competencyQuestions;
  document.getElementById("coverageRate").textContent = demoData.metrics.variableCoverage;

  renderRecords();
  renderEvaluation();
  renderFiles();
  renderEnterprise();
  renderGraph();

  document.getElementById("recordFilter").addEventListener("change", (event) => {
    renderRecords(event.target.value);
  });

  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => activateTab(button.dataset.tab));
  });
}

init();
