import React from 'react';
import { Link } from 'react-router-dom';

//styles
import styles from './shareNannyCosts.module.scss';

//svgs
import ImageSection from '../../assets/ImageSection1.svg';

const ShareNannyCosts: React.FC = () => {
  return (
    <div className={styles.shareNannyCosts}>
      <div className={styles.shareNannyCosts_text}>
        <h2>Share your home, nanny and costs</h2>
        <p>You have a fantastic home, a fantastic nanny and wouldn’t cutting your costs in half be, well, fantastic?! If only it was easy to connect with other parents to share your costs? Well now it is, with Hapu. <Link to="#">Hapu means tribe</Link> and it’s our foundational 3 tribal principles that empowers you to create and manage your own tribe. A tribe that together has the power to create new affordable solutions in childcare that work for you and your community.</p>
        <Link to="#">Ready to get started?</Link>
      </div>
      <div className={styles.shareNannyCosts_image}>
        <img src={ImageSection} alt="Section 1" />
      </div>
    </div>
  );
}

export default ShareNannyCosts;