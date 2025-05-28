<script setup>
import { ref } from 'vue'

// For the goals accordion section
const actif = ref(null) // 'short' or 'long'
const toggle = (target) => {
  actif.value = actif.value === target ? null : target
}
</script>

<template>
  <div class="about-wrapper">
    <!-- Main Title -->
    <h1 class="titre-page">About Me</h1>

    <!-- Personal Introduction -->
    <section class="section-apropos">
      <h2 class="soustitre">👋 Who Am I?</h2>

      <p>
        My name is Faical, a Master's student (M1) at Efrei Paris majoring in <strong>Information Systems Strategy & Governance (ISSG)</strong>.
        I am passionate about digital transformation, IT governance, and information systems, and I am also highly curious about emerging technologies.
        I have strong leadership skills and I’m comfortable with <strong>project management</strong>, both in teams and independently.
      </p>
    </section>

    <!-- Objectives with collapsible buttons -->
    <section class="section-apropos encadre">
      <h2 class="soustitre">🎯 My Goal</h2>
      <div class="objectif-banner">
        <p>
          My ambition: <strong>to lead strategic IT projects</strong> and become a key player in digital transformation within organizations.  
          “A great project begins with a clear vision, a rigorous method, and a well-aligned team.”
        </p>
      </div>
      <p>
        I am currently looking for a <strong>4 to 6-month internship</strong> starting from <strong>November 2025</strong>.  
        Here are my short- and long-term goals:
      </p>

      <!-- Short-term goals -->
      <div class="bloc-objectif">
        <button class="btn-toggle" @click="toggle('short')">
          {{ actif === 'short' ? '▼ Short-term goals' : '▶ Short-term goals' }}
        </button>
        <div v-if="actif === 'short'" class="contenu-objectif">
          <ul>
            <li>✔️ Secure a 4 to 6-month internship in a dynamic environment</li>
            <li>✔️ Apply my skills to real-life projects</li>
            <li>✔️ Strengthen my teamwork, leadership, and efficiency</li>
          </ul>
        </div>
      </div>

      <!-- Long-term goals -->
      <div class="bloc-objectif">
        <button class="btn-toggle" @click="toggle('long')">
          {{ actif === 'long' ? '▼ Long-term goals' : '▶ Long-term goals' }}
        </button>
        <div v-if="actif === 'long'" class="contenu-objectif">
          <ul>
            <li>📌 Build a career as a <strong>Business Analyst (AMOA)</strong> or <strong>Functional Consultant</strong></li>
            <li>📌 Earn <strong>recognized certifications</strong> in the field (Scrum, PMP, ITIL, etc.)</li>
            <li>📌 Actively contribute to <strong>digital transformation projects</strong></li>
            <li>📌 Develop expertise in <strong>digital strategy and IT governance</strong></li>
            <li>📌 Specialize in <strong>IT project management</strong> (Agile, scoping, steering)</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- My strengths -->
    <section class="section-apropos">
      <h2 class="soustitre">💡 My Strengths</h2>
      <p>
        Curious, structured, rigorous, and solution-oriented, I quickly adapt to new environments.
        I value teamwork and am committed to aligning technical solutions with business needs.
      </p>
    </section>

    <!-- Why collaborate with me -->
    <section class="section-apropos encadre">
      <h2 class="soustitre">🚀 Why Work With Me?</h2>
      <ul>
        <li>🔍 Strong understanding of information systems and strategic challenges</li>
        <li>📊 Skilled in analysis (Power BI, Excel, audits)</li>
        <li>📚 Solid academic background + hands-on projects</li>
        <li>🤝 Reliable, motivated, and professional</li>
      </ul>
    </section>

    <!-- Call to action -->
    <section class="section-apropos appel">
      <h2 class="soustitre">📎 Want to know more?</h2>
      <p>Feel free to contact me or download my CV below:</p>
      <div class="cta-buttons">
        <a href="/cv.pdf" download class="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition">
          📄 Download my CV
        </a>

        <router-link to="/contact" class="btn dark">📧 Contact me</router-link>
      </div>
    </section>

  </div>
</template>


<style scoped>
.about-wrapper {
  padding: 2rem 1rem;
  font-family: sans-serif;
}

.titre-page {
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 3rem;
  color: #111827;
}

.section-apropos {
  max-width: 800px;
  margin: 0 auto 2.5rem auto;
  padding: 1.5rem;
  font-size: 1.05rem;
  line-height: 1.8;
  text-align: justify;
  background-color: #fff;
}

.soustitre {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1f2937;
}

.encadre {
  background-color: #f9fafb;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
}

ul {
  margin-top: 1rem;
  padding-left: 1.5rem;
}

li {
  margin-bottom: 0.5rem;
}

.appel {
  text-align: center;
}

.cta-buttons {
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.btn {
  text-decoration: none;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-weight: 600;
  transition: background-color 0.3s ease;
  font-size: 1rem;
}

.btn.blue {
  background-color: #2563eb;
}

.btn.blue:hover {
  background-color: #1d4ed8;
}

.btn.dark {
  background-color: #374151;
}

.btn.dark:hover {
  background-color: #1f2937;
}

.bloc-objectif {
  margin-top: 1.5rem;
}

.btn-toggle {
  background: none;
  border: none;
  color: #2563eb;
  font-weight: 600;
  cursor: pointer;
  font-size: 1.1rem;
  padding: 0.4rem 0;
  text-align: left;
}

.btn-toggle:hover {
  text-decoration: underline;
}

.contenu-objectif {
  margin-top: 0.8rem;
  padding-left: 1.2rem;
}

.contenu-objectif ul {
  list-style: none;
  padding: 0;
}

.contenu-objectif li {
  margin-bottom: 0.5rem;
}
.objectif-banner {
  background-color: #e0f2fe;
  color: #0c4a6e;
  padding: 1rem 1.2rem;
  border-left: 4px solid #2563eb;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  font-weight: 500;
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