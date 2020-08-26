import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

function UserProfile({ username }) {
  return (
    <div className={clsx(styles.userProfile)}>
      <div className="card-demo">
        <div className="card">
          <div className="card__header">
            <div className="avatar avatar--vertical">
              <img
                className="avatar__photo avatar__photo--xl"
                alt="avatar"
                src="https://avatars0.githubusercontent.com/u/6185205?s=460&u=0fa505379a5a634d562ca448c49868d98b17d8f2&v=4"
              />
              <div className="avatar__intro">
                <h4 className="avatar__name">{username}</h4>
                <small className="avatar__subtitle">
                  I am programmer, OSS lover.
                </small>
              </div>
            </div>
          </div>
          <div className="card__body">
            <ul className="pills">
              <li className="pills__item">#android</li>
              <li className="pills__item">#kotlin</li>
              <li className="pills__item">#flutter</li>
            </ul>
          </div>
          <div className="card__footer">
            <div className="button-group button-group--block">
              <a href="https://github.com/quangson91" rel="noreferrer" target="_blank" className="button button--secondary">Github</a>
              <a href="https://twitter.com/quangson91" rel="noreferrer" target="_blank" className="button button--secondary">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="I am programmer"
    >
      <main>
        <div className={clsx('container uos--match-parent', styles.userProfile)}>
          <div className="row uos--match-parent">
            <div className="col col--4 col--offset-4">
              <UserProfile username={siteConfig.title} />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
};
export default Home;
