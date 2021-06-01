import styled from "styled-components";
import colors from "../constants/colors";
import logo from "../images/logo.png";
import { SearchIcon } from "./Icons";

const Header = () => {
    return (
        <Root>
            <img className="logo" src={logo} alt="logo" />
            <div className="search_container">
                <div className="input_container">
                    <input type="text" placeholder="Location" />
                </div>
                <div className="input_container">
                    <input type="text" placeholder="Add guests" />
                </div>
                <div className="icon_container">
                    <SearchIcon color={colors.redEB} />
                </div>
            </div>
        </Root>
    );
};

const Root = styled.header`
    display: flex;
    flex-direction: column;
    gap: 38px;
    margin-bottom: 38px;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 60px;
    }

    .logo {
        width: auto;
        max-width: 100px;
        height: auto;
        max-height: 20px;
    }

    .search_container {
        display: flex;
        background: #ffffff;
        box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
        border-radius: 16px;
        overflow: hidden;
        height: 54px;
        /* max-width: 300px; */
        div {
            height: 100%;
            input {
                height: 100%;
                width: 100%;
                padding: 18px 16px;
                border-radius: 16px;
                border: 1px solid transparent;
                &:focus {
                    border-color: #333;
                    outline: none;
                }
            }
            & + div {
                border-left: 1px solid #f2f2f2;
            }
        }
        .input_container {
            font-size: 14px;
            color: ${colors.black33};
            input {
                font-family: "Montserrat", sans-serif;
                &::placeholder {
                    color: ${colors.grayBD};
                }
            }
        }
        .icon_container {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            flex-grow: 0;
            padding: 18px;
        }
    }
`;

export default Header;
