import React from 'react'

const Map = () => {
  return (
    <div className='map'>
        <h1 className='heading1'>GET FULL ACCESS TO PERSONAL TRAINING AND FREE WEIGHTS.</h1>
        <p className='para1'>Push your personal limits and build new skills.</p>
        <button className='btn-primary'>Get Started</button>
        <div className='contact'>
        <div className='left'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423283.4355563606!2d-118.6919209536906!3d34.02073049661072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1652938519312!5m2!1sen!2sin"allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='right'>
            <form>
                <input name="fullname" placeholder="Full Name" required></input>
                <input name="email" placeholder="Email" required></input>
                <input name="phno" placeholder="Phone Number" required></input>
                <textarea placeholder='Message' rows="5"/>
                <button className='btn-primary'>Send</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Map