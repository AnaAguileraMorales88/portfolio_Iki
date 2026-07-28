    import { createBrowserRouter } from 'react-router-dom';

    import About from '../pages/About/About';
    import CaseStudies from '../pages/CaseStudies/CaseStudies';
    import Contact from '../pages/Contact/Contact';
    import CreativeWork from '../pages/CreativeWork/CreativeWork';
    import Home from '../pages/Home/Home';

    export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/case-studies',
        element: <CaseStudies />,
    },
    {
        path: '/creative-work',
        element: <CreativeWork />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/contact',
        element: <Contact />,
    },
    ]);