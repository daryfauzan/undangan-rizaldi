<script setup>
import { useGuestName } from './composables/useInvitation'
import CoverSection from './components/CoverSection.vue'
import VerseSection from './components/VerseSection.vue'
import CoupleSection from './components/CoupleSection.vue'
import PhotoSection from './components/PhotoSection.vue'
import EventSection from './components/EventSection.vue'
import LocationSection from './components/LocationSection.vue'
import ClosingSection from './components/ClosingSection.vue'
import FooterSection from './components/FooterSection.vue'

const guest = useGuestName()
</script>

<template>
  <main class="invitation">
    <CoverSection :guest="guest" />
    <VerseSection />
    <CoupleSection />
    <PhotoSection />
    <EventSection />
    <LocationSection />
    <ClosingSection />
    <FooterSection />
  </main>
</template>
