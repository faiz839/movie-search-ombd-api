import React from 'react';
import hello from './assets/hello.jpg'
import movie4 from './movie4.jpeg'
import movie5 from './movie5.jpeg'
import movie6 from './movie6.jpg'
export default function Card() {
  return (
    <>
    <div>
      <div className="card-on" style={{ width: '18rem' }}>
        <img src={hello} className="card-img-top" alt="Card image" />
        <div className="card-body">
          <h5 className="card-title">Hello</h5>
          <p className="card-text">
          Title: Hello
Genre: Drama, Romance
Director: Atul Agnihotri
Actors: Sharman Joshi, Amrita Arora
          </p>
          <a href="#" className="btn btn-primary">Movie</a>
        </div>
      </div>

     <div className="card-on" style={{ width: '18rem' }}>
        <img src={movie4} className="card-img-top" alt="Card image" />
        <div className="card-body">
          <h5 className="card-title">Phir hera pheri</h5>
          <p className="card-text">
          Title: Phir Hera Pheri
Genre: Comedy, Crime
Director: Neeraj Vora
Actors: Akshay Kumar, Suniel Shetty, Paresh Rawal
          </p>
          <a href="#" className="btn btn-primary">Movie</a>
        </div>
      </div>

      <div className="card-on" style={{ width: '18rem' }}>
        <img src={movie5} className="card-img-top" alt="Card image" />
        <div className="card-body">
          <h5 className="card-title">Hulk</h5>
          <p className="card-text">
          Title: Hulk
Genre: Action, Sci-Fi
Director: Ang Lee
Actors: Eric Bana, Jennifer Connelly, Sam Elliott
          </p>
          <a href="#" className="btn btn-primary">Movie</a>
        </div>
      </div>

      
      <div className="card-on" style={{ width: '18rem' }}>
        <img src={movie6} className="card-img-top" alt="Card image" />
        <div className="card-body">
          <h5 className="card-title">Lucifer</h5>
          <p className="card-text">
          Title: Lucifer
Genre: Crime, Drama, Fantasy
Director: N/A
Actors: Tom Ellis, Lauren German, Kevin Alejandro
          </p>
          <a href="#" className="btn btn-primary">Movie</a>
        </div>
      </div>
    </div>

    
</>
  );
}






  

