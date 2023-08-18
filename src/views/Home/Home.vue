<script>
import Navbar from "../../components/Header/Navbar.vue";
import NavHeader from "../../components/Header/NavHeader.vue";
import Footer from "../../components/Footer/Footer.vue";
import Header from "./Header.vue";
import AboutUs from "./AboutUs.vue";
import Questions from "./Questions.vue";
import Contacts from "./Contacts.vue";
import CardSlider from "./CardSlider.vue";
import AboutCompany from "./AboutCompany.vue";
export default {
  name: "Home",
  components: {
    Header,
    AboutUs,
    Questions,
    Navbar,
    NavHeader,
    Footer,
    Contacts,
    CardSlider,
    AboutCompany,
  },
};
</script>

<template>
  <Navbar />
  <NavHeader />
  <Header />
  <AboutUs />
  <CardSlider />
  <Questions />
  <AboutCompany />
  <Contacts />
  <Footer />
</template>
