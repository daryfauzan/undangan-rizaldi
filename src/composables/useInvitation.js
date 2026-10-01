import { onMounted, onUnmounted, ref } from 'vue'

const TARGET = Date.parse('2026-10-17T10:00:00+07:00')

function pad(n) {
  return n < 10 ? `0${n}` : String(n)
}

function readGuestName() {
  try {
    const params = new URLSearchParams(window.location.search)
    let name = params.get('to') || params.get('kepada')
    if (!name && window.location.hash.includes('to=')) {
      name = decodeURIComponent(window.location.hash.split('to=')[1].split('&')[0])
    }
    if (name) return name.replace(/\+/g, ' ')
  } catch {
    /* keep the fallback name */
  }
  return 'Nama Tamu'
}

export function useGuestName() {
  const guest = ref('Nama Tamu')
  onMounted(() => {
    guest.value = readGuestName()
  })
  return guest
}

export function useCountdown() {
  const units = ref([
    { v: '0', l: 'Hari' },
    { v: '00', l: 'Jam' },
    { v: '00', l: 'Menit' },
    { v: '00', l: 'Detik' },
  ])

  let timer

  function tick() {
    const diff = Math.max(0, TARGET - Date.now())
    const days = Math.floor(diff / 86400000)
    const hours = Math.floor(diff / 3600000) % 24
    const minutes = Math.floor(diff / 60000) % 60
    const seconds = Math.floor(diff / 1000) % 60
    units.value = [
      { v: String(days), l: 'Hari' },
      { v: pad(hours), l: 'Jam' },
      { v: pad(minutes), l: 'Menit' },
      { v: pad(seconds), l: 'Detik' },
    ]
  }

  onMounted(() => {
    tick()
    timer = setInterval(tick, 1000)
  })

  onUnmounted(() => {
    clearInterval(timer)
  })

  return units
}
