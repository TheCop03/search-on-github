import React from 'react';

import Project from './Project/Project';
import Aux from '../../containers/Auxiliary/Auxiliary';

const projects = (props) => {
  const projectList = props.projects.map((project) => (
    <Project
      key={project.id}
      name={project.name}
      url={project.html_url}
      stargazers={project.stargazers_count}
      watchers={project.watchers_count}
    />
  ));

  return (
    <Aux>
      {projectList}
    </Aux>
  );
};

export default projects;
