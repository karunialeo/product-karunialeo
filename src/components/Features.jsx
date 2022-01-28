import React from 'react';
import Feature1 from './Features/Feature1'
import Feature2 from './Features/Feature2'
import Feature3 from './Features/Feature3'

function Features() {
    return (
        <div id='features' className='color-switch text-var-black'>
            <Feature1 />
            <Feature2 />
            <Feature3 />
        </div>
    )
}

export default Features