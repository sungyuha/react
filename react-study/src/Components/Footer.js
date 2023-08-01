import React from "react";

const Footer = ({ isDark, setIsDark} ) => {

    // 버튼을 누르면 실행
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
            {/* 버튼을 누르면 */}
            <button className="button" onClick={toogleThome}>
                Dark Mode
            </button>
        </footer> 
    );
};

export default Footer;