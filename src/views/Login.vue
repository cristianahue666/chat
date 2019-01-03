<template>
    <div class="login">
        <h3>Iniciar Sesion</h3>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button @click="login">Conectar</button>
        <p>No tienes cuenta?</p> <router-link to="/sign-up">Crear nueva cuenta</router-link>
    </div>
</template>

<script>
    import firebase from 'firebase';

    export default{
        name: 'login',
        data(){
            return{
                email: '',
                password: ''
            }
        },
        methods: {
            login: function(){
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                    (user) => {
                        this.$router.replace('home')
                    },
                    (err) => {
                        alert('Oops. ' + err.message)
                    }

                );
            }
        }
    }
</script>

<style scoped>
    .login{
        margin-top: 40px;
    }
    input{
        margin: 10px 0;
        width: 20%;
        padding: 15px;
    }
    button{
        margin-top: 20px;
        width: 15%;
        cursor: pointer;
    }
    p{
        margin-top: 40px;
        font-size: 13px;
    }
    p a{
        text-decoration: underline;
        cursor: pointer;
    }
</style>
