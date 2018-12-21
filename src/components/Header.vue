<template>
    <div>
        AGR
        <at-menu mode="horizontal" active-name="1">
            <at-menu-item name="1">
                <router-link class="nav-link" to="/"><i class="icon icon-home"></i>Home</router-link>
            </at-menu-item>
            <at-menu-item name="2">
                <router-link class="nav-link" to="/projects"><i class="icon icon-layers"></i>Projects</router-link>
            </at-menu-item>
            <at-menu-item name="3">
                <router-link class="nav-link" to="/services"><i class="icon icon-settings"></i>Services</router-link>
            </at-menu-item>
            <at-menu-item name="4">
                <router-link class="nav-link" to="/services"><i class="icon icon-book"></i>Normativa</router-link>
            </at-menu-item>
            <at-menu-item name="5">
                <router-link class="nav-link" to="/contact"><i class="icon icon-mail"></i>Contact</router-link>
            </at-menu-item>
        </at-menu>
    </div>
</template>


<script>
export default {
  name: 'Header',
  props: {}
}
</script>