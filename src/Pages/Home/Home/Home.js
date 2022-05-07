import React from 'react';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import Statistics from '../Statistics/Statistics';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>           
            <Items></Items>
            <Statistics></Statistics>
            <Team/>
        </div>
    );
};

export default Home;