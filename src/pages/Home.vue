<script setup>
import photoProfil from '../assets/faical2.jpg'
import { ref } from 'vue'

const projetsAccueil = [
  {
    titre: '🛫 Desfly – Vue.js Web Application',
    description:
      "A web application for a fictional airline company. I developed the entire frontend using Vue.js in a team project at Efrei Paris.",
  },
  {
    titre: '🌐 Personal Portfolio – Vue.js',
    description:
      "Personal website coded with Vue.js to showcase my profile, skills, projects, and goals. This portfolio is continuously evolving.",
  },
  {
    titre: '📊 Power BI Mockup – IT Project Portfolio Dashboard',
    description:
      "Creation of a dashboard to track IT projects of a fictional company (workload, progress, priorities), as part of my ISSG major.",
  }
]

const index = ref(0)

function suivant() {
  index.value = (index.value + 1) % projetsAccueil.length
}

function precedent() {
  index.value = (index.value - 1 + projetsAccueil.length) % projetsAccueil.length
}
</script>

<template>
  <div class="home-wrapper">

    <!-- Hero Section with background -->
    <section class="hero">
      <div class="overlay">
        <transition name="fade-zoom" appear>
          <img
            :src="photoProfil"
            alt="Faical's photo"
            class="photo"
          />
        </transition>

        <h1 class="titre">Hi, I’m Faical</h1>
        <h2 class="soustitre">Master's student – Information Systems Strategy & Governance (Efrei Paris)</h2>
        <p class="intro">
          🎯 I am looking for a <strong> 5 month internship</strong> starting in <strong>November 2025</strong> in IT project management, information systems governance, or digital transformation.
        </p>
        <p class="intro">
          💬 Curious, structured, and solution-oriented, I use technology to serve business needs.
        </p>

        <div class="buttons">
          <router-link to="/projects" class="btn green">📁 View my projects</router-link>
          <a href="/cv.pdf" download class="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition">
            📄 Download my CV
          </a>
          <router-link to="/contact" class="btn dark">📧 Contact me</router-link>
        </div>
      </div>
    </section>

    <!-- About -->
    <section class="bloc-cadre">
      <h3 class="bloc-titre">About Me</h3>
      <p>
        🎓 Master’s student at Efrei Paris, passionate about information systems, IT governance, and digital strategies.
      </p>
      <router-link to="/about" class="bloc-lien">➡️ Learn more</router-link>
    </section>

    <!-- Projects -->
    <section class="bloc-cadre">
      <h3 class="bloc-titre">Recent Projects</h3>

      <div class="carrousel-projets">
        <button @click="precedent" class="fleche-projet">⬅️</button>

        <div class="carte-projet">
          <h4>{{ projetsAccueil[index].titre }}</h4>
          <p>{{ projetsAccueil[index].description }}</p>
        </div>

        <button @click="suivant" class="fleche-projet">➡️</button>
      </div>

      <router-link to="/projects" class="bloc-lien">➡️ View all projects</router-link>
    </section>

    <!-- Skills -->
    <section class="bloc-cadre">
      <h3 class="bloc-titre">Key Skills</h3>
      <p>
         ITIL • Functional Analysis • Power BI • Cybersecurity • Project Management • GDPR • Scrum
      </p>
      <router-link to="/skills" class="bloc-lien">➡️ See all skills</router-link>
    </section>

    <!-- Internship availability -->
    <section class="bloc-cadre disponibilité">
      <h3 class="bloc-titre">📅 Available for internship starting November 2025</h3>
      <p>📍 Based in Paris – Remote work possible</p>
      <router-link to="/contact" class="btn-contact">📧 Contact me</router-link>
    </section>


  </div>
</template>


<style scoped>
/* Animation */
.fade-zoom-enter-active {
  transition: all 0.8s ease;
}
.fade-zoom-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.fade-zoom-enter-to {
  opacity: 1;
  transform: scale(1);
}

/* Structure */
.home-wrapper {
  font-family: sans-serif;
  color: #333;
}

