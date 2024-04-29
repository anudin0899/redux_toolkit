import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy load the Home component
const Home = lazy(() => import('../pages/HomePage/Home'));

const Routing = () => {
    return (
        <Router>
            {/* Wrap the Routes in a Suspense component to handle lazy loading */}
            <Suspense fallback={<div className='flex'>Loading...</div>}>
                <Routes>
                    {/* Define routes */}
                    <Route path='/' element={<Home />} />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default Routing;
