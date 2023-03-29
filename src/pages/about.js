import React, { Fragment } from 'react';
import { Profile } from './components/profile';
import { InfoWrap } from './components/infoWrap';
import { P } from './components/p';
import { Button } from '../components/button';

export function About() {
    const profiles = [
        {
            id: 1,
            body: (
                <Profile
                    image="https://i.imgur.com/MK3eW3Am.jpg"
                    wrap={true}
                    display={true}
                    alt="description"
                />
            ),
            visible: true,
        },
        {
            id: 2,
            body: (
                <Profile image="https://i.imgur.com/MK3eW3Am.jpg" display={true} votesCount={30} />
            ),
            visible: true,
        },
        {
            id: 3,
            body: (
                <Profile
                    image="https://i.imgur.com/MK3eW3Am.jpg"
                    wrap={true}
                    display={true}
                    votesCount={0}
                />
            ),
            visible: true,
        },
        {
            id: 4,
            body: <Profile image="https://i.imgur.com/MK3eW3Am.jpg" display={true} />,
            visible: true,
        },
        {
            id: 5,
            body: <Profile image="https://i.imgur.com/MK3eW3Am.jpg" display={false} />,
            visible: false,
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
                <Button
                    title="Open"
                    onSmash={() => {
                        alert(`Clicked "Open" button`);
                    }}
                />
                <Button
                    title="Close"
                    onSmash={() => {
                        alert(`Clicked "Close" button`);
                    }}
                />
            </section>
            <section className="profiles">
                <ul>
                    {profiles
                        .filter(profile => profile.visible === true)
                        .map(profile => (
                            <li key={profile.id}>
                                <strong>Profile #{profile.id}</strong>
                                <Fragment key={profile.id}>{profile.body}</Fragment>
                            </li>
                        ))}
                </ul>
            </section>
        </>
    );
}
