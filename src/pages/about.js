import React, { Fragment } from 'react';
import { Profile } from './components/profile';
import { Info } from './components/info';

export function About() {
    const profiles = [
        {
            id: 1,
            body: <Profile image="https://i.imgur.com/MK3eW3Am.jpg" />,
        },
        {
            id: 2,
            body: <Profile image="https://i.imgur.com/MK3eW3Am.jpg" />,
        },
        {
            id: 3,
            body: <Profile image="https://i.imgur.com/MK3eW3Am.jpg" />,
        },
        {
            id: 4,
            body: <Profile image="https://i.imgur.com/MK3eW3Am.jpg" />,
        },
    ];

    return (
        <>
            <section
                className="info"
                style={{
                    backgroundColor: 'yellow',
                    color: '#999',
                }}
            >
                <Info content="Lorem ipsum dolor sit amet consectetur adipisicing elit. In pariatur ad earum perspiciatis temporibus dolorem? Ad, aspernatur! Ad, minima nostrum?" />
            </section>
            <section className="profiles">
                {profiles.map(profile => (
                    <span key={profile.id}>
                        <strong>Profile #{profile.id}</strong>
                        <Fragment key={profile.id}>{profile.body}</Fragment>
                    </span>
                ))}
            </section>
        </>
    );
}
