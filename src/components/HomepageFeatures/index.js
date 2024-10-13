import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Recipes',
    description: (
      <>
        <a href="/docs/tutorials/recipes/my-recipes">Managing Your Recipes</a><br />
        <a href="/docs/tutorials/labels/create">Labelling and Categorization</a><br />
        <a href="/docs/tutorials/people/sharing">Sharing and People</a>
      </>
    ),
  },
  {
    title: 'Shopping Lists',
    description: (
      <>
        <a href="/docs/tutorials/shopping-lists/create">Creating Shopping Lists</a><br />
        <a href="/docs/tutorials/shopping-lists/usage">Usage and Options</a>
        <a href="/docs/tutorials/shopping-lists/sharing">Sharing Shopping Lists</a>
      </>
    ),
  },
  {
    title: 'Meal Plans',
    description: (
      <>
        <a href="/docs/tutorials/meal-plans/create">Creating Meal Plans</a><br />
        <a href="/docs/tutorials/meal-plans/usage">Usage and Options</a>
        <a href="/docs/tutorials/meal-plans/sharing">Sharing Meal Plans</a>
      </>
    ),
  },
  {
    title: 'People and Profile',
    description: (
      <>
        <a href="/docs/tutorials/people/">Other People</a><br />
        <a href="/docs/tutorials/people/your-profile">Your Profile</a>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
