<template>
  <q-page-container>
    <BannerCurso/>
    <div class="q-pa-md">
      <q-video
          :ratio="16/9"
          src="https://www.youtube.com/embed/r_6Ku38sA-c"
      />
    </div>
  </q-page-container>
</template>

<script>
import BannerCurso from "@/components/BannerCurso";
export default {
  name: "Curso",
  components: {BannerCurso}
}
</script>

<style scoped>

</style>