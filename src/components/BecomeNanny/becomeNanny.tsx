import React from 'react';

//styles
import styles from './becomeNanny.module.scss';

//svg 
import Calendar from '../../assets/Button.svg' 
import { Link } from 'react-router-dom';

const BecomeNanny: React.FC = () => {
  return (
    <div className={styles.becomeNanny}>
      <h2>Become a nanny share host</h2>
      <p>Takes less than 5 minutes to get started</p>
      <button type="button">
        <img src={Calendar} alt="Calendar" />
      </button>
      <Link to="#">Or browse local nanny-shares</Link>
    </div>
  );
}

export default BecomeNanny;