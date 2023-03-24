import React, { Fragment } from 'react';
import { Profile } from './components/profile';
import { InfoWrap } from './components/infoWrap';
import { P } from './components/p';

export function About() {
    const profiles = [
        {
            id: 1,
            body: <Profile image="https://i.imgur.com/MK3eW3Am.jpg" wrap={true} display={true} />,
        },
        {
            id: 2,
            body: <Profile image="https://i.imgur.com/MK3eW3Am.jpg" display={true} />,
        },
        {
            id: 3,
            body: <Profile image="https://i.imgur.com/MK3eW3Am.jpg" wrap={true} display={true} />,
        },
        {
            id: 4,
            body: <Profile image="https://i.imgur.com/MK3eW3Am.jpg" display={true} />,
        },
        {
            id: 5,
            body: <Profile image="https://i.imgur.com/MK3eW3Am.jpg" display={false} />,
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
                <InfoWrap>
                    <P content="Test text"></P>
                </InfoWrap>
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
