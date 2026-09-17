import { useState, useEffect } from "react"

import samarkand from "./assets/video/samarkand.mp4"
import tashkent from "./assets/video/tashkent.mp4"
import bukhara from "./assets/video/bukhara.mp4"

import {
  FaUtensils,
  FaBolt,
  FaWifi,
  FaClock,
  FaMapMarkerAlt,
  FaTrain,
} from "react-icons/fa"

import { FaPersonWalkingLuggage } from "react-icons/fa6";

import { MdOutlineBabyChangingStation } from "react-icons/md";

import { TbTrainFilled } from "react-icons/tb"
import "./App.css"

export default function App() {
  const [currentPage, setCurrentPage] = useState(0)
  const [time, setTime] = useState("")

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("uz-UZ", {
          hour: "2-digit",
          minute: "2-digit"
        })
      )
    tick()
    const t = setInterval(tick, 1000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const t = setInterval(() => {
      setCurrentPage((p) => (p + 1) % pages.length)
    }, 8000)
    return () => clearInterval(t)
  }, [])

  const pages = [
    {
      type: "info",
      title: "Poyezd xizmatlari",
      icon: FaUtensils,
      text: "Issiq ovqat va ichimliklar vagon-restoranda mavjud"
    },
    {
      type: "info",
      title: "Yuk va buyumlaringizni unutmang",
      icon: FaPersonWalkingLuggage,
      text: "Poyezdni tark etayotganingizda buyumlaringizni unutmang!"
    },
    {
      type: "info",
      title: "Quvvat manbalari",
      icon: FaBolt,
      text: "Barcha o‘rindiqlarda USB va elektr rozetkalar bor"
    },
    {
      type: "info",
      title: "WiFi ulanish",
      icon: FaWifi,
      text: '"TrainWiFi_Free" tarmog‘iga parolsiz ulaning'
    },
    {
      type: "info",
      title: "Ona-bola xonasi",
      icon: MdOutlineBabyChangingStation,
      text: "Ona-bola xonasidan foydalanishingiz mumkin"
    },
    {
      type: "video",
      title: "Samarqandga xush kelibsiz",
      video: samarkand
    },
    {
      type: "video",
      title: "Buxoroga xush kelibsiz",
      video: bukhara
    },
    {
      type: "video",
      title: "Toshkentga xush kelibsiz",
      video: tashkent
    }
  ]

  const marquee = [
    "Keyingi bekat: Samarqand",
    "Poyezdda WiFi mavjud",
    "Restoran 22:00 gacha ochiq",
    "Tinch zonalar 3–6 vagonlarda"
  ]

  const page = pages[currentPage]

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-content">
          <div className="header-item">
            <FaTrain className="header-icon" />
            <div className="header-value">Afrosiyob 765</div>
          </div>

          <div className="header-item">
            <TbTrainFilled className="header-icon" />
            <div className="header-value">Vagon 5</div>
          </div>

          <div className="header-item">
            <FaClock className="header-icon" />
            <div className="header-value">{time}</div>
          </div>

          <div className="header-item">
            <FaMapMarkerAlt className="header-icon" />
            <div className="header-value">Keyingi: Samarqand</div>
          </div>
        </div>
      </header>

      <main className="main-content">

      <div className="single-container">
  <div className="single-card">

    {page.type === "info" && page.icon && (
      <>
        <h1 className="page-title">{page.title}</h1>
        <page.icon className="card-icon" />
        <p>{page.text}</p>
      </>
    )}

{page.type === "video" && (
  <>
    <h1 className="page-title">{page.title}</h1>

    <video
      key={page.video}
      className="video"
      playsInline
      autoPlay
      muted
      preload="metadata"
    >
      <source src={page.video} type="video/mp4" />
    </video>
  </>
)}

  </div>
</div>
      </main>

      <div className="marquee">
        <div className="marquee-track">
          {[...marquee, ...marquee].map((t, i) => (
            <span key={i} className="marquee-item">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}