<template>
  <div id="app">
    <div id="nav">
        <button><router-link to="/login">Login</router-link></button>
        <button><router-link to="/sign-up">Sign Up</router-link></button>
        <button><router-link to="/chatpriv">Chat Privado</router-link></button> 
        <button><router-link to="/chat">Chat Global</router-link></button> <br>
        <br>
      
      </div>  
    <router-view/>
  </div>
</template>
<style>
</style>

