import React from 'react';
import {  AiFillInstagram, } from 'react-icons/ai';
import { TiSocialFacebook } from 'react-icons/ti';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 GoCheapStore Tous droits réservés.</p>
      <p className="icons">
        
        <a href="https://www.instagram.com/gocheapstore1/">
        <AiFillInstagram />
        </a>
     
        <a href="https://www.facebook.com/profile.php?id=100089424499529">
        <TiSocialFacebook />
        </a>
        
      </p>
    </div>
  )
}

export default Footer