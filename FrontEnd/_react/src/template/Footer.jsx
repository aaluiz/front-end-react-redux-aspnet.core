import React from 'react';

const Footer = props => {
    let year = new Date().getFullYear();
    return (
        <footer className="py-5 bg-dark">
            <div className="container">
                <p className="m-0 text-center text-white">Copyright &copy; {props.siteName+ ' '} {year}</p>
            </div>
        </footer>
    );
}

export default Footer;