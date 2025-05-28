<template>
  <div class="skills-wrapper">
    <h1 class="titre-page">Key Skills</h1>

    <!-- Category 1 -->
    <section class="bloc-competence">
      <div class="icone-titre">🧠 Project Management & Governance</div>
      <ul>
        <li>ITIL (foundation level)</li>
        <li>Agile methodologies (Scrum, Kanban)</li>
        <li>Requirements documentation (MOA / AMOA)</li>
        <li>Functional analysis</li>
        <li>Modeling with UML</li>
        <li>Tools: Jira, Trello, Notion</li>
      </ul>
    </section>

    <!-- Category 2 -->
    <section class="bloc-competence">
      <div class="icone-titre">📊 Data Analysis & Compliance</div>
      <ul>
        <li>Power BI (indicators, dashboards)</li>
        <li>Advanced Excel (pivot tables, formulas, automation)</li>
        <li>GDPR (principles and application)</li>
        <li>Security auditing (ISO 27001)</li>
      </ul>
    </section>

    <!-- Category 3 -->
    <section class="bloc-competence">
      <div class="icone-titre">💻 Development & Programming Languages</div>
      <ul>
        <li>Vue.js (Composition API, props, components)</li>
        <li>JavaScript, HTML, CSS</li>
        <li>Python (scripting, automation)</li>
        <li>C (systems programming basics)</li>
        <li>Java (OOP, academic projects)</li>
      </ul>
    </section>

    <!-- Category 4 -->
    <section class="bloc-competence">
      <div class="icone-titre">🛠️ Technical Environment & Tools</div>
      <ul>
        <li>Git & GitHub (version control)</li>
        <li>Visual Studio Code</li>
        <li>UML (diagrams, use cases)</li>
        <li>Linux (basic commands)</li>
      </ul>
    </section>

    <!-- Category 5 -->
    <section class="bloc-competence">
      <div class="icone-titre">☁️ Databases & Cloud Computing</div>
      <ul>
        <li>MySQL (modeling, SQL queries, joins)</li>
        <li>Basic knowledge of PostgreSQL</li>
        <li>Understanding of relational databases</li>
        <li>Introduction to Cloud Computing (IaaS, PaaS, SaaS)</li>
        <li>General knowledge of AWS and Azure</li>
      </ul>
    </section>

  </div>
</template>

  
  <style scoped>
  .skills-wrapper {
    padding: 2rem 1rem;
    font-family: 'Segoe UI', sans-serif;
    background-color: #f3f4f6;
  }
  
  .titre-page {
    text-align: center;
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 2.5rem;
    color: #1f2937;
  }
  
  .bloc-competence {
    max-width: 850px;
    margin: 0 auto 2rem auto;
    padding: 1.8rem 2rem;
    background-color: #ffffff;
    border-radius: 14px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
    transition: transform 0.2s ease;
  }
  
  .bloc-competence:hover {
    transform: translateY(-4px);
  }
  
  .icone-titre {
    font-size: 1.4rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 1rem;
    padding-left: 0.2rem;
    border-left: 4px solid #2563eb;
  }
  
  ul {
    padding-left: 1.2rem;
    list-style: none;
  }
  
  li {
    position: relative;
    padding-left: 1.2rem;
    margin-bottom: 0.6rem;
    color: #374151;
    font-size: 1.05rem;
  }
  
  li::before {
    content: '✔';
    color: #10b981;
    position: absolute;
    left: 0;
  }
  .footer a {
  color: #2563eb;
  text-decoration: none;
  margin: 0 0.4rem;
}
.footer a:hover {
  text-decoration: underline;
}
  </style>
  