import { FaClock, FaMapPin, FaTrain } from 'react-icons/fa';
import '../css/Header.css';

interface HeaderProps {
  routeNumber?: string;
  carNumber?: string;
  nextStation?: string;
}

function Header({ 
  routeNumber = "ICE 207", 
  carNumber = "Car 5",
  nextStation = "Berlin Hauptbahnhof"
}: HeaderProps) {
  const currentTime = new Date().toLocaleTimeString('de-DE', { 
    hour: '2-digit', 
    minute: '2-digit' 
  });

  return (
    <header className="header">
      <div className="header-row">
        <div className="header-item">
          <FaTrain className="header-icon" />
          <span className="header-label">Route</span>
          <span className="header-value">{routeNumber}</span>
        </div>
        <div className="header-item">
          <span className="header-label">Car</span>
          <span className="header-value">{carNumber}</span>
        </div>
        <div className="header-item">
          <FaClock className="header-icon" />
          <span className="header-value time">{currentTime}</span>
        </div>
        <div className="header-item">
          <FaMapPin className="header-icon" />
          <span className="header-label">Next</span>
          <span className="header-value">{nextStation}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
