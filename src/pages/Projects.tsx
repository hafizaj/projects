import {Grid, Segment, Popup} from 'semantic-ui-react';
import  Helmet  from 'react-helmet';

import {projectNames} from '../util/data';
import SingleProject from '../components/SingleProject';

const style = {
    borderRadius: 0,
    opacity: 1,
    padding: '1em',
  }


const Projects = () => {
    return (
        <>
            <Helmet>
                <title>Hafizuddin Jaafar | Projects</title>
            </Helmet>
            <div className='project-page'>
            <Segment style={{ padding: '8em 0em' }} vertical>
                    <Grid divided='vertically'>
                        {projectNames &&
                            projectNames.map((elem,i)=> (
                            <Popup
                            trigger={
                                <Grid.Column key={i} mobile={3} tablet={6} computer={12} widescreen={16}>
                                    <SingleProject 
                                    name={elem.name} 
                                    thumbnail={elem.thumbnail}
                                    description={elem.description}
                                    date={elem.date}/>
                                </Grid.Column>
                            }
                            position="bottom center"
                            inverted
                            style={style}
                            >
                            <Popup.Header>{elem.name}</Popup.Header>
                            </Popup>
                        ))}
                    </Grid>
                </Segment>
            </div>
        </>
    )
};

export default Projects;