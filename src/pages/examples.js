import React from 'react';
import ExampleCard from '../components/Cards/examplecard';
import projects from '../projects.json';

class Examples extends React.Component {

    state = {
        projects
    };

  render () {
    return(
        <>
        <div className='container'>
        {this.state.projects.map(info =>(
            <ExampleCard
            key={info.id}
            project={info.project}
            image={info.image}
            alttext={info.alttext}
            details={info.details}
            deploy={info.deploy}
            repo={info.repo}
            tech={info.tech}
             />
        ))}
        </div>
        </>
    )}
}

export default Examples;