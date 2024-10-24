import React from 'react';
import Banner from '../components/Banner';
import banner from '../assets/banner.svg'

const Home = () => {

    return (
        <div style={{backgroundImage: `url(${banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} className='h-screen opacity-75'>
            {/* <Banner></Banner> */}
        </div>
    );
};

export default Home;