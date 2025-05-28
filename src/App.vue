<template>
  <div id="app">
    <header class="navbar">
      <div class="nav-container">
        <!-- Logo -->
        <router-link to="/" class="nav-logo">Faical</router-link>

        <!-- Burger menu icon -->
        <button class="burger" @click="toggleMenu">
          <span :class="{ open: isOpen }"></span>
          <span :class="{ open: isOpen }"></span>
          <span :class="{ open: isOpen }"></span>
        </button>

        <!-- Navigation Links -->
        <nav :class="['nav-links', { 'mobile-visible': isOpen }]">
          <router-link to="/" @click.native="closeMenu">Home</router-link>
          <router-link to="/about" @click.native="closeMenu">About</router-link>
          <router-link to="/skills" @click.native="closeMenu">Skills</router-link>
          <router-link to="/projects" @click.native="closeMenu">Projects</router-link>
          <router-link to="/contact" @click.native="closeMenu">Contact</router-link>
        </nav>

        <!-- Backdrop -->
        <div v-if="isOpen" class="backdrop" @click="closeMenu"></div>
      </div>
    </header>

    <main>
      <router-view />
    </main>

    <footer class="footer">
      © 2025 Faical – Portfolio |
      <a href="https://www.linkedin.com/in/faïcal-dielo-7b3154255/" target="_blank">LinkedIn</a> |
      <a href="https://github.com/tonprofil" target="_blank">GitHub</a> |
      <a href="mailto:dielofaical1@gmail.com">Email</a>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
const toggleMenu = () => (isOpen.value = !isOpen.value)
const closeMenu = () => (isOpen.value = false)
</script>

<style scoped>
.navbar {
  background-color: white;
  padding: 1rem 2rem;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.nav-logo {
  font-weight: 600;
  font-size: 1.2rem;
  color: #111827;
  text-decoration: none;
  z-index: 1100;
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

.burger {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1100;
}

.burger span {
  display: block;
  width: 25px;
  height: 3px;
  background: #111827;
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.burger span.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.burger span.open:nth-child(2) {
  opacity: 0;
}
.burger span.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

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

@media (max-width: 768px) {
  .burger {
    display: flex;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    background: white;
    position: absolute;
    top: 70px;
    right: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    border-radius: 0.5rem;
    z-index: 1050;
    transition: all 0.3s ease-in-out;
  }

  .nav-links.mobile-visible {
    display: flex;
  }

  .nav-links a {
    padding: 0.5rem 0;
  }

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1000;
  }
}
</style>

