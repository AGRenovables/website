<template>
    <div class="footer">
        <div class="layout-padding">
            <div>
                AGR
                <p>Assesoria i Gestió d'energies Renovables</p>
            </div>
            <ul>
                <li>
                    <i class="icon icon-phone"></i>655596235
                </li>
                <li>
                    <i class="icon icon-mail"></i>info@agrenovables.com
                </li>
                <li>
                    <i class="icon icon-map-pin"></i>Molí de la Coromina, Avià - Berga, Barcelona
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
export default {
  name: 'Footer',
  props: {}
}
</script>

<style scoped>
.footer{
    background: rgb(25, 27, 25);
    color: white;
    padding: 30px 0;
}
li {color: grey;}
li .icon{margin-right: 10px;}
</style>
