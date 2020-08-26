import React from 'react';
import Layout from '@theme/Layout';
import ProjectCard from '@site/src/components/ProjectCard';

const projects = [
  {
    name: <>IntelliJ rest-cli</>,
    screenshotUrl: '/img/restcli_screenshots.png',
    websiteUrl: 'https://quangson91.github.io/intellij_rest_cli/',
    githubUrl: 'https://github.com/quangson91/intellij_rest_cli',
    description: (
      <>
        A missing commandline application for execute Intellij HTTP Client file.
      </>
    ),
  },
];

export default function Projects() {
  return (
    <Layout
      title="Projects"
      description="My side projects"
    >
      <main>
        <div className="container">
          <div className="row margin-top--lg margin-bottom--lg">
            {projects.map((props, index) => (
              <ProjectCard
                key={index}
                className="col col--4 margin-bottom--lg"
                {...props}
              >
                <span>{props.description}</span>
              </ProjectCard>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
