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
  </div>
</template>

<style scoped lang="scss">
.footer {
  padding: 2rem 3rem;
  display: flex;
  place-content: space-between;
  place-items: center;
  background-color: rgba(35, 38, 47, 1);

  .copyright {
    color: white;
    font-family: "Space Grotesk", sans-serif;
    font-weight: 300;
  }
}
</style>
