import React from 'react';

//styles 
import styles from './billingHistory.module.scss';

//svg
import ImageSection from '../../assets/ImageSection4.svg';

const BillingHistory: React.FC = () => {
  return (
    <div className={styles.billingHistory}>
      <img src={ImageSection} alt="Section 4" />
    </div>
  );
}

export default BillingHistory;