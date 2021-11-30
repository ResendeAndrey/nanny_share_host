import React from 'react';
import { Link } from 'react-router-dom';

//svgs 
import ProfileImage from '../../assets/ProfileImage.svg'

//style
import styles from './careAvailable.module.scss'

const CareAvailable: React.FC = () => {
  return (
    <div className={styles.care_available_text}>
      <img src={ProfileImage} alt="Profile" />
      <p> <Link to="#">Sarah’s day care available now in North Sydney</Link> <span>Wednesday, Thursday, Friday - 7:30 - 5:30</span></p>
    </div>
  )
}

export default CareAvailable;