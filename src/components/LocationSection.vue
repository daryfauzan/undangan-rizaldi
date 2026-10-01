<template>
  <section id="lokasi" class="section paper location">
    <img class="flora floral" src="/images/floral-a.webp" alt="" />
    <img class="flora corner" src="/images/corner-plant.webp" alt="" />

    <div class="inner location-copy">
      <div class="script title">Denah Lokasi</div>
      <div class="map-frame">
        <img
          src="/images/map.webp"
          alt="Denah menuju El Hotel Kartika Wijaya Batu: dari Jl. Trunojoyo lurus ke Jl. Panglima Sudirman, hotel di sisi selatan jalan dekat Balai Kota Among Tani"
        />
      </div>
      <div class="eyebrow label">Alamat Akad &amp; Resepsi</div>
      <div class="address">Jl. Panglima Sudirman No.127, Pesanggrahan, Kec. Batu, Kota Batu, Jawa Timur 65313</div>
      <a
        class="btn"
        href="https://www.google.com/maps/place/%C3%A9L+Hotel+Kartika+Wijaya+Batu/@-7.8671002,112.5112255,17.09z/data=!4m9!3m8!1s0x2e7887386bf84705:0x8ec96128fd1c9863!5m2!4m1!1i2!8m2!3d-7.867045!4d112.511201!16s%2Fg%2F1tftnhzz?entry=ttu&g_ep=EgoyMDI2MDkyOC4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
          <circle cx="12" cy="9.5" r="2.5" />
        </svg>
        <span>Buka Google Maps</span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.location {
  min-height: 820px;
}

.floral {
  top: -30px;
  right: -130px;
  width: 320px;
  opacity: 0.8;
}

.corner {
  bottom: 0;
  right: -30px;
  width: 150px;
  opacity: 0.9;
  transform: scaleX(-1);
}

.location-copy {
  padding: 72px 24px 64px;
}

.title {
  font-size: 50px;
  line-height: 1.1;
  color: #645036;
}

.map-frame {
  margin-top: 22px;
}

.label {
  margin-top: 24px;
  font-size: 13px;
  text-transform: uppercase;
}

.address {
  margin-top: 8px;
  font-size: 17px;
  line-height: 1.5;
  color: #2e2925;
}

.btn {
  margin-top: 24px;
}
</style>
