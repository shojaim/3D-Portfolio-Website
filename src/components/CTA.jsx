import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className="cta">
        <p className="cta-text"> Here You Can <br className="sm:block hidden" />
        Begin Your Adventure To Connect </p>
        <Link to="/contact" className="btn">
            Contact
        </Link>
        <Link to='https://www.linkedin.com/in/shojaim' className="btn">
            Linkedin
        </Link>
        <Link to='https://github.com/shojaim' className="btn">
            Github
        </Link>
    </section>
  )
}

export default CTA