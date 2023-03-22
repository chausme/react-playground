import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { About } from './pages/about';

const root = createRoot(document.getElementById('app'));
const about = <About />;

root.render(
    <StrictMode>
        <>{about}</>
    </StrictMode>
);
