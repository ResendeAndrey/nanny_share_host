import React from 'react';

//styles
import styles from './sharePayments.module.scss';

//svg
import ImageSection from '../../assets/ImageSection3.svg';
import { Link } from 'react-router-dom';

const SharePayments: React.FC = () => {
  return (
    <div className={styles.sharePayments}>
      <div className={styles.sharePayments_image}>
        <img src={ImageSection} alt="Section 1" />
      </div>
      <div className={styles.sharePayments_text}>
        <h2>Shared payments made simple</h2>
        <p>Sometimes it’s hard enough just sharing a restaurant bill. Try sharing that bill week in, week out and you might encounter more than a few snares. But not with Hapu. Simply set your rates and our automated payment system takes care of the rest. You need never talk money or who owes what.</p>
        <Link to="#">Read how Bridget’s share (without Hapu) ended over $15</Link>
      </div>
    </div>
  );
}

export default SharePayments;