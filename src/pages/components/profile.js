import React from 'react';

export function Profile({ image, wrap, display }) {
    if (display === false) {
        return null;
    }
    if (wrap) {
        return (
            <>
                <img src={image} alt="" />
            </>
        );
    } else {
        return (
            <>
                <span className="image-wrap">
                    <img src={image} alt="" />
                </span>
            </>
        );
    }
}
