import React from 'react';

function Footer(){
    const date = new Date();
    let year = date.getFullYear();
    return <footer>
    <p className="h-fit bg-gradient-to-b from-gray-800 to-black p-4 text-white text-center">Copyright © {year} All Rights Reserved!</p>
    </footer>;
}

export default Footer;