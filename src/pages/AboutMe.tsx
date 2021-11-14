import React, {useState} from 'react';
import {Image, Grid, Header} from 'semantic-ui-react';
import arrayGenerator from '../util/helper';

const AboutMe = () => {

    const RES_FILE_SOURCE:String = "portfolio/res/img";
    const NUM_ELEM:number = 9;
    const filesArray = arrayGenerator(NUM_ELEM, RES_FILE_SOURCE);
    console.log(filesArray);
    return (
        <div className="portfolio">
            <Grid columns={3}>
                {filesArray &&
                filesArray.map((elem,i)=> (
                <Grid.Column key={i} style={{ marginBottom: 20 }}>
                    <Image src={elem} />
                </Grid.Column>
                ))}
            </Grid>
        </div>
    )
};

export default AboutMe;