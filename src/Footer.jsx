import React from 'react'

export default function FooterComponent() {
  return (
    <div class="bg-white text-dark p-3 d-flex justify-content-around">
        <div>
           <ul>
            <li>Hollywood</li>
            <li>Bollywood </li>
            <li>Tollywood</li>
            <li>Others</li>
           </ul>
        </div>
        <div>
            <footer className="movie-footer">
      <div className="footer-content">
        <div className="footer-links">
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>
         <div className="footer-bottom">
        <p>&copy; 2025 MovieSearchApp. All rights reserved.</p>
      </div>
      </div>
    </footer>
 
         </div><div>
            </div>
          </div>
  
  )
}
