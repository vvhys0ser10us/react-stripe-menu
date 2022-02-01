import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const { closeSubMenu } = useGlobalContext()
  return (
    <section className="hero" onMouseOver={closeSubMenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
            quibusdam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti dicta quidem molestiae pariatur distinctio. Nulla?
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="img" />
        </article>
      </div>
    </section>
  )
}

export default Hero
