import React from 'react';
import ExampleCard from '../../Example Card';
import projects from '../../projects.json';

class Examples extends React.Component {
    
    state = {
        projects
    };

    render() {
    return (
        <>
           <h1 className="center">Previous Work</h1>
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