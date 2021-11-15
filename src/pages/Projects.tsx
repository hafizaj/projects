import React, {useState} from 'react';
import { Container, Grid } from 'semantic-ui-react';
import  Helmet  from 'react-helmet';

import { Octokit } from '@octokit/core';

import SingleProject from '../components/SingleProject';
const Projects = () => {
    const octokit = new Octokit();
    const projectTest = {
        Name:"Hafiz",
        Description:"Test",
        Date:"11.11.2021",
        Thumbnail:"Thumbs"
    }
    return (
        <>
            <Helmet>
                <title>Hafizuddin Jaafar | Projects</title>
            </Helmet>
            <div className='project-page'>
                <Grid columns={3}>
                    <Grid.Column>
                        <Container>
                            <SingleProject 
                            name = "Webots"
                            description="Project one"
                            date="11.11.2011"
                            thumbnail="123"
                            />
                        </Container>
                    </Grid.Column>
                </Grid>
            </div>
        </>
    )
};

export default Projects;