import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Recipes',
    description: (
      <>
        Keep all of your recipes <a href="/docs/tutorials/labels/create">organized by label</a>.<br />
        <a href="/docs/tutorials/recipes/my-recipes#search">Filter and search</a> for your recipes.<br />
        <a href="/docs/tutorials/recipes/recipe-details#share">Share</a> your recipes with friends.
      </>
    ),
  },
  {
    title: 'Shopping Lists',
    description: (
      <>
        <a href="/docs/tutorials/shopping-lists/create">Create</a> shopping lists to keep track of your ingredients.<br />
        <a href="/docs/tutorials/shopping-lists/create">Share</a> your shopping lists with your family.<br />
        Smart grouping puts similar ingredients <a href="/docs/tutorials/shopping-lists/usage#group-similar-items">together</a>, and groups items into <a href="/docs/tutorials/shopping-lists/usage#group-items-by-category">categories</a>.
      </>
    ),
  },
  {
    title: 'Meal Plans',
    description: (
      <>
        Create meal plans to keep track of what you'll be cooking when.
        Share your meal plans with your family.
        Drag and drop items and copy plans between days/weeks.
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
