import {Outlet} from 'react-router-dom';
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