<template>
    <div class="sign-up">
        <h3>Crear una nueva cuenta!</h3>
        <img src="https://www.oas.org/ext/Portals/14/EasyDNNNews/588/300300p2250EDNmainImage.png" alt="chat"><br>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button @click="signUp">Sign Up</button>
        <span>O vuelve al <router-link to="/login"> login</router-link>.</span>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'signUp',
    data() {
        return{
            email: '',
            password: '',
        }
    },
    methods: {
        signUp: function(){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                (user) => {
                    this.$router.replace('home')
                },
                (err) => {
                    alert('Ooops. ' + err.message)
                }
            );
        }
    }
}
</script>

<style scoped>
    .signUp{
        margin-top: 40px;
    }
    input {
        margin: 10px 0;
        width: 20%;
        padding: 15px;
    }
    button { 
        margin-top: 10px;
        width: 15%;
        cursor: pointer;
    }
    span {
        display: block;
        margin-top: 20px;
        font-size: 11px;
    }
</style>

