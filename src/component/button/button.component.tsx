import React from 'react';

type buttonType = {
    title?: string;
    className?: string;
}
const Button = (props: buttonType) => {
    const className = props.className + ' ' + 'rounded-pill border-0 p-2';
    return (
        <button className={className}>{props.title}</button>
    );
};

export default Button;