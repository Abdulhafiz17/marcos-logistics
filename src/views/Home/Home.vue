<script>
import Navbar from "../../components/Header/Navbar.vue";
import NavHeader from "../../components/Header/NavHeader.vue";
import Footer from "../../components/Footer/Footer.vue";
import Header from "./Header.vue";
import AboutUs from "./AboutUs.vue";
import Questions from "./Questions.vue";
import Contacts from "./Contacts.vue";
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
  },
};
</script>

<template>
  <Navbar />
  <NavHeader />
  <Header />
  <AboutUs />
  <Questions />
  <Contacts />
  <Footer />
</template>
