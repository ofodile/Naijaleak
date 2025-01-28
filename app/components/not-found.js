import Link from 'next/link'
import '../css/NotFound.css'

 
export default function NotFound() {
  return (
    <div className="NotFound">
      <h2 className="NotFound-heading">404 - Page Not Found</h2>
      <p className="NotFound-text">Sorry, the page you are looking for does not exist.</p>
      <Link className="NotFound-btn" href="/">Go to Home</Link>
    </div>
  )
}