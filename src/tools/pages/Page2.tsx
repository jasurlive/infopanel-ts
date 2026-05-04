import { FaWifi, FaLock, FaCheckCircle } from 'react-icons/fa';
import '../css/Page2.css';

function Page2() {
  const steps = [
    { icon: FaWifi, title: 'Open WiFi', desc: 'Search for "TrainWiFi_Free"' },
    { icon: FaLock, title: 'No Password', desc: 'Connect directly, no auth needed' },
    { icon: FaCheckCircle, title: 'Enjoy', desc: 'High-speed internet during journey' },
  ];

  return (
    <div className="page-container page2">
      <h2 className="page-title">Connect to WiFi</h2>
      <div className="steps-container">
        {steps.map((step, idx) => (
          <div key={idx} className="step-item">
            <div className="step-number">{idx + 1}</div>
            <step.icon className="step-icon" />
            <div className="step-text">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="wifi-info">
        <p><strong>Network:</strong> TrainWiFi_Free</p>
        <p><strong>Speed:</strong> Up to 50 Mbps</p>
        <p><strong>Duration:</strong> Full journey coverage</p>
      </div>
    </div>
  );
}

export default Page2;
