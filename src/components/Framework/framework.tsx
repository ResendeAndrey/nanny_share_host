import React from 'react';
import { Link } from 'react-router-dom';

import styles from './framework.module.scss';

const Framework: React.FC = () => {
  return (
    <div className={styles.framework}>
    <h2>A framework built for the long term</h2>
    <p>Leave us your name and email and we’ll update you as soon as a share becomes available in your area!</p>
    <Link to='#'>Read how Hapu’s tribal background defines our app </Link>
  </div>
  );
}

export default Framework;