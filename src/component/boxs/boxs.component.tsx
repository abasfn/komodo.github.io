import React from 'react';
import Paragraph from '../paragraph/paragraph.component';

type modle = {
    bottomProfileTitle: string;
    title?: string;
    paragrapg?: string;
    src?: string;
}
type boxsType = {
    model: modle[]
}
const Boxs = (props: boxsType) => {
    return (
        <>

            {props.model.map(item => {
                return (
                    <div className='p-1 rounded mt-5 '>
                    <div className='shadow-lg p-3'>
                        <div className='rounded-circle mt-profile bg-white p-2'>
                            <img height='80px' width='80px' className='rounded-circle' src={item.src} alt='profile' />
                        </div>
                        <Paragraph title={item.bottomProfileTitle} className='text-color-title fs-6' />
                        <Paragraph title={item.title} className='text-color-title fs-4 text-success' />
                        <Paragraph title={item.paragrapg} className='text-color-title fs-6' />
                    </div>
                    </div>
                )
            })}
        </>
    );
};

export default Boxs;