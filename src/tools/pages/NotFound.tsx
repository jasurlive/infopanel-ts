import { Link } from 'react-router'

export default function NotFound() {
  return (
    <div className="page-container page-center">
      <p className="page-code">404</p>
      <h1 className="page-title">Sahifa topilmadi</h1>
      <Link to="/" className="page-button">Bosh sahifa</Link>
    </div>
  )
}
