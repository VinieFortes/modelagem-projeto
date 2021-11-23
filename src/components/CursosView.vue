<template>
<div ref="cursos" id="ViewCursos" class=" row flex-center">
  <p>Conheça nossos cursos</p>
  <q-btn rounded id="login">ver todos</q-btn>
</div>
</template>

<script>
export default {
  name: "CursosView"
}
</script>

<style scoped>


p {
  font-size: 30px;
  font-weight: bolder;
  text-transform: uppercase;
  color: #082c57;
  padding-top: 2%;
  align-self: center;
  position: relative;
}
button {
  background-color: #082c57;
  color: white;
  font-weight: bolder;
  display: flex;
  position: absolute;
  margin-top: 1%;
  right: 2%;
}

@media only screen and (max-width: 600px) {
 #View{
   display: flex;
   flex-direction: column;
   align-items: center;
 }
  p {
    font-size: 30px;
    font-weight: bolder;
    text-transform: uppercase;
    color: #082c57;
    padding-top: 2%;
  }
  button {
    background-color: #082c57;
    color: white;
    position: relative;
  }
}
</style>