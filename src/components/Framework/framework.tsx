import React from 'react';
import { Link } from 'react-router-dom';

import styles from './framework.module.scss';

const Framework: React.FC = () => {
  return (
    <div className={styles.framework}>
    <h2>A framework built for the long term</h2>
    <p>Childcare is for the long term. And you need a framework you can count on that gives your share long term viability and success. That’s why we’ve defined Hapu around our three tribal principles; clearly defined process, transparency over money and equality of participation.</p>
    <Link to='#'>Read how Hapu’s tribal background defines our app </Link>
  </div>
  );
}

export default Framework;