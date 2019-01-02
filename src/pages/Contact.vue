<template>
  <div class="layout-padding">
    <div class="title">
      <h1>{{$t("contact_header")}}</h1>
      <p>{{$t("contact_subheader")}}</p>
    </div>
    <form id="app" @submit="doSomething">
      <div class="form">
        <div class="data">
          <at-input v-model="name" size="large" :placeholder="$t('name')"></at-input>
          <at-input v-model="company" size="large" :placeholder="$t('company')"></at-input>
          <at-input v-model="email" size="large" :placeholder="$t('email')"></at-input>
          <at-input v-model="phone" number size="large" :placeholder="$t('phone')"></at-input>
        </div>
        <div class="message">
          <at-textarea v-model="message" size="large" :placeholder="$t('message')" minRows=10 maxRows=12></at-textarea>
        </div>
      </div>
    </form>
      <div class="send-button">
        <at-button type="primary" size="large" @click="doSomething">{{$t("send")}}</at-button>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Contact',
  data: function () {
    return {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: ''
    }
  },
  methods: {
    doSomething: function(event) {
      let postData = {
        name: this.name,
        add: 'address',
        empresa: this.company,
        email: this.email,
        tel: this.phone,
        message: this.message
      }
      // eslint-disable-next-line
      console.log("do something",event, this.name);
      axios.post(`http://agrenovables.com/action.php`, {
        body: postData
      })
      .then(response => {
        // eslint-disable-next-line
        console.log('response',response);
      })
      .catch(e => {
        this.errors.push(e)
      })
      //window.open('mailto:test@example.com?subject=subject&body=body');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form {
  display: flex;
  align-items: flex-start;
  justify-content: stretch;
  margin: 0 auto;
  border-top: 1px solid whitesmoke;
}
.form > * {margin: 20px;}
.data > * {margin: 0 0 16px 0;}
.data {flex: 1}
.message {flex: 2}
.send-button { 
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px auto;
}
@media screen and (max-width: 760px){
  .form {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
