<template>
  <q-scroll-area
      style="height: 550px"
      :bar-style="{ bottom: '4px', borderRadius: '5px', background: 'black', height: '10px', opacity: 1 }"
      :thumb-style="{ bottom: '4px', borderRadius: '5px', background: '#051d3b', height: '10px', opacity: 1 }">
    <div class="q-pa-md row no-wrap justify-evenly q-gutter-md">

      <q-card class="my-card">
        <img style="background-color: #7f30cf; height: 300px" src="https://pnn.com.ua/Storage/BaseContents/2a8eef55-6923-4616-b483-3af535f9adfe/6f383c72-68d6-4b44-a973-48a0850e997f.png">
        <q-card-section class="column justify-evenly">
          <div class="text-h6" style="margin-bottom: 10px" >Curso basico de ASP.NET CORE</div>
          <div class="row flex items-center rounded-borders bg-blue text-white" style="width: fit-content; padding: 0 3px 0 2px">
            <q-icon name="star" color="white"></q-icon>
            <span>Fácil</span>
          </div>
        </q-card-section>
      </q-card>

      <q-card class="my-card">
        <img style="background-color: #943261; height: 300px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png">
        <q-card-section class="column justify-evenly">
          <div class="text-h6" style="margin-bottom: 10px" >Curso basico de Angular</div>
          <div class="row flex items-center rounded-borders bg-blue text-white" style="width: fit-content; padding: 0 3px 0 2px">
            <q-icon name="star" color="white"></q-icon>
            <span>Fácil</span>
          </div>
        </q-card-section>
      </q-card>

      <q-card class="my-card">
        <img style="background-color: #ff6600; height: 300px" src="https://cdn.freebiesupply.com/logos/thumbs/2x/kotlin-2-logo.png">
        <q-card-section>
          <div class="text-h6" style="margin-bottom: 10px" >Curso medio Kotlin</div>
          <div class="row flex items-center rounded-borders bg-orange text-white" style="width: fit-content; padding: 0 3px 0 2px">
            <q-icon name="star" color="white"></q-icon>
            <span>Intermediário</span>
          </div>
        </q-card-section>
      </q-card>

      <q-card class="my-card">
        <img style="background-color: #7f30cf" src="https://pnn.com.ua/Storage/BaseContents/2a8eef55-6923-4616-b483-3af535f9adfe/6f383c72-68d6-4b44-a973-48a0850e997f.png">
        <q-card-section>
          <div class="text-h6" style="margin-bottom: 10px" >Curso basico de ASP.NET CORE</div>
          <div class="row flex items-center rounded-borders bg-orange text-white" style="width: fit-content; padding: 0 3px 0 2px">
            <q-icon name="star" color="white"></q-icon>
            <span>Intermediário</span>
          </div>
        </q-card-section>
      </q-card>

      <q-card class="my-card">
        <img style="background-color: #7f30cf" src="https://pnn.com.ua/Storage/BaseContents/2a8eef55-6923-4616-b483-3af535f9adfe/6f383c72-68d6-4b44-a973-48a0850e997f.png">
        <q-card-section>
          <div class="text-h6" style="margin-bottom: 10px" >Curso basico de ASP.NET CORE</div>
          <div class="row flex items-center rounded-borders bg-red text-white" style="width: fit-content; padding: 0 3px 0 2px">
            <q-icon name="star" color="white"></q-icon>
            <span>Avançado</span>
          </div>
        </q-card-section>
      </q-card>

      <q-card class="my-card">
        <img style="background-color: #7f30cf" src="https://pnn.com.ua/Storage/BaseContents/2a8eef55-6923-4616-b483-3af535f9adfe/6f383c72-68d6-4b44-a973-48a0850e997f.png">
        <q-card-section>
          <div class="text-h6" style="margin-bottom: 10px" >Curso basico de ASP.NET CORE</div>
          <div class="row flex items-center rounded-borders bg-red text-white" style="width: fit-content; padding: 0 3px 0 2px">
            <q-icon name="star" color="white"></q-icon>
            <span>Avançado</span>
          </div>
        </q-card-section>
      </q-card>
    </div>

  </q-scroll-area>
</template>

<script>
export default {
  name: "Noticias"
}
</script>

<style scoped>
.my-card{
  width: 300px;
  height: 500px;
}
.text-h6{
  min-height: 100px;
}
</style>