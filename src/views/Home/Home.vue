<script>
import Navbar from "../../components/Header/Navbar.vue";
import NavHeader from "../../components/Header/NavHeader.vue";
import Footer from "../../components/Footer/Footer.vue";
import Header from "./Header.vue";
export default {
  name: "Home",
  components: { Header, Navbar, NavHeader, Footer },
};
</script>

<template>
  <Navbar />
  <NavHeader />
  <Header />
  <Footer />
</template>
