import React from 'react';

export function Button({ title, onSmash }) {
    return (
        <>
            <button onClick={onSmash}>{title}</button>
        </>
    );
}
