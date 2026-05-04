import { FaPlay, FaVideo, FaHeadphones } from 'react-icons/fa';
import '../css/Page3.css';

function Page3() {
  const mediaItems = [
    { icon: FaVideo, title: 'Route Guide', duration: '12 min', desc: 'Journey highlights' },
    { icon: FaPlay, title: 'Safety Info', duration: '5 min', desc: 'Emergency procedures' },
    { icon: FaHeadphones, title: 'Music', duration: 'On-demand', desc: 'Curated playlists' },
  ];

  return (
    <div className="page-container page3">
      <h2 className="page-title">Media & Entertainment</h2>
      <div className="media-grid">
        {mediaItems.map((item, idx) => (
          <div key={idx} className="media-card">
            <div className="media-icon-wrapper">
              <item.icon className="media-icon" />
            </div>
            <h3>{item.title}</h3>
            <p className="duration">{item.duration}</p>
            <p className="desc">{item.desc}</p>
            <button className="play-btn">Play</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page3;
