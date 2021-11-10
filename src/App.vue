<template>
  <q-layout>
    <Header/>
    <q-page>
      <router-view/>
    </q-page>
    <Footer/>
  </q-layout>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: 'LayoutDefault',
  components: {Footer, Header}
}
</script>
