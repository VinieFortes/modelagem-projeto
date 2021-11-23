<template>
    <q-page-container>
      <Menu/>
      <Banner/>
      <CursosView/>
      <Card/>
      <FormacoesView/>
      <PlanosView/>
      <BannerFooter/>
    </q-page-container>
</template>

<script>
import CursosView from "@/components/CursosView";
import Menu from "@/components/Menu";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import BannerFooter from "../components/BannerFooter";
import FormacoesView from "@/components/FormacoesView";
import PlanosView from "@/components/PlanosView";

export default {
  name: 'Home',

  components: {
    FormacoesView,
    BannerFooter,
    CursosView,
    Menu,
    Banner,
    Card,
    PlanosView
  }
}
</script>
