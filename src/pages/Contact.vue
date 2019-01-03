<template>
  <div class="layout-padding">
    <div class="title">
      <h1>{{$t("contact_header")}}</h1>
      <p>{{$t("contact_subheader")}}</p>
    </div>
    <form id="app" @submit="doSomething">
      <div class="form">
        <div class="data">
          <at-input v-model="name" size="large" :placeholder="$t('name')" :status="form_error.name"></at-input>
          <at-input v-model="email" size="large" :placeholder="$t('email')" :status="form_error.email"></at-input>
          <at-input v-model="phone" number size="large" :placeholder="$t('phone')"></at-input>
          <at-input v-model="company" size="large" :placeholder="$t('company')"></at-input>
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
import i18next from 'i18next';

export default {
  name: 'Contact',
  data: function () {
    return {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
      form_error : {
      }
    }
  },
  methods: {
    doSomething: function(event) {
      let postData = {
        name: this.name,
        empresa: this.company,
        email: this.email,
        tel: this.phone,
        message: this.message
      }

      function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }

      function isEmpty(obj) {
        for(var key in obj) {
          if(obj.hasOwnProperty(key))
              return false;
        }
        return true;
      }

      
      this.form_error = {};

      if (this.name == undefined || this.name == '' || this.name == null) {
        this.form_error = Object.assign(this.form_error,{name: 'error'});
      }
      if (!validateEmail(this.email)) {
        this.form_error = Object.assign(this.form_error,{email: 'error'});
      }

      console.log("is empty?",isEmpty(this.form_error));
      if (isEmpty(this.form_error)) {
        // eslint-disable-next-line
        console.log("do something",event, this.name);
        axios.post('http://www.agrenovables.com/action.php', {
          body: postData
        })
        .then(response => {
          // eslint-disable-next-line
          console.log('response',response);
          this.$Message.success(i18next.t('sent'));
          this.$router.push('/');
        })
        .catch(e => {
          this.errors.push(e)
          this.$Message.error(i18next.t('oops'));
        })
      }
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
