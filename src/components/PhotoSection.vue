<template>
  <section id="foto" class="section photos">
    <div class="lace band"></div>
    <img class="flora floral" src="/images/floral-a.webp" alt="" />
    <img class="flora corner" src="/images/corner-plant.webp" alt="" />

    <div class="inner photo-copy">
      <div class="script title">Rizal &amp; Alya</div>
      <div class="eyebrow label">Momen Bahagia</div>

      <figure class="map-frame portrait">
        <img src="/images/foto_1.jpeg" alt="Rizal dan Alya duduk berdampingan" />
      </figure>
      <figure class="map-frame portrait">
        <img src="/images/foto_2.jpeg" alt="Rizal dan Alya berpose di studio" />
      </figure>
    </div>
  </section>
</template>

<style scoped>
.photos {
  min-height: 0;
}

.band {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
}

.floral {
  top: 80px;
  right: -150px;
  width: 300px;
  opacity: 0.55;
}

.corner {
  bottom: 0;
  left: -36px;
  width: 140px;
  opacity: 0.85;
}

.photo-copy {
  padding: 88px 24px 72px;
  gap: 22px;
}

.title {
  font-size: 52px;
  line-height: 1;
  color: #645036;
}

.label {
  font-size: 13px;
  text-transform: uppercase;
}

.portrait {
  margin: 0;
}

.portrait img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 12px;
}
</style>
