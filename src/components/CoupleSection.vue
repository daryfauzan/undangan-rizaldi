<template>
  <section id="mempelai" class="section paper couple">
    <img class="flora floral-b" src="/images/floral-b.webp" alt="" />
    <img class="flora floral-a" src="/images/floral-a.webp" alt="" />

    <div class="inner couple-copy">
      <div class="salam">Assalamu’alaikum Warahmatullahi Wabarakatuh</div>
      <p>Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami</p>

      <div class="couple-card bride">
        <div class="eyebrow role">Mempelai Wanita</div>
        <h2 class="disp">Alyajilan Madani</h2>
        <div class="parents">Putri pertama dari<br />Bapak Mamurrie &amp; Ibu Hanik M.</div>
      </div>
      
      <div class="ampersand">
        <div class="line"></div>
        <div class="script mark">&amp;</div>
        <div class="line"></div>
      </div>
      
      <div class="couple-card">
        <div class="eyebrow role">Mempelai Pria</div>
        <h2 class="disp">Rizaldi Al Karim</h2>
        <div class="parents">Putra keempat dari<br />Bapak Ismono &amp; Ibu Nurul C.</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.couple {
  min-height: 1000px;
}

.floral-b {
  top: 260px;
  right: -170px;
  width: 330px;
  opacity: 0.7;
}

.floral-a {
  bottom: 40px;
  left: -150px;
  width: 320px;
  opacity: 0.8;
  transform: scaleY(-1);
}

.couple-copy {
  padding: 72px 30px 64px;
}

.salam {
  font-size: 18px;
  font-weight: 700;
  color: #231f20;
}

p {
  margin: 16px 0 0;
  font-size: 17px;
  line-height: 1.55;
  color: #2e2925;
}

.groom {
  margin-top: 44px;
}

.bride {
  margin-top: 44px;
}

.role {
  font-size: 12px;
  letter-spacing: 0.4em;
  padding-left: 0.4em;
  text-transform: uppercase;
}

h2 {
  margin: 4px 0 0;
  font-size: 38px;
  line-height: 1.1;
  font-weight: 400;
  color: #645036;
}

.parents {
  font-size: 16px;
  line-height: 1.45;
  color: #3b342e;
}

.ampersand {
  margin: 26px 0;
  display: flex;
  align-items: center;
  gap: 16px;
}

.line {
  width: 60px;
  height: 1px;
  background: #b08d57;
}

.mark {
  font-size: 58px;
  line-height: 1;
  color: #645036;
}
</style>
