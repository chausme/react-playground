import React from 'react';

export function InfoWrap({ children }) {
    return (
        <article
            class="info"
            style={{
                backgroundColor: 'pink',
                color: '#333',
            }}
        >
            {children}
        </article>
    );
}
