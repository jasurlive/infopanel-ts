import { useState } from 'react';
import { FaInfo, FaWifi, FaPlay } from 'react-icons/fa';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import '../css/MainPage.css';

function MainPage() {
  const [activePage, setActivePage] = useState(0);

  const pages = [
    { id: 0, label: 'Services', icon: FaInfo, component: Page1 },
    { id: 1, label: 'WiFi Connect', icon: FaWifi, component: Page2 },
    { id: 2, label: 'Media', icon: FaPlay, component: Page3 },
  ];

  const ActiveComponent = pages[activePage].component;

  return (
    <div className="main-page">
      <nav className="nav-tabs">
        {pages.map((page) => (
          <button
            key={page.id}
            className={`nav-button ${activePage === page.id ? 'active' : ''}`}
            onClick={() => setActivePage(page.id)}
          >
            <page.icon className="nav-icon" />
            <span>{page.label}</span>
          </button>
        ))}
      </nav>

      <div className="page-content">
        <ActiveComponent />
      </div>
    </div>
  );
}

export default MainPage;
