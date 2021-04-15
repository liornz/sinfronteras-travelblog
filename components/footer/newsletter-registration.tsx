import React from 'react';
import styles from './newsletter-registration.module.scss';

const Newsletter: React.FC = () => {
  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  return (
    <div className={styles.container}>
      <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
      <p>Join our community to receive usufull information and tips</p>
      <form onSubmit={submitHandler}>
        <input type="email" id="email" placeholder="Email Address" />
        <button>JOIN</button>
      </form>
    </div>
  );
};

export default Newsletter;
