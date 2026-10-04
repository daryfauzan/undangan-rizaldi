<template>
  <section id="penutup" class="section closing">
    <div class="lace band"></div>
    <img class="flora floral" src="/images/floral-b.webp" alt="" />

    <div class="inner closing-copy">
      <p>
        Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu pada kedua mempelai.
      </p>
      <div class="salam">Wassalamu’alaikum Warahmatullahi Wabarakatuh</div>
      <div class="signoff">Kami yang berbahagia,</div>
      <div class="disp names">Alya &amp; Rizal </div>
      <div class="names" style="font-size: 24px; margin-top: 24px;">#spesiALYAbuatRIZAL</div>
    </div>

    <div class="stage">
      <div class="stage-inner">
        <img class="flora hills" src="/images/hills.webp" alt="" />
        <img class="flora bouquet" src="/images/bouquet.webp" alt="" />
        <img class="flora couple" src="/images/couple.webp" alt="" />
        <img class="flora leaf-right sway-flip" src="/images/leaf-left.webp" alt="" />
        <img class="flora leaf-left sway" src="/images/leaf-right.webp" alt="" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.closing {
  min-height: 760px;
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
  right: -160px;
  width: 320px;
  opacity: 0.7;
}

.closing-copy {
  padding: 84px 32px 320px;
}

p {
  font-size: 17px;
  line-height: 1.6;
  color: #2e2925;
}

.salam {
  margin-top: 20px;
  font-size: 18px;
  font-weight: 700;
  color: #231f20;
}

.signoff {
  margin-top: 30px;
  font-size: 15px;
  color: #4a4038;
}

.names {
  margin-top: 6px;
  font-size: 52px;
  line-height: 1;
  font-weight: 400;
  color: #645036;
}

.hills {
  left: -60px;
  bottom: 60px;
  width: calc(100% + 120px);
  opacity: 0.85;
}

.bouquet {
  left: -50px;
  bottom: 80px;
  width: 240px;
  transform: scaleX(-1);
}

.couple {
  right: 10px;
  bottom: 26px;
  width: 320px;
}

.leaf-right {
  right: -60px;
  bottom: -10px;
  width: 220px;
}

.leaf-left {
  left: -26px;
  bottom: -14px;
  width: 120px;
}
</style>
