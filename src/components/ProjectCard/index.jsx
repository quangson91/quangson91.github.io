import React from 'react';
import PropTypes from 'prop-types';

export default function ProjectCard({
  className,
  name,
  children,
  screenshotUrl,
  websiteUrl,
  githubUrl,
}) {
  return (
    <div className={className}>
      <div className="card">
        <div className="card__image">
          <img
            src={screenshotUrl}
            alt="Screenshot"
            title={name}
          />
        </div>
        <div className="card__body">
          <h4>{name}</h4>
          <small>{children}</small>
        </div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            <a
              href={websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="button button--secondary"
            >
              Website
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="button button--secondary"
            >
              Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

ProjectCard.defaultProps = {
  className: '',
};

ProjectCard.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  screenshotUrl: PropTypes.string.isRequired,
  websiteUrl: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
};
