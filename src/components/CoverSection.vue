<script setup>
defineProps({
  guest: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section id="sampul" class="section paper cover">
    <img class="flora floral-a" src="/images/floral-a.webp" alt="" />
    <img class="flora floral-b" src="/images/floral-b.webp" alt="" />
    <img class="flora flower float" src="/images/flower-small.webp" alt="" />

    <div class="inner cover-copy">
      <img class="ornament rise" src="/images/ornament.webp" style="transform: rotateX(180deg);" alt="" />
      <div class="kicker rise">Pernikahan</div>
      <h1 class="disp rise2">Alya <br />&amp; Rizal</h1>
      <div class="date rise3">Sabtu, 17 Oktober 2026</div>
      <!-- <div class="guest rise3">
        <div>Kepada</div>
        <div>Yth. Bapak/Ibu/Saudara/i</div>
        <div class="disp guest-name">{{ guest }}</div>
      </div> -->
      <a href="#undangan" class="btn rise3" style="margin-top: 30px;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
        <span>Buka Undangan</span>
      </a>
    </div>

    <div class="stage">
      <div class="stage-inner">
        <img class="flora hills" src="/images/hills.webp" alt="" />
        <img class="flora bouquet" src="/images/bouquet.webp" alt="" />
        <img class="flora couple" src="/images/couple.webp" alt="" />
        <img class="flora bud" src="/images/bud.webp" alt="" />
        <img class="flora leaf-left sway" src="/images/leaf-left.webp" alt="" />
        <img class="flora leaf-right sway-flip" src="/images/leaf-right.webp" alt="" />
      </div>
    </div>
    <div class="apology">Mohon maaf bila ada kesalahan penulisan nama dan gelar</div>
  </section>
</template>

<style scoped>
.cover {
  min-height: 860px;
}

.floral-a {
  top: -40px;
  right: -120px;
  width: 330px;
  opacity: 0.9;
}

.floral-b {
  top: 40px;
  left: -150px;
  width: 300px;
  opacity: 0.7;
}

.flower {
  top: 90px;
  left: 24px;
  width: 80px;
  opacity: 0.8;
}

.cover-copy {
  padding: 56px 28px 0;
}

.ornament {
  width: 34px;
  height: auto;
}

.kicker {
  margin-top: 18px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5em;
  padding-left: 0.5em;
  text-transform: uppercase;
  color: #645036;
}

h1 {
  margin: 10px 0 0;
  font-size: 78px;
  line-height: 0.95;
  font-weight: 400;
  color: #645036;
  letter-spacing: -0.01em;
}

.date {
  margin-top: 18px;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #645036;
}

.guest {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  font-size: 15px;
  color: #4a4038;
}

.guest-name {
  margin-top: 6px;
  font-size: 24px;
  font-weight: 500;
  color: #231f20;
}

.btn {
  margin-top: 22px;
}

.hills {
  left: -60px;
  right: -60px;
  bottom: 70px;
  width: calc(100% + 120px);
  opacity: 0.85;
}

.bouquet {
  right: -40px;
  bottom: 90px;
  width: 250px;
}

.couple {
  left: 40px;
  bottom: 28px;
  width: 330px;
}

.bud {
  left: 14px;
  bottom: 60px;
  width: 46px;
}

.leaf-left {
  left: -58px;
  bottom: -8px;
  width: 230px;
}

.leaf-right {
  right: -34px;
  bottom: -14px;
  width: 120px;
}

.apology {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 8px;
  z-index: 3;
  text-align: center;
  font-size: 11px;
  color: #4a4038;
}
</style>
