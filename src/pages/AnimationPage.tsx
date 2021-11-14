import React from 'react';
import Preview from '../components/Preview';
import {Grid, Transition} from 'semantic-ui-react';

const AnimationPage = () => {
    // const numElem:number[] = Array.from(Array(2).keys())
    const numElem:number[] = [1,2,3];
    return (
        <>
            <Grid columns={3}>
                { numElem &&
                numElem.map((elem, i) =>  {
                    <Transition.Group>
                        {numElem &&
                        numElem.map((elem) => (
                            <Grid.Column key={elem} style={{ marginBottom: 20 }}>
                                <Preview/>
                            </Grid.Column>
                        ))}
                    </Transition.Group>
                })}
            </Grid>
        </>
    )
};

export default AnimationPage;