import React from 'react';

import styles from './App.module.css';

function App() {
  return (
    <main className={styles.app}>
      <div className={styles.card}>
        <div className={styles.content}>
          <h1>
            Get <span className={styles.accent}>insights</span> that help your business grow.
          </h1>

          <h2>
            Discover the benefits of data analytics and make
            better decisions regarding revenue, customer
            experience, and overall efficiency.
          </h2>
          <div className={styles.highlights}>
            <div>
              <h3>10k+</h3>
              <p>companies</p>
            </div>
            <div>
              <h3>314</h3>
              <p>templates</p>
            </div>
            <div>
              <h3>12M+</h3>
              <p>queries</p>
            </div>
          </div>
        </div>
        <div className={styles.image} />
      </div>
    </main>
  );
}

export default App;
