<template>
  <div id="app">
      <div>
        <div v-if="!username">You can't chat without a name. What's your name?
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
import { database } from "@/fire.js";
export default {
  name: "app",
  data() {
    return {
      username: "",
      messages: []
    };
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
      console.log(vm.messages)
    });
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
  border-style: outset;
  border-color: red;
  padding-top: 15px;  
  width: 800px;
  height: 500px;
  float:right;
  font-size: 20px;
  overflow: auto;
} 
.messages h3{
  color: red;
}

</style>
