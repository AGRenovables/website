<template>
    <div class="header">
        <div class="logo">
            <router-link to="/" exact><img src="./../assets/logo_tagline.png" alt="AGR" />
                </router-link>
        </div>
        <span class="filler"></span>
        <mq-layout mq="md">
            <at-dropdown trigger="click" @on-dropdown-command="handleMenu" placement="bottom-right">
                <i class="icon icon-menu"></i>
                <at-dropdown-menu slot="menu">
                    <!-- <at-dropdown-item name="home">{{$t("nav_home")}}</at-dropdown-item> -->
                    <at-dropdown-item name="projects">{{$t("nav_projects")}}</at-dropdown-item>
                    <at-dropdown-item name="services">{{$t("nav_services")}}</at-dropdown-item>
                    <at-dropdown-item name="legal">{{$t("nav_legal")}}</at-dropdown-item>
                    <at-dropdown-item name="contact">{{$t("nav_contact")}}</at-dropdown-item>
                </at-dropdown-menu>
            </at-dropdown>
        </mq-layout>
        <div class="navigation">
            <mq-layout mq="lg+">
                <at-menu class="menu" mode="horizontal" :active-name="$route.name">
                    <!-- <at-menu-item name="home" to="/" >
                        <i class="icon icon-home"></i>{{$t("nav_home")}}
                    </at-menu-item> -->
                    <at-menu-item name="projects" to="/projects">
                        <i class="icon icon-layers"></i>{{$t("nav_projects")}}
                    </at-menu-item>
                    <at-menu-item name="services" to="/services">
                        <i class="icon icon-settings"></i>{{$t("nav_services")}}
                    </at-menu-item>
                    <at-menu-item name="legal" to="/legal">
                        <i class="icon icon-book"></i>{{$t("nav_legal")}}
                    </at-menu-item>
                    <at-menu-item name="contact" to="/contact">
                        <i class="icon icon-mail"></i>{{$t("nav_contact")}}
                    </at-menu-item>
                </at-menu>
            </mq-layout>
            <at-dropdown class="language-select" @on-dropdown-command="handleClick" placement="bottom-right">
                <span><i class="icon icon-globe"></i><span class="lng-code">{{lang}}</span><i class="icon icon-chevron-down"></i></span>
                <at-dropdown-menu slot="menu">
                    <at-dropdown-item name="ca">Català</at-dropdown-item>
                    <at-dropdown-item name="es">Español</at-dropdown-item>
                    <!-- <at-dropdown-item name="en">English</at-dropdown-item> -->
                </at-dropdown-menu>
            </at-dropdown>
        </div>
    </div>
</template>


<script>
import i18next from 'i18next';

export default {
  name: 'Header',
  data: function () {
      return {
          lang : i18next.language
      }
  },
  methods: {
    handleMenu: function(path) {
        if(path === 'home')
        {
            path = "/";
        }
        this.$router.push(path)
    },
    handleClick: function(lng) {
        //this.current_lang = lang;
        // eslint-disable-next-line
        console.log("change language to ",lng);
        i18next.changeLanguage(lng);
        this.lang = i18next.language;
    }
  }
}
</script>

<style scoped>
.header{
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
}
@media only screen and (max-width: 760px) {
    .header{
        padding: 10px 10px;
    }
}
.logo {
    margin: 0 30px 0 10px;
    display: flex;
    align-items: center;
}
.logo a {
    display: flex;
    align-items: center;
    justify-content: center;
}
.logo img{height: 28px; width: auto;}
.filler {flex:1}
.icon-menu {
    font-size: 200%;
}
.navigation {
    padding: 0 30px;
    display: flex;
    align-items: center;
}
@media only screen and (max-width: 760px) {
    .navigation {
        padding: 0 10px;
    }
}
.language-select {
    margin: 0 30px;
    cursor: pointer;
}
@media only screen and (max-width: 760px) {
    .language-select {
        margin: 0;
    }
}
.lng-code {
    text-transform: uppercase;
    padding: 0 4px;
}
</style>
