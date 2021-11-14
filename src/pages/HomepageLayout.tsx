import React, {useState} from 'react';
import {Segment, Header, Button, Icon} from 'semantic-ui-react';
import {Link, Outlet} from 'react-router-dom';
import Menubar from '../components/Menubar';
const HomepageLayout = () => {
    return (
        <div>
            <Menubar />
            <Outlet />
        </div>
    )
};

export default HomepageLayout;