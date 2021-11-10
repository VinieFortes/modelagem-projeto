<template>
  <q-header id="header" reveal elevated class="text-white">
    <div class="row items-center justify-between" style="padding: 30px">
      <img src="https://a.espncdn.com/i/teamlogos/soccer/500/3454.png" alt="Vasco" width="42">
      <q-toolbar-title id="title">Modelagem Projeto</q-toolbar-title>
      <div id="btnWhite">
        <q-btn flat >Cursos</q-btn>
        <q-btn flat>Formações</q-btn>
        <q-btn flat>Planos</q-btn>
      </div>
      <div class="vl"></div>
      <div id="btnGreen">
        <q-btn rounded id="login">Entrar</q-btn>
        <q-btn rounded id="singin">Crie sua conta</q-btn>
      </div>
    </div>
  </q-header>
</template>

<script>

export default {
  name: "Header"
}
</script>

<style scoped>
#header{
  padding-right: 10px;
  padding-left: 10px;
  background-color: #051933;
}
#title{
  font-family: "love", Helvetica, Arial,serif;
  font-size: 21px;
  text-transform: uppercase;
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
  #title {
    visibility: hidden;
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