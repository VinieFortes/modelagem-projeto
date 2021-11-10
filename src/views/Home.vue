<template>
    <q-page-container>
      <Menu/>
      <Banner/>
      <CursosView/>
      <Card/>
      <BannerFooter/>
    </q-page-container>
</template>

<script>
import CursosView from "@/components/CursosView";
import Menu from "@/components/Menu";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import BannerFooter from "../components/BannerFooter";

export default {
  name: 'Home',

  components: {
    BannerFooter,
    CursosView,
    Menu,
    Banner,
    Card
  }
}
</script>
