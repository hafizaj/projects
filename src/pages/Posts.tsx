import styled from 'styled-components'


import {Image, Grid, Popup} from 'semantic-ui-react';
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
    const basePath = './res/img/'
    return (
        <div className="posts">
            <Grid columns={3}>
                {postNames &&
                postNames.map((elem,i)=> (

                <Popup
                    trigger={
                        <Grid.Column key={i} style={{ marginBottom: 20 }} mobile={16} tablet={8} computer={4}>
                            <PreviewDiv>
                                <PreviewImage src={basePath.concat(elem.image)} />
                            </PreviewDiv>
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
        </div>
    )
};

export default Posts;