<template>
    <div class="footer">
        <div class="layout-padding">
            <div>
                AGR
                <p>Assesoria i Gestió d'energies Renovables</p>
            </div>
            <ul>
                <li>
                    <i class="icon icon-mail"></i>info@agrenovables.com
                </li>
                <li>
                    <i class="icon icon-map-pin"></i>ASSESSORIA I GESTIÓ DE RENOVABLES S.L.
CIF B64061914
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
    color: #73B2D9;
    padding: 30px 20px;
}
li {color: grey;}
li .icon{margin-right: 10px;}
</style>
