<script>
import Navbar from "../../components/Header/Navbar.vue";
import NavHeader from "../../components/Header/NavHeader.vue";
import Footer from "../../components/Footer/Footer.vue";
import Header from "./Header.vue";
import AboutUs from "./AboutUs.vue";
export default {
  name: "Home",
  components: { Header, AboutUs, Navbar, NavHeader, Footer },
};
</script>

<template>
  <Navbar />
  <NavHeader />
  <Header />
  <AboutUs />
  <Footer />
</template>
