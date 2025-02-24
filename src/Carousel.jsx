import React from 'react'
import movie1 from './movie1.jpg'
import movie2 from './movie2.jpeg'
import movie3 from './movie3.jpeg'

export default function Carousel() {
  return (
    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={movie1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={movie2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={movie3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}
