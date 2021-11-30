import React, { useState } from 'react';
import { api } from '../../services/api';
import { errorForm, successForm, validateEmail, validateName } from '../../utils/validateForm';

import styles from './newsLetterShare.module.scss';
import { IForm } from './types';

const NewsLetterShare: React.FC = () => {
  const [formValues, setFormValues] = useState<IForm>({} as IForm);

  const handleSubmitForm = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    if(validateEmail(formValues.email) && validateName(formValues.name)) {
      try {
        const res = await api.post('challenge-newsletter/', formValues);
        if(res.status === 200) {
          successForm();
          setFormValues({
            name: '',
            email: '',
          })
        }
      } catch(err) {
        errorForm();
      }
    }
  }
  return (
    <div className={styles.newsLetterShare}>
      <h3>Are you a parent without a nanny and looking to share?</h3>
      <p>Leave us your name and email and we’ll update you as soon as a share becomes available in your area!</p>
      <form className={styles.newsLetterShare_form} onSubmit={handleSubmitForm}>
        <input 
          type="text" 
          placeholder="Your name" 
          onChange={(e) => setFormValues({
          ...formValues,
          name: e.target.value
        })}/>
        <input 
          type="text" 
          placeholder="Your email" 
          onChange={(e) => setFormValues({
            ...formValues,
            email: e.target.value
          })}
          />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default NewsLetterShare;