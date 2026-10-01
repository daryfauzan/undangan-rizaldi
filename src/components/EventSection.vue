<script setup>
import { useCountdown } from '../composables/useInvitation'

const units = useCountdown()

const calendarUrl =
  'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Pernikahan%20Rizal%20%26%20Alya&dates=20261017T030000Z/20261017T050000Z&details=Akad%20%26%20Resepsi%20Rizaldi%20Al%20Karim%20%26%20Alyajilan%20Madani&location=El%20Hotel%20Kartika%20Wijaya%20Batu%2C%20Jl.%20Panglima%20Sudirman%20No.127%2C%20Kota%20Batu'
</script>

<template>
  <section id="acara" class="section event">
    <div class="lace band"></div>
    <img class="flora bouquet" src="/images/bouquet.webp" alt="" />
    <img class="flora leaf sway-flip" src="/images/leaf-left.webp" alt="" />

    <div class="inner event-copy">
      <div class="script title">Waktu &amp; Tempat</div>
      <p>Yang InsyaAllah akan dilaksanakan pada:</p>

      <div class="event-card">
        <img class="ornament" src="/images/ornament.webp" alt="" style="transform: rotateX(180deg);" />
        <div class="eyebrow kind">Akad &amp; Resepsi</div>
        <div class="disp day">Sabtu, 17 Oktober 2026</div>
        <div class="time">10.00 – 12.00 WIB</div>
        <div class="divider"></div>
        <div class="venue">El Hotel Kartika Wijaya Batu</div>
        <div class="address">Jl. Panglima Sudirman No.127, Pesanggrahan, Kec. Batu, Kota Batu, Jawa Timur 65313</div>
      </div>

      <div class="eyebrow toward">Menuju Hari Bahagia</div>
      <div class="countdown">
        <div v-for="unit in units" :key="unit.l" class="countdown-cell">
          <div class="disp countdown-value">{{ unit.v }}</div>
          <div class="countdown-label">{{ unit.l }}</div>
        </div>
      </div>

      <a class="btn-ghost" :href="calendarUrl" target="_blank" rel="noopener">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <rect x="3" y="4.5" width="18" height="16" rx="2" />
          <path d="M8 2.5v4M16 2.5v4M3 9.5h18" />
        </svg>
        <span>Simpan ke Kalender</span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.event {
  min-height: 980px;
}

.band {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
}

.bouquet {
  bottom: 60px;
  left: -90px;
  width: 260px;
  opacity: 0.35;
}

.leaf {
  bottom: -24px;
  right: -70px;
  width: 240px;
}

.event-copy {
  padding: 90px 26px 72px;
}

.title {
  font-size: 46px;
  line-height: 1.1;
  color: #645036;
}

p {
  margin: 12px 0 0;
  font-size: 17px;
  color: #2e2925;
}

.event-card {
  margin-top: 26px;
}

.ornament {
  width: 26px;
  height: auto;
}

.kind {
  margin-top: 10px;
  font-size: 13px;
  text-transform: uppercase;
}

.day {
  font-size: 30px;
  font-weight: 400;
  line-height: 1.15;
  color: #645036;
}

.time {
  font-size: 18px;
  font-weight: 600;
  color: #231f20;
}

.divider {
  margin: 14px 0;
  width: 48px;
  height: 1px;
  background: #b08d57;
}

.venue {
  font-size: 19px;
  font-weight: 700;
  color: #231f20;
}

.address {
  font-size: 16px;
  line-height: 1.45;
  color: #3b342e;
}

.toward {
  margin-top: 36px;
  font-size: 13px;
  text-transform: uppercase;
}

.countdown {
  margin-top: 14px;
}

.btn-ghost {
  margin-top: 26px;
}
</style>
