import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const MenuBar = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 128px;
`;

const Navigation = styled.nav`
    display: flex;

    ul {
        width: 440px;
        display: flex;
        font-size: 18px;
        list-style: none;
        justify-content: space-between;
        cursor: pointer;
    }
`;

const ContactButton = styled.button`
    width: 128px;
    height: 46px;
    background-color: #739143;
    border-radius: 5px;
    font-weight: 500;
    font-size: 20px;
    color: white;
    border: none;
    cursor: pointer;
`;

const Header = () => {
    return (
        <MenuBar>
            <StaticImage
                src="../images/logo1.png"
                alt="logo Osiedle Bliskie"
                layout="fixed"
            />
            <Navigation>
                <ul>
                    <li>Start</li>
                    <li>O osiedlu</li>
                    <li>Lokalizacja</li>
                    <li>O nas</li>
                </ul>
            </Navigation>
            <ContactButton>Kontakt</ContactButton>
        </MenuBar>
    );
};

export default Header;
