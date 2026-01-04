import React from 'react';
import Head from '@docusaurus/Head';
import styles from './styles.module.css';

export default function FAQs({ faqs }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Head>
      <div className={styles.faqContainer}>
        {faqs.map((faq, idx) => (
          <div key={idx} className={styles.faqItem}>
            <h3 className={styles.question}>{faq.question}</h3>
            <div className={styles.answer} dangerouslySetInnerHTML={{ __html: faq.answer }} />
          </div>
        ))}
      </div>
    </>
  );
}
