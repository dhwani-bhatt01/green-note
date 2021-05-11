import React from 'react'
import './Footer'

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-logo">
          <img src="" alt="" />
        </div>
      </div>

      <div className="footer-mid">
        <div className="footer-nav-items">
          <p className="nav-link-heading">PRODUCT</p>
          <ul className="footer-nav-links">
            <li className="footer-link-child">Why Everote</li>
            <li className="footer-link-child">Evernote Basic</li>
            <li className="footer-link-child">Evernote Premium</li>
            <li className="footer-link-child">Evernote Business</li>
            <li className="footer-link-child">Compare Plans</li>
            <li className="footer-link-child">Student Discount</li>
            <li className="footer-link-child">Download App</li>
          </ul>
        </div>

        <div className="footer-nav-items">
          <p className="nav-link-heading">FEATURES</p>
          <ul className="footer-nav-links">
            <li className="footer-link-child">Web Clipper</li>
            <li className="footer-link-child">Templates</li>
            <li className="footer-link-child">Spaces</li>
            <li className="footer-link-child">Integratios</li>
            <li className="footer-link-child">Notes Sync</li>
            <li className="footer-link-child">PDF Doc Search </li>
            <li className="footer-link-child">Search Handwriting</li>
            <li className="footer-link-child">Document Scanning</li>
            <li className="footer-link-child">Notebooks Tags</li>
          </ul>
        </div>
        <div className="footer-nav-items">
          <p className="nav-link-heading">COMMUINTY</p>
          <ul className="footer-nav-links">
            <li className="footer-link-child">Our Community</li>
            <li className="footer-link-child">Certified Consultants</li>
            <li className="footer-link-child">Beta Program</li>
            <li className="footer-link-child">Developers</li>
            <li className="footer-link-child">Events</li>
            <li className="footer-link-child">Forum</li>

          </ul>
        </div>
        <div className="footer-nav-items">
          <p className="nav-link-heading">SUPPORT</p>
          <ul className="footer-nav-links">
            <li className="footer-link-child">Help and Learning</li>
            <li className="footer-link-child">Troubleshooting</li>
            <li className="footer-link-child">Blog</li>
          </ul>
        </div>
        <div className="footer-nav-items">
          <p className="nav-link-heading">
            COMPANY
                        </p>
          <ul className="footer-nav-links">
            <li className="footer-link-child">About Us</li>
            <li className="footer-link-child">Careers</li>
            <li className="footer-link-child">Contact Us</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bt">
          <div className="footer-btl">
            <p className="footer-lang">Choose a language</p>
          </div>
          <div className="footer-btr">ICONS</div>
        </div>
        <div className="footer-bb">
          <div className="footer-copyright">
            <p className="cr">© 2021 Evernote Corporation. All rights reserved.Security Legal Privacy</p>
          </div>
          <div className="footer-bb-ul">
            <ul className='footer-bb-links'>
              <li className="footer-bb-link-child">Security</li>
              <li className="footer-bb-link-child">Legal</li>
              <li className="footer-bb-link-child">Privacy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
