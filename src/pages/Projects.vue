<template>
  <div class="projects layout-padding">
    <ProjectCard v-for="project in this.projects" :key="project.code" v-bind:info="project"/>
  </div>
</template>

<script>
import ProjectCard from './../components/ProjectCard.vue'
import arr_projects from './../projects'

export default {
  name: 'Projects',
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: arr_projects,
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.projects {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: center;
}
</style>
