import React from 'react';
import BecomeNanny from '../../components/BecomeNanny/becomeNanny';
import BillingHistory from '../../components/BillingHistory/billingHistory';
import CareAvailable from '../../components/CareAvailable/careAvailable';
import Footer from '../../components/Footer/footer';
import Framework from '../../components/Framework/framework';

//components
import Header from '../../components/Header/header';
import NannyDailyDiary from '../../components/NannyDailyDiary/nannyDailyDiary';
import NewsLetterShare from '../../components/NewsLetterShare/newsLetterShare';
import ShareNannyCosts from '../../components/ShareNannyCosts/shareNannyCosts';
import SharePayments from '../../components/SharePayments/sharePayments';

//styles
import styles from './home.module.scss';



const Home: React.FC = () => {
  return (
    <div>
      <div className={styles.header}>
        <Header />
        <CareAvailable />
      </div>
      <div className={styles.container}>    
       <ShareNannyCosts />
       <NewsLetterShare />
       <SharePayments />
       <Framework />
       <BillingHistory />
       <NannyDailyDiary />
       <BecomeNanny />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home;