<script setup>
import { ref } from 'vue'

const projets = [
  {
    titre: '🛫 Desfly – Vue.js Web Application',
    description:
      "Group project at Efrei Paris. A web application for a fictional airline. I was responsible for the frontend using Vue.js.",
    image: new URL('../assets/desfly.jpg', import.meta.url).href,
    details: [
      '✅ Vue.js (components, props, router)',
      '✅ Responsive interface (mobile + desktop)',
      '✅ Teamwork using Git & GitHub'
    ]
  },
  {
    titre: '🌐 Personal Portfolio – Vue.js',
    description:
      "This portfolio was entirely designed and developed by me using Vue.js. It showcases my profile, projects, and skills, helping me stand out to recruiters.",
    image: new URL('../assets/portfolio.jpg', import.meta.url).href,
    details: [
      '✅ Modern UX/UI design',
      '✅ Frontend development with Vue.js',
      '✅ Responsive design (mobile & desktop)',
      '✅ Deployment planned on GitHub Pages / Netlify'
    ]
  },
  {
    titre: '📊 Power BI Dashboard – IT Project Tracking',
    description:
      "Planned project: creation of a dashboard to monitor project progress (status, risks, workload) using Power BI.",
    image: new URL('../assets/powerbi.jpg', import.meta.url).href,
    details: [
      '🔜 Key IT indicators (KPIs)',
      '🔜 Excel / SQL data connection',
      '🔜 Agile project simulations'
    ]
  },
  {
    titre: '🔐 GDPR & Cybersecurity Audit',
    description:
      "Planned audit of a fictional website to assess GDPR compliance and recommend security improvements.",
    image: new URL('../assets/rgpd.jpg', import.meta.url).href,
    details: [
      '🔜 Data processing mapping',
      '🔜 Risk identification',
      '🔜 Compliance action plan'
    ]
  },
  {
    titre: '📜 Certifications in Progress',
    description:
      "I am currently preparing several certifications to strengthen my profile in IT governance and project management.",
    image: new URL('../assets/certifications.jpg', import.meta.url).href,
    details: [
      '🎓 Scrum Fundamentals Certified – in progress',
      '🎓 CNIL GDPR Certification – in progress',
      '🎓 PSM I (Scrum.org) – planned'
    ]
  }
]

const indexActuel = ref(0)
const precedent = () => {
  indexActuel.value = (indexActuel.value - 1 + projets.length) % projets.length
}
const suivant = () => {
  indexActuel.value = (indexActuel.value + 1) % projets.length
}
</script>

<template>
  <div class="projects-wrapper">
    <h1 class="titre-page">My Projects</h1>

    <div class="carrousel">
      <button class="fleche" @click="precedent">⬅️</button>

      <div class="carte-projet">
        <img :src="projets[indexActuel].image" class="image-projet" alt="project preview" />

        <div class="contenu">
          <h2 class="titre-projet">{{ projets[indexActuel].titre }}</h2>
          <p class="description">{{ projets[indexActuel].description }}</p>
          <ul>
            <li v-for="(detail, i) in projets[indexActuel].details" :key="i">{{ detail }}</li>
          </ul>
        </div>
      </div>

      <button class="fleche" @click="suivant">➡️</button>
    </div>


  </div>
</template>

<style scoped>
.projects-wrapper {
  padding: 2rem 1rem;
  font-family: sans-serif;
  background-color: #f3f4f6;
}

.titre-page {
  text-align: center;
  font-size: 2.4rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #1f2937;
}

.carrousel {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  flex-wrap: nowrap;
}

.fleche {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #2563eb;
  transition: transform 0.2s ease;
}

.fleche:hover {
  transform: scale(1.1);
}

.carte-projet {
  background-color: #ffffff;
  padding: 2rem;
  max-width: 600px;
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  flex: 1 1 500px;
  text-align: left;
}

.titre-projet {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #111827;
}

.description {
  margin-bottom: 1rem;
  color: #374151;
  line-height: 1.6;
}

ul {
  padding-left: 1.5rem;
}

li {
  margin-bottom: 0.5rem;
  color: #374151;
}
.carte-projet {
  background-color: #ffffff;
  padding: 1rem;
  max-width: 750px;
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  flex: 1 1 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-projet {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
}

.contenu {
  text-align: left;
  padding: 0 1rem;
}

.titre-projet {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: #111827;
}

.description {
  margin-bottom: 0.8rem;
  color: #374151;
  line-height: 1.6;
}

ul {
  padding-left: 1.2rem;
}

li {
  margin-bottom: 0.5rem;
  color: #374151;
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
