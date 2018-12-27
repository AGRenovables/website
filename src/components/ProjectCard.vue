<template>
    <div class="project-card">
        <at-card style="width: 100%;" :bordered="false">
            <h4 slot="title">{{$t(info.name)}}</h4>
            <div v-if="info.active" slot="extra">
                {{$t(info.state)}}
                <at-badge value="1" status="success" dot></at-badge>
            </div>
            <div v-if="!info.active" slot="extra">
                {{$t('fv_progress')}}
                <at-badge value="0" status="warning" dot></at-badge>
            </div>
            <div class="content">
                <div class="info-details">
                    <span>{{$t('projects_location')}}</span><span>{{$t(info.location)}}</span>
                    <span>{{$t('projects_type')}}</span><span>{{$t(info.type)}}</span>
                    <span>{{$t('projects_power')}}</span><span>{{$t(info.power)}}</span>
                    <span>{{$t('projects_area')}}</span><span>{{$t(info.area)}}<sup>2</sup></span>
                    <span>{{$t('projects_module')}}</span><span>{{$t(info.module)}}</span>
                </div>
                <img :src="info.img" alt="install" />
            </div>
        </at-card>
    </div>
</template>


<script>
export default {
  name: 'ProjectCard',
  props: {
      info: Object
  }
}
</script>

<style scoped>
.project-card {
    margin: 0 10px;
    width: 380px;
}
.content {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
    justify-content: space-around;
}
.content img {
    margin: 0 auto 15px auto;
    box-shadow: 0px 8px 16px -4px black;
    max-width: 330px;
    max-height: 200px;
    width: 100%;
    object-fit: cover;
}
.info-details {
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 20px;
    max-width: 300px;
    margin-right: 30px;
}
</style>
