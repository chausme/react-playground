import React from 'react';

export function Profile({ image, wrap, display, alt, votesCount }) {
    if (display === false) {
        return null;
    }
    const imageEl = <img src={image} alt={alt && `Lorem and ${alt}`} />;
    return (
        <>
            {wrap ? <span className="image-wrap">{imageEl}</span> : imageEl}
            {votesCount > 0 && ` votes count ${votesCount}`}
        </>
    );
}
