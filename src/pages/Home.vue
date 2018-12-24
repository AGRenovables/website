<template>
  <div>
    <div class="body">
      <div class="section-zip">
        <div>
          <img src="https://picsum.photos/600/300" alt="section" />
          <div class="description">
            <h1>{{$t("section_1_header")}}</h1>
            <p>{{$t("section_1_text")}}</p>
          </div>
        </div>
        <div>
          <div class="description">
            <h1>{{$t("section_4_header")}}</h1>
            <p>{{$t("section_4_p1")}}</p>
          </div>
        </div>
      </div>
      <div>
        <div class="quote">
          <p>{{$t("section_4_p2")}}</p>
        </div>
      </div>
      <div class="triplet">
        <div class="container">
          <div>
            <i class="icon icon-feather"></i>
            <h1>{{$t("aspect_1_title")}}</h1>
            <p>{{$t("aspect_1_description")}}</p>
          </div>
          <div>
            <i class="icon icon-zap"></i>
            <h1>{{$t("aspect_2_title")}}</h1>
            <p>{{$t("aspect_2_description")}}</p>
          </div>
          <div>
            <i class="icon icon-triangle"></i>
            <h1>{{$t("aspect_3_title")}}</h1>
            <p>{{$t("aspect_3_description")}}</p>
          </div>
        </div>
      </div>
      <div class="section-trident row at-row flex-center flex-middle layout-padding">
        <div class="col-md-8">
          <div class="at-box-row bg-c-brand-dark">
            <div class="description right">
              <h1>{{$t("section_3_header")}}</h1>
              <p>{{$t("section_3_text")}}</p>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <!-- <i class="icon icon-sun"></i> -->
          <img src="https://picsum.photos/300" alt="section" />
        </div>
        <div class="col-md-8">
          <div class="at-box-row bg-c-brand-light">
            <div class="description left">
              <h1>{{$t("section_2_header")}}</h1>
              <p>{{$t("section_2_text")}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
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

h1 {
  font-size: 2em;
  margin-bottom: 16px;
}
p {
  font-size: 1.3em;
  line-height: 1.5em;
}

.section-zip img {
  box-shadow: 0px 5px 12px 1px grey;
}
.section-zip > div {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px 0;
  flex-wrap: wrap;
}
.section-zip  > div .description {
  max-width: 560px;
  /*font-size: 130%;*/
  padding: 60px 20px;
  margin: 0 30px;
}
.section-zip > div:nth-of-type(even){
  background: whitesmoke;
}
.section-zip  > div:nth-of-type(even) .description {
  order: -1;
}
.quote {
  max-width: 780px;
  margin: 0 auto 60px auto;
  padding: 10px 70px;
}
.quote p {
  font-style: italic;
  font-weight: 100;
  position: relative;
}
.quote p::before {
  content: '\201C';
  font-size: 69px;
  position: absolute;
  line-height: 1em;
  top: -10px;
  left: -40px;
  font-weight: 900;
  font-family: 'Times New Roman', Times, serif;
}
.triplet {
  padding: 40px 0;
  background: whitesmoke;
}
.container {
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
}
.container > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 280px;
  text-align: center;
  margin: 30px;
}
.container > div i { font-size: 38px; }
.container > div h1 {
  font-size: 20px;
  margin-top: 10px;
}
.container > div span {
  font-size: 18px;
  line-height: 17px
}
.section-trident {margin: 80px auto 150px;}
.section-trident .description.left{ text-align: left; }
.section-trident .description.right{ text-align: right; }
.section-trident .icon{
  font-size: 140px;
  color: #fff81d;
  text-shadow: 0px 3px 7px rgba(0,0,0,0.2)
}
.section-trident img {
  border-radius: 50%;
}
</style>
