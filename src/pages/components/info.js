import React from 'react';
import { P } from './p';

export function Info(props) {
    return (
        <article>
            <P {...props}></P>
        </article>
    );
}
