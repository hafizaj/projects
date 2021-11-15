import React , {useState} from 'react';
import {Menu, Segment, Image, Header} from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';

const Menubar = () => {
    let location = useLocation();
    const [activeItem, setActiveItem] = useState(location.pathname);
    return (
        <div className='menubar'>
            <Menu inverted pointing secondary size="massive" color="black" style={{fontFamily: "Monument Extended, sans-serif",
                fontWeight:"normal"}}>
                <Menu.Item
                    name="header"
                    children={
                        <>
                            <Header as="h1" inverted style={{margin:0,
                            fontFamily: 'Monument Extended, sans-serif'}}>
                                    HAFIZUDDIN JAAFAR
                                    <Header.Subheader as={Link}
                                    to="/about-me">
                                        Webdev | Data Science | Photography
                                    </Header.Subheader>
                            </Header>
                            
                        </>
                    }
                />
                <Menu.Menu position="right">
                    <Menu.Item
                        name='Gallery'
                        active={activeItem === 'gallery'}
                        onClick={() => setActiveItem('/gallery')}
                        as={Link}
                        to="/gallery"
                    />
                    <Menu.Item
                        name='Projects'
                        active={activeItem === 'projects'}
                        onClick={() => setActiveItem('/projects')}
                        as={Link}
                        to="/projects"
                    />
                    <Menu.Item
                        name='Animation'
                        active={activeItem === 'animation'}
                        onClick={() => setActiveItem('/animation')}
                        as={Link}
                        to="/animation"
                    />
                </Menu.Menu>
                
            </Menu>
        </div>
    )
};

export default Menubar