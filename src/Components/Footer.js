import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>

        <div className='about'>
            <h4 className='footersubtitle'>About</h4>
            <ul>
                <li>Services</li>
                <li>Our Shop</li>
                <li>Job Oppurtunities</li>
                <li>Calendar Of Event</li>
                <li>Location</li>
            </ul>
        </div>
        <div className='additional'>
        <h4 className='footersubtitle'>additional Links</h4>
            <ul>
                <li>About us</li>
                <li>Terms and conditions</li>
                <li>privacy policy</li>
                <li>news</li>
                <li>contact us</li>
            </ul>
        </div>
        <div className='caterogies'>
        <h4 className='footersubtitle'>caterogies</h4>
            <ul>
                <li>Creative</li>
                <li>general</li>
                <li>insigths</li>
                <li>tech</li>
            </ul>
        </div>
        <div className='caterogies'>
        <h4 className='footersubtitle'>Pradeep Kundekar</h4>
            <p className='para1'>
                Making a positive first impression is essential to developing a strong customer relationship. 
            </p>
        </div>
    </div>
  )
}

export default Footer