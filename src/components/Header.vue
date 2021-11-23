<template>
  <q-header id="header" reveal elevated class="text-white row justify-between q-pa-md items-center">
      <router-link to="/"><img src="../assets/logo.png" alt="Vasco" width="136"></router-link>
      <div class="row">
        <div id="btnWhite">
          <q-btn flat @click="scrollCursos">Cursos</q-btn>
          <q-btn flat @click="scrollFormacoes">Formações</q-btn>
          <q-btn flat @click="scrollPlanos">Planos</q-btn>
        </div>
        <div class="vl"></div>
        <div id="btnGreen">
          <q-btn @click="$emit('login')" rounded id="login">Entrar</q-btn>
          <q-btn @click="$emit('singup')" rounded id="singin">Crie sua conta</q-btn>
        </div>
      </div>
  </q-header>
</template>

<script>

export default {
  name: "Header",
  emits: ['login', 'singup'],
  methods: {
    scrollCursos() {
      document.getElementById("ViewCursos").scrollIntoView({
        behavior: "smooth"
      });
    },
    scrollFormacoes() {
      document.getElementById("FormacoesView").scrollIntoView({
        behavior: "smooth"
      });
    },
    scrollPlanos() {
      document.getElementById("PlanosView").scrollIntoView({
        behavior: "smooth"
      });
    }
  }

}
</script>

<style scoped>
#header{
  padding-right: 10px;
  padding-left: 10px;
  background-color: #051933;
}

.vl {
  border-left: 2px solid white;
  height: 20px;
  align-self: center;
}
button{
  font-weight: bolder;
}
#login, #singin {
  margin-left: 15px;
  background-color: #a3ffbf;
  color: black;
}

@media only screen and (max-width: 600px) {
  #header{
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .vl{
    visibility: hidden;
  }
  #btnWhite, #btnGreen{
    padding: 10px;
    margin: 0 auto;
  }
}

</style>