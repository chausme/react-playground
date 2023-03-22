import React from 'react';
import { Profile } from './components/profile';
import { Info } from './components/info';

export function About() {
    return (
        <>
            <section className="info">
                <Info />
            </section>
            <section className="profiles">
                <Profile />
                <Profile />
                <Profile />
                <Profile />
            </section>
        </>
    );
}
