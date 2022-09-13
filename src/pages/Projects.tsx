import {Grid} from 'semantic-ui-react';
import  Helmet  from 'react-helmet';

import {projectNames} from '../util/data';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    return (
        <>
            <Helmet>
                <title>Hafizuddin Jaafar | Projects</title>
            </Helmet>
            <div className='project-page'>
                <Grid divided='vertically'>
                    {projectNames &&
                    ProjectCard(projectNames)}
                </Grid>
            </div>
        </>
    )
};

export default Projects;