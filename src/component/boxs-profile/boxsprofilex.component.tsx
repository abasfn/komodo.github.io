import React from 'react';
import Paragraph from '../paragraph/paragraph.component';

type BoxsProfileType = {
    src?: string;
    srcBoxs?: string;
    title?: string;
}
const BoxsProfile = (props: BoxsProfileType) => {
    return (
        <div className='d-flex mt-3'>
            <div>
                <div className='profile bg-white rounded-circle shadow-lg '>
                    <img src={props.src} alt='Profile' />
                </div>
            </div>
            <div className='shadow-lg p-1 me-2 rounded'>
                <img className='rounded' src={props.srcBoxs} alt='Profile' />
            </div>
            <Paragraph title={props.title} className='text-dark me-2 fs-4 mt-2' />
        </div>
    );
};

export default BoxsProfile;