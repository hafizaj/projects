import {Image, Grid, Popup} from 'semantic-ui-react';
import styled from 'styled-components'
import arrayGenerator from '../util/helper';
import { postNames } from '../util/data';

const PreviewImage = styled(Image)`
    /* &:hover {
        opacity: 0.8
    } */

    height: auto;
`
const PreviewDiv = styled.div`
    height: 100%;
    flex: none;
    ${PreviewImage}:hover & {
        opacity: 0.8
    }
`

const style = {
    borderRadius: 0,
    opacity: 1,
    padding: '1em',
  }

const Posts = () => {
    
    const RES_FILE_SOURCE:String = "res/img";
    const NUM_ELEM:number = 9;
    const filesArray = arrayGenerator(NUM_ELEM, RES_FILE_SOURCE);
    console.log(filesArray);
    return (
        <div className="posts">
            <Grid columns={3}>
                {filesArray &&
                filesArray.map((elem,i)=> (

                <Popup
                trigger={
                    <Grid.Column key={i} style={{ marginBottom: 20 }}>
                        {/* < PreviewImage src={elem} size="massive"/> */}
                        <PreviewDiv>
                            <PreviewImage src={elem} />
                        </PreviewDiv>
                    </Grid.Column>
                }
                position="bottom center"
                inverted
                style={style}
                >
                <Popup.Header>{postNames[i]}</Popup.Header>
            </Popup>
                ))}
            </Grid>
        </div>
    )
};

export default Posts;