import React from 'react';
import Head from '@docusaurus/Head';
import styles from './styles.module.css';

export default function HowToSteps({ title, description, steps, showSteps = false }) {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description: description,
    step: steps.map((step, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: step.name,
      text: step.text,
    })),
  };

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(howToSchema)}
        </script>
      </Head>
      {showSteps && (
        <div className={styles.howToContainer}>
          <h2>{title}</h2>
          <p>{description}</p>
          <ol className={styles.stepsList}>
            {steps.map((step, idx) => (
              <li key={idx} className={styles.stepItem}>
                <strong>{step.name}</strong>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      )}
    </>
  );
}
