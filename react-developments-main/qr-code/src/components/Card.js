import React from 'react'

function Card() {
  return (
    <section className="card">
      <img src="images/image-qr-code.png" alt="qr-code" class="card__image" />
      <div className="card__media">
        <h1 className="card__media-heading">Improve your front-end skills by building projects</h1>
        <p className="card__media-text">
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </div>
    </section>
  )
}

export default Card