<template>
  <div id="app">
    <div id="nav">
        <router-link to="/login">Login</router-link>|
        <router-link to="/sign-up">Sign Up</router-link>|
        <router-link to="/chatpriv">Chat Privado</router-link>|
        <router-link to="/chat">Chat Global</router-link> <br>
        <br>

      </div>
      
    <router-view/>
  </div>
</template>
<style>
</style>

