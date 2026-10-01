<template>
  <section id="undangan" class="section verse">
    <div class="lace band"></div>
    <img class="flora floral" src="/images/floral-a.webp" alt="" />
    <img class="flora corner" src="/images/corner-plant.webp" alt="" />
    <img class="flora plant sway-r" src="/images/plant-sway.webp" alt="" />

    <div class="inner verse-copy">
      <img class="monogram" src="/images/monogram.webp" alt="Monogram RA" />
      <div class="when">17.10.26</div>
      <div class="rule"></div>
      <p>
        Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
      </p>
      <div class="cite">(QS. AR-RUM : 21)</div>
    </div>
  </section>
</template>

<style scoped>
.verse {
  min-height: 720px;
}

.band {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
}

.floral {
  top: 60px;
  left: -130px;
  width: 320px;
  opacity: 0.8;
}

.corner {
  bottom: 0;
  left: -40px;
  width: 133px;
  height: 176px;
  opacity: 0.9;
  object-fit: cover;
  object-position: 0% 99%;
}

.plant {
  bottom: -45px;
  right: -40px;
  width: 170px;
}

.verse-copy {
  padding: 88px 32px 48px;
}

.monogram {
  width: 150px;
  height: auto;
}

.when {
  margin-top: 14px;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.22em;
  color: #645036;
}

.rule {
  margin-top: 28px;
}

p {
  margin: 28px 0 0;
  font-size: 17px;
  line-height: 1.6;
  color: #2e2925;
}

.cite {
  margin-top: 16px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #645036;
}
</style>
