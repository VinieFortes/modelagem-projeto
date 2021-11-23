<template>
  <q-layout :class="{'blur-content': showModalLogin || showModalSingup}">
    <Header @login="DoLogin" @singup="DoSingup"/>
    <q-page>
      <router-view/>
    </q-page>
    <Footer/>
  </q-layout>
  <ModalLogin v-if="showModalLogin" :class="'modal'" @close="showModalLogin = false"/>
  <ModalSingup v-if="showModalSingup" :class="'modal'" @close="showModalSingup = false"/>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ModalLogin from "@/components/ModalLogin";
import ModalSingup from "@/components/ModalSingup";
export default {
  name: 'LayoutDefault',
  components: {ModalLogin, Footer, Header, ModalSingup},
  data(){
    return{
      showModalLogin: false,
      showModalSingup: false
    }
  },
  methods: {
    DoLogin(){
      console.log('login')
      this.showModalLogin = true
    },
    DoSingup(){
      console.log('singup')
      this.showModalSingup = true
    }
  }
}
</script>

<style scoped>

.blur-content{
  filter: blur(5px);
}
.modal{
  position: absolute;
  padding-top: 3%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  animation: animationname 500ms alternate;
}
@keyframes animationname {
  0% {
    transform: translateY(-500px);
  }
  100% {
    transform: translateY(50px);
  }
}


</style>
