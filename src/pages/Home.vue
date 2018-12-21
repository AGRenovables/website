<template>
  <div class="home">
    <div class="hero">
      <h1>{{$t("header_title")}}</h1>
      <h3>{{$t("header_subtitle", {lang: this.lang})}}</h3>
    </div>
    <div class="body">
      <div>
        <h1>{{$t("section_1_header")}}</h1>
        <p>{{$t("section_1_text")}}</p>
      </div>
      <div>
        <h1>{{$t("section_2_header")}}</h1>
        <p>{{$t("section_2_text")}}</p>
      </div>
      <div>
        <h1>{{$t("section_3_header")}}</h1>
        <p>{{$t("section_3_text")}}</p>
      </div>
    </div>
    <div class="triplet">
      <div>
        <i class="icon icon-feather"></i>
        <h1>{{$t("aspect_1_title")}}</h1>
        <span>{{$t("aspect_1_description")}}</span>
      </div>
      <div>
        <i class="icon icon-zap"></i>
        <h1>{{$t("aspect_2_title")}}</h1>
        <span>{{$t("aspect_2_description")}}</span>
      </div>
      <div>
        <i class="icon icon-triangle"></i>
        <h1>{{$t("aspect_3_title")}}</h1>
        <span>{{$t("aspect_3_description")}}</span>
      </div>
    </div>
    <div class="body">
      <h1>{{$t("section_4_header")}}</h1>
      <p>{{$t("section_4_p1")}}</p>
      <p>{{$t("section_4_p2")}}</p>

      <at-alert message="Here is the alert that can be closed." closable></at-alert>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  data() {
    return {
      lang: 'DE',
    };
  },
  computed: {
    username () {
      // We will see what `params` is shortly
      return this.$route.params.username
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  text-align: left;
}
h1 {
  font-size: 2em;
}
p {
  font-size: 1.2em;
  line-height: 1.5em;
}
.hero {
  background: rgba(0,0,0,0.2);
  height: 33vh;
  background-blend-mode: overlay;
  background-size: cover;
  padding: 20px
}
.hero h1 {
  font-size: 5em;
  color: white;
  text-align: left;
}
.body{ padding: 10px 20px; }
.body div { margin: 50px 0; }
.triplet {
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  padding: 30px 0;
  background: whitesmoke;
}
.triplet > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 250px;
  text-align: center;
  margin: 0 20px;
}
.triplet > div i { font-size: 38px; }
.triplet > div h1 {
  font-size: 20px;
  margin-top: 10px;
}
.triplet > div span {
  font-size: 18px;
  line-height: 17px
}
</style>
