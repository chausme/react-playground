import React from 'react';

export function InfoWrap({ children }) {
    return (
        <article
            className="info"
            style={{
                backgroundColor: 'pink',
                color: '#333',
            }}
        >
            {children}
        </article>
    );
}
