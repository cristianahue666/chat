<template>
  <div id="app">
      <div>
        <h2><strong>Chat Personal</strong></h2>
       
        <div>
        <h4>Estas Conectado con: {{ide}}</h4>
        </div>
        <div>

          De : {{username}}<br>
          Escriba su mensaje.<br>
          <textarea name="" id="" cols="30" rows="10" 
          placeholder="New Message" v-on:keyup.enter="sendMessage">
          </textarea>
        </div>

        <div class="messages">
          <h3>Messages</h3>
          <div class="message" v-for="message in messages" :key="message.username">
            <strong>{{message.username}}</strong>
            <p>{{message.text}}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import {database, auth } from '@/fire.js'
export default {
  name: 'app',
  data() {
    return {
      username: '',
      messages: [],
      ide: null
    }
  },

  methods: {
    sendMessage(e) {
      e.preventDefault();
      if(e.target.value) {

        const message = {
          username: this.username,
          username2: this.$route.params.nameprivate,
          text: e.target.value
        }
        //Push message to firebase reference
        database.ref('messagespriv').push(message);
        e.target.value = ''
      }
    }
  },
  mounted() {
    let vm = this;
    this.username = auth.currentUser.email
    this.ide = this.$route.params.nameprivate
    const itemsRef = database.ref('messagespriv');
    itemsRef.on('value', snapshot => {
      let data = snapshot.val();
      let messages = [];
      Object.keys(data).forEach(key => {
        if ((this.username == data[key].username && this.ide == data[key].username2)
        || (this.username == data[key].username2 && this.ide == data[key].username))
        {
        messages.push({
          id: key,
          username: data[key].username,
          username2: data[key].username2,
          text: data[key].text
        });
        }
      });
      vm.messages = messages;
    })
  }
}
</script>



