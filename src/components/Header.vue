<template>
    <div class="header">
        <div class="logo">AGR</div>
        <span class="filler"></span>
        <div class="navigation">
            <at-menu class="menu" mode="horizontal" :active-name="$route.name">
                <at-menu-item name="home" to="/home">
                    <i class="icon icon-home"></i>Home
                </at-menu-item>
                <at-menu-item name="projects" to="/projects">
                    <i class="icon icon-layers"></i>Projects
                </at-menu-item>
                <at-menu-item name="services" to="/services">
                    <i class="icon icon-settings"></i>Services
                </at-menu-item>
                <at-menu-item name="legal" to="/legal">
                    <i class="icon icon-book"></i>Normativa
                </at-menu-item>
                <at-menu-item name="contact" to="/contact">
                    <i class="icon icon-mail"></i>Contact
                </at-menu-item>
            </at-menu>
            <at-dropdown class="language-select">
                <span><i class="icon icon-globe"></i> <i class="icon icon-chevron-down"></i></span>
                <at-dropdown-menu slot="menu">
                    <at-dropdown-item>Shenzhen</at-dropdown-item>
                    <at-dropdown-item>Guangzhou</at-dropdown-item>
                    <at-dropdown-item disabled>Shanghai</at-dropdown-item>
                    <at-dropdown-item divided>Beijing</at-dropdown-item>
                    <at-dropdown-item>hangzhou</at-dropdown-item>
                </at-dropdown-menu>
            </at-dropdown>
        </div>
    </div>
</template>


<script>
export default {
  name: 'Header',
  props: {}
}
</script>

<style scoped>
.header{
    display: flex;
    align-items: center;
}
.logo {margin: 0 30px 0 10px}
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
