// everything shown on the panel. edit text here, no other file needs to change.
import type { IconType } from 'react-icons'
import { FaUtensils, FaBolt, FaWifi } from 'react-icons/fa'
import { FaPersonWalkingLuggage } from 'react-icons/fa6'
import { MdOutlineBabyChangingStation } from 'react-icons/md'

export const train = {
  name: 'Afrosiyob 765',
  car: 'Vagon 5',
  next: 'Keyingi: Samarqand',
}

export const SLIDE_SECONDS = 8

// videos live in public/video/ (not in git, copy them by hand)
export type Slide =
  | { title: string; icon: IconType; text: string }
  | { title: string; video: string }

export const slides: Slide[] = [
  { title: 'Poyezd xizmatlari', icon: FaUtensils, text: 'Issiq ovqat va ichimliklar vagon-restoranda mavjud' },
  { title: 'Yuk va buyumlaringizni unutmang', icon: FaPersonWalkingLuggage, text: 'Poyezdni tark etayotganingizda buyumlaringizni unutmang!' },
  { title: 'Quvvat manbalari', icon: FaBolt, text: 'Barcha o‘rindiqlarda USB va elektr rozetkalar bor' },
  { title: 'WiFi ulanish', icon: FaWifi, text: '"TrainWiFi_Free" tarmog‘iga parolsiz ulaning' },
  { title: 'Ona-bola xonasi', icon: MdOutlineBabyChangingStation, text: 'Ona-bola xonasidan foydalanishingiz mumkin' },
  { title: 'Samarqandga xush kelibsiz', video: '/video/samarkand.mp4' },
  { title: 'Buxoroga xush kelibsiz', video: '/video/bukhara.mp4' },
  { title: 'Toshkentga xush kelibsiz', video: '/video/tashkent.mp4' },
]

export const marquee = [
  'Keyingi bekat: Samarqand',
  'Poyezdda WiFi mavjud',
  'Restoran 22:00 gacha ochiq',
  'Tinch zonalar 3–6 vagonlarda',
]
