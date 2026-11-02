import { FaClock, FaMapMarkerAlt, FaTrain } from 'react-icons/fa'
import { TbTrainFilled } from 'react-icons/tb'
import { train } from '../lib/content'
import { useClock } from '../hooks/LOCAL/useClock'

export default function Header() {
  const time = useClock()

  const items = [
    { icon: FaTrain, value: train.name },
    { icon: TbTrainFilled, value: train.car },
    { icon: FaClock, value: time },
    { icon: FaMapMarkerAlt, value: train.next },
  ]

  return (
    <header className="header">
      {items.map(({ icon: Icon, value }, i) => (
        <div key={i} className="header-item">
          <Icon className="header-icon" />
          <span className="header-value">{value}</span>
        </div>
      ))}
    </header>
  )
}
