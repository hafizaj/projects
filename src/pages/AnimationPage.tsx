import React from 'react';
import {Grid, Transition, Segment} from 'semantic-ui-react';
import Helmet from 'react-helmet';
import Animation from '../components/Animation';

const AnimationPage = () => {
    // const numElem:number[] = Array.from(Array(2).keys())
    const numElem:number[] = [1,2,3];
    return (
        <>
            <Helmet>
                <title>Hafizuddin Jaafar | Animation</title>
            </Helmet>
            <div className="animation-page">
                <Segment>
                    <Grid columns={3}>
                        { numElem &&
                        numElem.map((elem, i) =>  (
                            <Transition.Group>
                                {numElem &&
                                numElem.map((elem) => (
                                    <Grid.Column key={elem} style={{ marginBottom: 400 }}>
                                        <Animation/>
                                    </Grid.Column>
                                ))}
                            </Transition.Group>
                        ))}
                    </Grid>
                </Segment>
            </div>
        </>
        
    )
};

export default AnimationPage;