<template>
  <div>
    <q-card id="card">
      <div id="header" class="row">
        <p>Faça o seu cadastro</p>
        <q-space/>
        <q-icon name="highlight_off" size="md" @click="$emit('close')"></q-icon>
      </div>
      <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md"
      >
        <q-input
            filled
            v-model="name"
            type="name"
            label="Seu nome de usuario"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'O campo de nome não pode ficar em branco !']"
        />

        <q-input
            filled
            v-model="email"
            type="email"
            label="Seu e-mail"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'O campo de e-mail não pode ficar em branco !']"
        />
        <q-input
            filled
            v-model="password"
            type="password"
            label="Sua senha"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'O campo de senha não pode ficar em branco !']"
        />
        <q-checkbox v-model="teal" label="Concordo com todos termos e bla bla" color="primary"/>
        <div>
          <q-btn label="Cadastrar" type="submit" color="primary"/>
          <q-btn label="Limpar Campos" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "ModalLogin",
  emits: ['close']
}
</script>

<style scoped>
#card{
  background-color: white;
  margin: 0 auto;
  height: 500px;
  width: 350px;
  border-radius: 12px;
}
#header{
  background-color: #0d47a1;
  color: white;
  padding: 10px 5px 0 5px;
  border-radius: 12px 12px 0 0;
  font-weight: bolder;
}
p{
  font-size: 18px;
  padding-left: 5px;
}
form {
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>