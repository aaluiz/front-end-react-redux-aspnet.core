import React from 'react';

const Footer = props => {
    return (
        <h1 class="my-4">{props.title}
         <small> {props.subtitle}</small>
        </h1>

    );
}

export default Footer;