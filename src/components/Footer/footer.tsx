import React from 'react';

//styles
import styles from './footer.module.scss';

//svg
import LogoFooter from '../../assets/LogoFooter.svg';
import Facebook from '../../assets/Facebook.svg';
import Twitter from '../../assets/Twitter.svg';
import Instagram from '../../assets/Instagram.svg';

import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_navFooter}>
        <div className={styles.footer_logo}>
          <img src={LogoFooter} alt="Logo" />
        </div>
        <ul className={styles.footer_menu}>
          <li>Share Your Nanny</li>
          <li> Our Story</li>
          <li> Blog</li>
          <li> Terms & Privacy</li>
        </ul>
        <ul className={styles.footer_social}>
          <li><Link to="#"><img src={Facebook} alt="Facebook" /></Link></li>
          <li><Link to="#"><img src={Twitter} alt="Twitter" /></Link></li>
          <li><Link to="#"><img src={Instagram} alt="Instagram"/></Link></li>
        </ul>
        </div> 
      <p>Copyright © 2017 Hapu PTY Limited All rights reserved</p>
    </footer>
  );
}

export default Footer;