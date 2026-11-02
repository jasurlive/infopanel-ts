import '../css/home.css'
import { slides, SLIDE_SECONDS } from '../lib/content'
import { useRotate } from '../hooks/LOCAL/useRotate'

export default function Home() {
  const slide = slides[useRotate(slides.length, SLIDE_SECONDS)]

  return (
    <div className="home-card">
      <h1 className="home-title">{slide.title}</h1>

      {'video' in slide ? (
        // missing file → hide the player instead of showing a broken box
        <video key={slide.video} className="home-video" src={slide.video} autoPlay muted playsInline onError={(e) => (e.currentTarget.style.display = 'none')} />
      ) : (
        <>
          <slide.icon className="home-icon" />
          <p className="home-text">{slide.text}</p>
        </>
      )}
    </div>
  )
}
