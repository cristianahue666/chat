<template>
  <div class="home">
    <hello-world msg="Bienvenido a la pagina"/>
    <button @click="logout">logout</button>
    <h3>Bienenido al chatblog</h3>
  </div>
</template>

<script>
import firebase from 'firebase';
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  component: {
    HelloWorld
  },
  methods: {
    logout: function(){
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })    
    }
  }
}
</script>
