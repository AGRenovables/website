<template>
  <div class="services">
    <div class="layout-padding">
      <div class="title">
        <h1>{{$t("service_header")}}</h1>
        <p>{{$t("service_subheader")}}</p>
      </div>
      <ul>
        <li>
          <i class="icon icon-edit-2"></i>
          {{$t("service_list_1")}}</li>
        <li>
          <i class="icon icon-zap"></i>
          {{$t("service_list_2")}}</li>
        <li>
          <i class="icon icon-sun"></i>
          {{$t("service_list_3")}}</li>
        <li>
          <i class="icon icon-feather"></i>
          {{$t("service_list_4")}}</li>
        <li>
          <i class="icon icon-sliders"></i>
          {{$t("service_list_5")}}</li>
        <li>
          <i class="icon icon-grid"></i>
          {{$t("service_list_6")}}</li>
      </ul>
    </div>
    <div class="contact-call">
      <h1>{{$t("contact_alt_subtitle")}}</h1>
      <at-button icon="icon-mail" size="large" @click="goToContact">{{$t("contact_action")}}</at-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Services',
  methods: {
    goToContact: function() {
      this.$router.push('/contact')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul { margin: 30px 40px; }
li {
  font-size: 20px;
  padding: 10px 0;
  border-top: 1px solid whitesmoke;
}
li i { margin-right: 20px; }
.contact-call {
  margin-top: 80px;
  padding: 50px 0;
  text-align: center;
  background: whitesmoke;
}
.contact-call h1 { margin-bottom: 10px; }
</style>
