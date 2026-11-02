import { marquee } from '../lib/content'

// list is doubled so the scroll loops without a gap
export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {[...marquee, ...marquee].map((text, i) => (
          <span key={i} className="marquee-item">{text}</span>
        ))}
      </div>
    </div>
  )
}
