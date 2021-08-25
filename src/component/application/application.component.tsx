import React from 'react';
import Paragraph from '../paragraph/paragraph.component';

type model = {
    title?: string;
    src?: string;
}
type ApplicationType = {
    model: model[]
}
const Application = (props: ApplicationType) => {
    return (
        <>
            {props.model.map(item => {
                return (
                    <div className='col'>
                        <div className='bg-menu m-auto profile rounded-circle shadow-lg p-2'>
                            <div className='profile-1 rounded-circle'>
                                <img src={item.src} alt='Profile' />
                            </div>
                        </div>
                        <Paragraph textalign='text-center'  title={item.title} className='fs-6 text-white mt-4' />
                    </div>
                )
            })}
        </>
    );
};

export default Application;