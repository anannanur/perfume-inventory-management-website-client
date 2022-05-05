import React from 'react';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import Statistics from '../Statistics/Statistics';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
            <Items></Items>
            <Statistics></Statistics>
        </div>
    );
};

export default Home;