.hero {
  height: 100vh;
  background-image: url('../assets/issg2.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.55);
  padding: 3rem;
  border-radius: 12px;
  backdrop-filter: blur(3px);
  max-width: 900px;
  width: 90%;
}

.photo {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid white;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
}

.photo:hover {
  transform: scale(1.05);
}

.titre {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.soustitre {
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: #e5e5e5;
}

.intro {
  max-width: 600px;
  margin: auto;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
}

.btn {
  text-decoration: none;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn.green { background-color: #16a34a; }
.btn.green:hover { background-color: #15803d; }

.btn.blue { background-color: #2563eb; }
.btn.blue:hover { background-color: #1d4ed8; }

.btn.dark { background-color: #374151; }
.btn.dark:hover { background-color: #1f2937; }

/* Autres blocs */
.bloc {
  padding: 4rem 1rem;
  text-align: center;
}

.bloc-titre {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.bloc-lien {
  display: inline-block;
  margin-top: 1rem;
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
}

.bloc-lien:hover {
  text-decoration: underline;
}

.fond-clair {
  background-color: #f9fafb;
}

/* Footer */
.footer {
  text-align: center;
  font-size: 0.9rem;
  color: #6b7280;
  padding: 2rem 1rem;
  background-color: #f3f4f6;
}
.footer a {
  color: #2563eb;
  text-decoration: none;
  margin: 0 0.4rem;
}
.footer a:hover {
  text-decoration: underline;
}
@media screen and (max-width: 768px) {
  .overlay {
    padding: 1.5rem;
  }

  .photo {
    width: 120px;
    height: 120px;
    margin-bottom: 1rem;
  }

  .titre {
    font-size: 1.8rem;
  }

  .soustitre {
    font-size: 1.1rem;
  }

  .intro {
    font-size: 0.95rem;
    padding: 0 0.5rem;
  }

  .buttons {
    flex-direction: column;
    gap: 0.8rem;
  }

  .btn {
    width: 100%;
    padding: 0.8rem;
    font-size: 1rem;
  }

  .bloc {
    padding: 2rem 1rem;
  }

  .bloc-titre {
    font-size: 1.4rem;
  }

  .footer {
    font-size: 0.8rem;
    padding: 1.5rem 1rem;
  }
}
.bloc-cadre {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 2.5rem 1.5rem;
  background-color: #ffffff;
  border-radius: 18px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.bloc-titre {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.bloc-lien {
  display: inline-block;
  margin-top: 1rem;
  color: #2563eb;
  font-weight: 500;
  text-decoration: none;
}

.bloc-lien:hover {
  text-decoration: underline;
}

/* Responsive */
@media screen and (max-width: 768px) {
  .bloc-cadre {
    padding: 2rem 1rem;
    margin: 1.5rem 1rem;
  }

  .bloc-titre {
    font-size: 1.5rem;
  }
}
.bloc-cadre {
  max-width: 850px;
  margin: 0 auto 2.5rem auto;
  padding: 1.8rem 2rem;
  background-color: #ffffff;
  border-radius: 14px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
  transition: transform 0.2s ease;
}

.bloc-cadre:hover {
  transform: translateY(-4px);
}

.bloc-titre {
  font-size: 1.4rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
  padding-left: 0.2rem;
  border-left: 4px solid #2563eb;
}

.carrousel-projets {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: nowrap;
}

.fleche-projet {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #2563eb;
  transition: transform 0.2s ease;
}

.fleche-projet:hover {
  transform: scale(1.1);
}

.carte-projet {
  background-color: #ffffff;
  padding: 1.2rem;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.05);
  max-width: 600px;
  flex: 1 1 400px;
  text-align: left;
}

.carte-projet h4 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
}

.carte-projet p {
  color: #374151;
  font-size: 1rem;
  line-height: 1.6;
}

.bloc-lien {
  display: inline-block;
  margin-top: 1.5rem;
  color: #2563eb;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
}

.bloc-lien:hover {
  text-decoration: underline;
}
.disponibilité {
  text-align: center;
}

.btn-contact {
  margin-top: 1rem;
  display: inline-block;
  padding: 0.5rem 1.2rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 9999px;
  background-color: #2563eb;
  color: white;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.btn-contact:hover {
  background-color: #1e40af;
}


</style>


  