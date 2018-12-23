<template>
    <div class="header">
        <div class="logo">
            <img src="./../assets/logo_tagline.png" alt="AGR" />
        </div>
        <span class="filler"></span>
        <div class="navigation">
            <at-menu class="menu" mode="horizontal" :active-name="$route.name">
                <at-menu-item name="home" to="/" exact>
                    <i class="icon icon-home"></i>{{$t("nav_home")}}
                </at-menu-item>
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
            <at-dropdown class="language-select" @on-dropdown-command="handleClick" placement="bottom-right">
                <span><i class="icon icon-globe"></i> <i class="icon icon-chevron-down"></i></span>
                <at-dropdown-menu slot="menu">
                    <at-dropdown-item name="ca">CAT</at-dropdown-item>
                    <at-dropdown-item name="es">ES</at-dropdown-item>
                    <at-dropdown-item name="en">EN</at-dropdown-item>
                </at-dropdown-menu>
            </at-dropdown>
        </div>
    </div>
</template>


<script>
import i18next from 'i18next';

export default {
  name: 'Header',
  props: {},
  methods: {
    handleClick: function(lang) {
    // eslint-disable-next-line
      console.log("change language to ",lang);
      i18next.changeLanguage(lang);
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
.logo {
    margin: 0 30px 0 10px;
    display: flex;
    align-items: center;
}
.logo img{height: 36px; width: auto;}
.filler {flex:1}
.navigation {
    padding: 0 30px;
    display: flex;
    align-items: center;
}
.language-select {
    margin: 0 30px;
}
</style>
