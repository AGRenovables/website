<template>
    <div class="hero" :class=$route.name>
        <div>
            <h1>{{$t("header_title_"+$route.name)}}</h1>
            <h3>{{$t("header_subtitle_"+$route.name)}}</h3>
        </div>
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
    background-size: cover;
    background-position: center center;
    padding: 20px;
    transition: background 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.hero.home{background-image: url('./../assets/img/sky.jpg');}
.hero.home h1 {
    text-align: center;
}
.hero.projects {
    background-image: url('./../assets/img/solar-panels.jpg');
    background-position: top center;
    
}
.hero.services {
    background-image: url('./../assets/img/business-meeting.jpg');
    background-position: top center;
}
.hero.legal {
    background-image: url('./../assets/img/legal-background.png');
}
.hero.contact {
    background-image: url('./../assets/img/landscape.jpg');
    background-position: top center;
}
.hero h1 {
    color: white;
    font-size: 5em;
    text-align: left;
    text-shadow: 0px 0px 2px black;
}
.hero h3 {
    color: white;
    font-size: 1.8em;
    text-shadow: 0 0px 3px black;
}
.hero > div {
    max-width: 1200px;
    margin: 0 auto;
}
</style>
