import React from "react";
import Context from './Content';
import Footer from './Footer';
import Header from './Header';

// isDark, setIsDark를 Props로 받아옴
const Page = ({ isDark, setIsDark }) => {
    return (
        <div className="page">
            <Header isDark={isDark} />
            <Context isDark={isDark} />
            <Footer isDark={isDark} setIsDark={setIsDark} />
        </div>
    );
};

export default Page;