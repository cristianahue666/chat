<template>
  <div id="app">
      <div>
        <div>
            <h4>People in the chat:</h4>
            <div v-for="message in nouser" :key="message.username">
            <!--sending param from tag route-link to a other page-->  
            <p><router-link :to="{ name: 'chatpriv', params: {nameprivate: message.username} }"
            target="_blank">Chat with {{message.username}} :D</router-link> </p>
            
            </div>
            <!-- <ul>
               <li>{{username}}</li> 
            </ul> -->
      </div>
        <div v-if="!username">No puedes chatear sin un nick, cual es el tuyo?
          <br>
          <input type="text" placeholder="Name" v-on:keyup.enter="updateUsername">
        </div>
        <div v-else>
          De : {{username}}
          <br>Escriba su mensaje.
          <br>
          <textarea
            name
            id
            cols="30"
            rows="10"
            placeholder="New Message"
            v-on:keyup.enter="sendMessage"
          ></textarea>
        </div>
        <br>
        <div class="messages">
          <h3>Messages</h3>
          <div class="message" v-for="message in messages" :key="message.id">
          <strong>{{message.username}}</strong>
            <p>{{message.text}}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { database, auth } from "@/fire.js";
export default {
  name: "app",
  data() {
    return {
      username: "",
      messages: [],
      ide: null,
      nouser: null
    }
  },

  methods: {
    updateUsername(e) {
      e.preventDefault();
      if (e.target.value) {
        this.username = e.target.value;
      }
    },
    sendMessage(e) {
      e.preventDefault();
      if (e.target.value) {
        const message = {
          username: this.username,
          text: e.target.value
        };
        //Push >message to firebase reference
        database.ref("messages").push(message);
        e.target.value = "";
      }
    }
  },
  mounted() {
    let vm = this;
    this.username = auth.currenteUser.email
    const itemsRef = database.ref("messages");
    itemsRef.on("value", snapshot => {
      let data = snapshot.val();
      let messages = [];
      Object.keys(data).forEach(key => {
        messages.push({
          id: key,
          username: data[key].username,
          text: data[key].text
        });
      });
      vm.messages = messages;
    })
    const itemsRefi = database.ref('users');
    itemsRefi.on('value', snapshot => {
      let data = snapshot.val();
      let messages = [];
      Object.keys(data).forEach(key => {
      // Making "if" to ask wich username is wich username
       if (this.username != data[key].email)
         { 
          messages.push({
            username: data[key].email,
          });
        }
      });
      this.nouser = messages;
      console.log(nouser)
      //vm.users = Object.values(vm.nouser.reduce((prev,next)=>Object.assign(prev,{[next.username]:next}),{})); //Deleting from the array the equasl parameters
    })
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.messages {
  border-style: dotted;
  border-color: black;
  padding-top: 15px;  
  width: 1000px;
  height: 440px;
  /* float:right; */
  font-size: 20px;
  overflow: auto;
  margin-left: auto;
  margin-right: auto;

} 
.messages h3{
  color: red;
}

</style>
