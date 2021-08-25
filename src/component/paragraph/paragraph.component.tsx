import React from 'react';

type paragraphType = {
    className?: string;
    textalign?: 'text-start' | 'text-center' | 'text-end' | undefined;
    title?:string;
}
const Paragraph = (props: paragraphType) => {
    const className = props.className + ' ' + props.textalign;
    return (
        <p className={className}>{props.title}</p>
    );
};

export default Paragraph;