<script>
export default {
  name: "Footer",
};
</script>

<template>
  <div class="footer">
    <div class="info">
      <img src="../../assets/icons/logo.svg" alt="logo" />
      <div class="copyright">
        Copyright © <strong>Все права защищены</strong>
      </div>
    </div>
    <div class="links">
      <div class="social">
        <a href="#">
          <img src="../../assets/icons/facebook.svg" alt="facebook" />
        </a>
        <a href="#">
          <img src="../../assets/icons/instagram.svg" alt="instagram" />
        </a>
        <a href="#">
          <img src="../../assets/icons/telegram.svg" alt="telegram" />
        </a>
      </div>
      <div class="routes">
        <a href="#">Documentation</a>
        |
        <a href="#">About Us</a>
        |
        <a href="#">Pricing</a>
        |
        <a href="#">FAQ</a>
        |
        <a href="#">Support</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  padding: 2rem 3rem;
  display: flex;
  place-content: space-between;
  place-items: center;
  background-color: rgba(35, 38, 47, 1);

  .info {
    text-align: left;
    font-family: "Poppins", sans-serif;

    img {
      padding-bottom: 2rem;
    }

    .copyright {
      color: white;
    }
  }

  .links {
    color: white;

    .social {
      padding-bottom: 2rem;
      display: flex;
      justify-content: end;
      gap: 1rem;
    }

    .routes {
      display: flex;
      gap: 0.5rem;
      font-family: "Poppins", sans-serif;

      a {
        color: white;
      }
    }
  }
}
</style>
