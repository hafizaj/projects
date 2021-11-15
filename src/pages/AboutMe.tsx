import React, {useState} from 'react';
import {Image, Grid, Header} from 'semantic-ui-react';
import Helmet from 'react-helmet';

import arrayGenerator from '../util/helper';
import { IMAGE_SOURCE } from '../util/data';

const AboutMe = () => {

    const RES_FILE_SOURCE:String = IMAGE_SOURCE;
    const NUM_ELEM:number = 9;
    const filesArray = arrayGenerator(NUM_ELEM, RES_FILE_SOURCE);
    console.log(filesArray);
    return (
        <>
        <Helmet>
            <title>Hafizuddin Jaafar | About Me</title>
        </Helmet>
        <div className="about-me">
            <Grid columns={2}>
                <Grid.Column>
                    <Image src="res/img/10.png" />
                </Grid.Column>
                <Grid.Column>
                    <Image src="res/img/10.png" />
                </Grid.Column>
            </Grid>
        </div>
        </>
    )
};

export default AboutMe;