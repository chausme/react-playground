import React from 'react';

export function P({
    content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In pariatur ad earum perspiciatis temporibus dolorem? Ad, aspernatur! Ad, minima nostrum?',
}) {
    return (
        <article
            className="paragraph"
            style={{
                backgroundColor: 'cyan',
                color: '#666',
            }}
        >
            {content}
        </article>
    );
}
