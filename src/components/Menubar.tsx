import React , {useState} from 'react';
import {Menu, Container, Image} from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';

const Menubar = () => {
    let location = useLocation();
    const src:String = 'portfolio/res/img/logo.png';
    const [activeItem, setActiveItem] = useState(location.pathname);
    return (
        <>
            <Menu inverted fixed="top">
                <Container>
                <Menu.Item as={Link} to="/" 
                active={activeItem === '/'} 
                header 
                onClick={() => setActiveItem('/')}>
                    <Image size="mini" src={src} style={{marginRight:'1.5em'}} />
                    Home
                </Menu.Item>

                <Menu.Item as={Link} to="/about-me" 
                active={activeItem === '/about-me'} 
                header 
                onClick={() => setActiveItem('/about-me')}>
                    About Me
                </Menu.Item>

                </Container>
                
                <Menu.Item
                    name='projects'
                    active={activeItem === '/projects'}
                    as={Link}
                    to='/projects'
                    onClick={() => setActiveItem('/projects')}                
                />
                <Menu.Menu position='right'>
                    <Menu.Item
                        name='Animation'
                        active={activeItem === '/animation'}
                        as={Link}
                        to='/animation'
                        onClick={() => setActiveItem('/animation')}
                    />
                </Menu.Menu>
            </Menu>
        </>
    )
};

export default Menubar