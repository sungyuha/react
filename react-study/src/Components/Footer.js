import React from "react";

const Footer = ({ isDark, setIsDark} ) => {
    const toogleThome = () => {
        setIsDark(!isDark);
    }

    return (
        <footer
            className="footer"
            style={{
                backgroundColor: isDark ? 'black' : 'lightgray',
            }}
        >
            <button className="button" onClick={toogleThome}>
                Dark Mode
            </button>
        </footer> 
    );
};

export default Footer;