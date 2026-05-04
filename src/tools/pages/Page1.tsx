import { FaUtensils, FaPhone, FaShoppingCart, FaBriefcase } from 'react-icons/fa';
import '../css/Page1.css';

function Page1() {
  const services = [
    { icon: FaUtensils, title: 'Dining Car', desc: 'Meals & drinks available' },
    { icon: FaPhone, title: 'Power Outlets', desc: 'USB & AC available at seats' },
    { icon: FaShoppingCart, title: 'Shop', desc: 'Books, snacks & souvenirs' },
    { icon: FaBriefcase, title: 'Business Zone', desc: 'Quiet workspace area' },
  ];

  return (
    <div className="page-container page1">
      <h2 className="page-title">Train Services</h2>
      <div className="service-grid">
        {services.map((service, idx) => (
          <div key={idx} className="service-card">
            <service.icon className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page1;
