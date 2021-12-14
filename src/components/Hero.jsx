import React from 'react'
import './hero.css';

const Hero = ({imageSrc}) => {
    return (
        <div className='hero'>
            <img src={imageSrc} alt="Forest" className='hero__image' />
            <h1 className='hero__title'>Forest All Around</h1>
        </div>
    );
}

export default Hero
