import React, { useState } from 'react';
import Paragraph from '../paragraph/paragraph.component';

type model = {
    title?: string;
    paragraph?: string;
    id:number;
}
type RectangleType = {
    model: model[];
}
const Rectangle = (props: RectangleType) => {
    const [number, setnumber] = useState<number>(0);
    const onclick = (index: number) => {
        debugger
        if (number === index) {
            setnumber(-1)
            return
        }
        setnumber(index);
    }
    return (
        <>
            {props.model.map((item, index) => {
                return (
                    <div className='d-flex shadow-lg bg-white rounded mt-3'>
                        <div className='w-kadr'></div>
                        <div className='p-2 d-flex justify-content-between w-100'>
                            <div className='mt-3'>
                                <Paragraph title={item.title} className='text-color-title-footer fs-5' />
                                {number === item.id &&<div >
                                    <Paragraph title={item.paragraph} className='text-color-title fs-6' />
                                </div>}
                            </div>
                            <div className='mt-3'>
                                <button onClick={() => onclick((item.id))} className='bg-white border-0' ><img src='images/Emoticon/icons8-plus-math-24.png' alt='icone' /></button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    );
};

export default Rectangle;