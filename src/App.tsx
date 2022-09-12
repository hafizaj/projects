import './css/App.css';

import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import HomepageLayout from './pages/HomepageLayout';
import Projects from './pages/Projects';
import AnimationPage from './pages/AnimationPage';
import Homepage from './pages/Homepage';
import AboutMe from './pages/AboutMe';
import Posts from './pages/Posts';

const App = () => {
  let element = useRoutes([
    // A route object has the same properties as a <Route>
    // element. The `children` is just an array of child routes.
    {
      path: '/',
      element: <HomepageLayout />,
      children: [
        { path: '/home', element: <Homepage /> },
        { path: '/projects', element: <Projects /> },
        { path: '/animation', element: <AnimationPage /> },
        { path: '/gallery', element: <Posts /> },
        { path: '/about-me', element: <AboutMe /> },
      ]
    }
  ]);

  return element;
}

const AppWrapper = () => {
  return (
    <Router basename='/me'>
        <App/>
    </Router>
  )
}
export default AppWrapper;
