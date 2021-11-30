import React from 'react';
import { Link } from 'react-router-dom';

//svgs
import logo from '../../assets/Badge.svg';
import PlayButton from '../../assets/PlayButton.svg';
import ImageHeader from '../../assets/ImageHeader.svg';

//styles 
import styles from './header.module.scss'


const Header: React.FC = () => {
  return (
    <div>
      <nav className={styles.header_navbar}>
        <ul className={styles.header_navbar__left}>
           <li><img src={logo} alt="Logo Background" className="logo-background" /></li>
           <li>Create Your Nanny Share</li>
           <li>Browse Shares</li>
           <li>Our Story</li>
        </ul>
        <ul className={styles.header_navbar__right}>
          <li><button type="button"> Become a Nanny Share Host</button></li>
          <li>Sign In</li>
        </ul>
     </nav>
     <div className={styles.header_content}>
       <div  className={styles.header_content__text}>
         <h1>Easily create or join a local nanny share with Hapu</h1>
         <h4>Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.</h4>
        <div className={styles.playButton}>
          <img src={PlayButton} alt="play button" />
          <Link to='#'> See hapu in action (27 seconds)</Link>     
        </div> 
       </div>
       <div className={styles.header_content__actionCard}>
        <img src={ImageHeader} alt="Action Button" />

       </div>
     </div>
    </div>
  );
}

export default Header;