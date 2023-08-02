import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
    const {isDark, setIsDark} = useContext(ThemeContext);

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