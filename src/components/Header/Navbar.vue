<script>
export default {
  name: "Navbar",
};
</script>

<template>
  <div class="navbar">
    <div class="links">
      <a href="#">О компании</a>
      <a href="#">Частые вопросы</a>
      <a href="#">Сотрудничество</a>
    </div>
    <div class="phone-number">
      <a href="tel:+998777774600">+998 (77) 777-46-00</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.navbar {
  padding: 0.8rem 3rem;
  display: flex;
  justify-content: space-between;
  background-color: rgba(35, 38, 47, 1);

  a {
    padding: 0 1rem;
    color: white;
    font-family: "Space Grotesk", sans-serif;
    font-size: 12px;
    font-weight: 500;
    line-height: 10px;
    letter-spacing: 0.5px;
    text-align: left;
  }
}
</style>
