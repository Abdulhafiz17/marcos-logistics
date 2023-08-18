<script>
import Navbar from "../../components/Header/Navbar.vue";
import NavHeader from "../../components/Header/NavHeader.vue";
import Footer from "../../components/Footer/Footer.vue";
import Header from "./Header.vue";
import CardSlider from "./CardSlider.vue";
import AboutCompany from "./AboutCompany.vue";
export default {
  name: "Home",
  components: { Header, Navbar, NavHeader, Footer, CardSlider, AboutCompany },
};
</script>

<template>
  <Navbar />
  <NavHeader />
  <Header />
  <CardSlider />
  <AboutCompany />
  <Footer />
</template>
