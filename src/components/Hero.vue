<template>
    <div class="hero" :class=$route.name>
        <h1>{{$t("header_title_"+$route.name)}}</h1>
        <h3>{{$t("header_subtitle_"+$route.name)}}</h3>
    </div>
</template>


<script>
export default {
  name: 'Hero',
  props: {}
}
</script>

<style scoped>
.hero{
  height: 35vh;
  min-height: 330px;
  background-blend-mode: overlay;
  background-size: cover;
  padding: 20px;
  transition: background 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.hero.home{
  background: rgba(0, 157, 204, 0.5);
}
.hero.projects {
    background: rgba(0, 204, 138, 0.5);
}
.hero.services {
    background: rgba(255, 177, 0, 0.75);
}
.hero.legal {
    background: rgba(0, 67, 255, 0.75);
}
.hero h1 {
  font-size: 5em;
  color: white;
  text-align: left;
}
</style>
