import React from 'react'
import '../styles/newsletter.css'
function NewsLetter() {
  return (
    <div className='newsletter-container'>
        <h1><b>Any Suggestion</b></h1>
        <p>If you get some problems about website, type us.</p>
        <div className='newsletter-footer'>
            <input placeholder='Your E-mail..' type="text" />
            <button><i className="fa-solid fa-share"></i></button>
        </div>
    </div>
  )
}

export default NewsLetter