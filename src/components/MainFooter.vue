<script setup lang="ts"></script>

<template>
  <footer>
    <section class="guid-links">
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Press</a></li>
        <li><a href="#">Copyright</a></li>
        <li><a href="#">Contact us</a></li>
        <li><a href="#">Creators</a></li>
        <li><a href="#">Advertise</a></li>
        <li><a href="#">Developers</a></li>
      </ul>
    </section>

    <section class="guid-links">
      <ul>
        <li><a href="#">Terms</a></li>
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Policy & Safety</a></li>
        <li><a href="#">How youtube works</a></li>
        <li><a href="#">Test new futures</a></li>
      </ul>
    </section>
    <section class="copyright">
      <p>© 2023 PNIX LLC</p>
    </section>
  </footer>
</template>

<style scoped>
footer {
  font-size: 0.8125rem;
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin: 1.2em 1.2em;
}

footer .guid-links ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4em;
  font-weight: 600;
}

footer .guid-links ul li {
  list-style-type: none;
}

footer .guid-links ul li a {
  color: #606060;
  color: var(--secondary-text-color);
  text-decoration: none;
}

footer .guid-links ul li a:hover {
  text-decoration: underline;
}

footer .copyright {
  color: var(--secondary-text-color);
  font-size: 0.75rem;
}
</style>
