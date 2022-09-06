import React from 'react';
import {Image, Grid, Container, Header, Icon} from 'semantic-ui-react';
import Helmet from 'react-helmet';

const AboutMe = () => {
    return (
        <>
        <Helmet>
            <title>Hafizuddin Jaafar | About Me</title>
        </Helmet>
        <div className="about-me">
            <Grid columns={2}>
                <Grid.Column>
                    <Image src="res/img/me.png" />
                </Grid.Column>
                <Grid.Column>
                <Container text>
                    <Header as='h1'>
                        <Icon name='address card' color='red' />
                        About Me
                    </Header>
                        <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                        arcu.
                        </p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                        Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
                        dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                        Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
                        viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                        Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                        </p>
                    </Container>
                </Grid.Column>
            </Grid>
        </div>
        </>
    )
};

export default AboutMe;