import React from 'react';
import Paragraph from '../paragraph/paragraph.component';

type ProfileComponentType = {
    src?: string;
    title?: string;
    paragraph?: string;
    classNameTitle?:string;
}
const ProfileComponent = (props: ProfileComponentType) => {
    const className = props.classNameTitle + ' '
    return (
        <div className='d-flex mb-5'>
            <div>
                <div className='profile bg-white rounded-circle shadow-lg'>
                    <img src={props.src} alt='Profile' />
                </div>
            </div>
            <div className='me-2'>
                <Paragraph title={props.title} className={className} />
                <Paragraph title={props.paragraph} className='text-light fs-5' />
            </div>
        </div>
    );
};

export default ProfileComponent;