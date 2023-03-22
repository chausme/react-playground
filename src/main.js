import React, { Fragment } from 'react';
import { createRoot } from 'react-dom/client';

import { About } from './pages/about';

const root = createRoot(document.getElementById('app'));

root.render(
    <Fragment>
        <About />
    </Fragment>
);
