<template>
  <div id="app">
    <header class="navbar">
      <div class="nav-container">
        <!-- Logo ou nom -->
        <router-link to="/" class="nav-logo">Faical</router-link>

        <!-- Liens -->
        <nav class="nav-links">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/skills">Skills</router-link>
          <router-link to="/projects">Projects</router-link>
          <router-link to="/contact">Contact</router-link>
        </nav>
      </div>
    </header>

    <main>
      <router-view />
    </main>

    <!-- Footer commun à toutes les pages -->
    <footer class="footer">
      © 2025 Faical – Portfolio |
      <a href="https://www.linkedin.com/in/faïcal-dielo-7b3154255/" target="_blank">LinkedIn</a> |
      <a href="https://github.com/tonprofil" target="_blank">GitHub</a> |
      <a href="mailto:dielofaical1@gmail.com">Email</a>
    </footer>
  </div>
</template>

<style scoped>
.navbar {
  background-color: white;
  padding: 1rem 2rem;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-weight: 600;
  font-size: 1.2rem;
  color: #111827;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: #4b5563;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #111827;
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
</style>
