import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <Card>
      <div className='about' >
        <h2>About</h2>
        <p>This is a simple feedback app using a javascript Library.</p>
        <p>Version 1.0.0</p>

        <p>
          <Link to="/">Back to Home.</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage