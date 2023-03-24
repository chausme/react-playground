import React from 'react';

export function Profile({ image, wrap }) {
    if (wrap) {
        return (
            <>
                <img src={image} alt="" />
            </>
        );
    } else {
        return (
            <>
                <span class="image-wrap">
                    <img src={image} alt="" />
                </span>
            </>
        );
    }
}
