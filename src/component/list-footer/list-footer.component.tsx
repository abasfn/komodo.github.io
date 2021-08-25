import React from 'react';
import Paragraph from '../paragraph/paragraph.component';

type model = {
    title?: string;
}
type ListFootetType = {
    model: model[]
}
const ListFootet = (props: ListFootetType) => {
    return (
        <ul>
            {props.model.map(item => {
                return (
                   <Paragraph title={item.title} className='text-color-title-footer fs-5' />
                )
            })}
        </ul>
    );
};

export default ListFootet;