<template>
  <div class="services">
    <div class="layout-padding">
      <div class="title">
        <h1>Quins serveis oferim</h1>
        <p>Ens adaptem a les necesitats del client, donant suport en les diferents etapes o operacions que faci falta.</p>
      </div>
      <ul>
        <li>
          <i class="icon icon-edit-2"></i>
          Estudios y Proyectos</li>
        <li>
          <i class="icon icon-zap"></i>
          Asesoria energetica</li>
        <li>
          <i class="icon icon-sun"></i>
          Promoción de proyectos de Energias Renovables</li>
        <li>
          <i class="icon icon-feather"></i>
          Legalización de instalaciones</li>
        <li>
          <i class="icon icon-sliders"></i>
          Operación y Mantenimiento de instalaciones (Fotovoltaicas, mini-hidraulicas,...)</li>
        <li>
          <i class="icon icon-grid"></i>
          Gestión de Huertas Solares</li>
      </ul>
    </div>
    <div class="contact-call">
      <h1>No dubti en posar-s'hi en contacte amb nosaltres</h1>
      <at-button icon="icon-mail">Contactar</at-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Services'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul { margin: 30px 40px; }
li {
  font-size: 20px;
  padding: 10px 0;
  border-top: 1px solid whitesmoke;
}
li i { margin-right: 20px; }
.contact-call {
  margin-top: 80px;
  padding: 50px 0;
  text-align: center;
  background: whitesmoke;
}
.contact-call h1 { margin-bottom: 10px; }
</style>
