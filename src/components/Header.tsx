import { useState } from "react";
import styled from "styled-components";
import colors from "../constants/colors";
import logo from "../images/logo.png";
import { CloseIcon, SearchIcon } from "./Icons";

const Header = () => {
    const [showOverlay, setShowOverlay] = useState(false);
    if (showOverlay) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return (
        <Root>
            <img className="logo" src={logo} alt="logo" />
            <div className={`${showOverlay ? "overlay" : ""}`}>
                <div className={`header ${!showOverlay ? "hidden" : ""}`}>
                    <span className="edit">Edit your search</span>
                    <CloseIcon
                        color={colors.black33}
                        onClick={() => setShowOverlay(false)}
                    />
                </div>
                <div
                    className={`search_container ${
                        showOverlay ? "on-overlay" : ""
                    }`}
                    onClick={() => setShowOverlay(true)}
                >
                    <div className="input_container">
                        <label htmlFor="location">Location</label>
                        <input
                            id="location"
                            type="text"
                            placeholder="Location"
                            defaultValue="Helsinki, Finland"
                        />
                    </div>
                    <div className="input_container">
                        <label htmlFor="guests">Guests</label>
                        <input
                            id="guests"
                            type="text"
                            placeholder="Add guests"
                        />
                    </div>
                    <div className="icon_container">
                        <button className="search">
                            <SearchIcon
                                color={
                                    showOverlay ? colors.white : colors.redEB
                                }
                            />
                            <span className={`${!showOverlay ? "hidden" : ""}`}>
                                Search
                            </span>
                        </button>
                    </div>
                </div>
                <div className={`background ${!showOverlay ? "hidden" : ""}`}>
                    <button className="search">
                        <SearchIcon color={colors.white} />
                        <span>Search</span>
                    </button>
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
    button {
        border: none;
        background: none;
    }

    @media screen and (min-width: 767px) {
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
        background: ${colors.white};
        box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
        border-radius: 16px;
        overflow: hidden;
        font-family: "Mulish", sans-serif;
        font-weight: 400;
        height: 54px;
        /* max-width: 300px; */
        & > div {
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
                border-left: 1px solid ${colors.whiteF2};
            }
        }
        .input_container {
            font-size: 14px;
            color: ${colors.black33};
            position: relative;
            label {
                display: none;
                position: absolute;
                top: 8px;
                left: 16px;
                text-transform: uppercase;
                font-family: "Mulish", sans-serif;
                font-weight: 800;
                font-size: 10px;
                line-height: 11px;
                text-transform: uppercase;
                color: ${colors.black33};
            }
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

    .hidden {
        display: none;
    }
    .overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 30;
        top: 0;
        left: 0;
        padding: 12px;
        background: ${colors.overlay};

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
            .edit {
                font-family: "Mulish", sans-serif;
                font-weight: bold;
                font-size: 12px;
                color: ${colors.black33};
            }
        }
        .background {
            background: ${colors.white};
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            width: 100%;
            height: 80%;
            .search {
                position: absolute;
                bottom: 16px;
                left: 50%;
                transform: translate(-50%, 0);
            }
        }
        .search {
            display: flex;
            align-items: center;
            gap: 8px;
            box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
            border-radius: 16px;
            padding: 15px 24px;
            background: rgba(235, 87, 87, 0.9);
            color: ${colors.whiteF2};
            border: none;
            font-family: "Mulish", sans-serif;
            font-weight: bold;
            font-size: 14px;
            &:hover {
                background: ${colors.redEB};
            }
            @media screen and (min-width: 767px) {
                display: none;
            }
        }
    }
    .search_container.on-overlay {
        flex-direction: column;
        height: auto;
        width: 100%;
        @media screen and (min-width: 767px) {
            flex-direction: row;
            align-items: stretch;
            justify-content: stretch;
        }
        & > div {
            @media screen and (min-width: 767px) {
                height: auto;
                flex: 1;
            }
        }
        div + div {
            border-left: none;
            border-top: 1px solid ${colors.whiteF2};
            @media screen and (min-width: 767px) {
                border-top: none;
                border-left: 1px solid ${colors.whiteF2};
            }
        }
        .input_container {
            label {
                display: block;
                top: 12px;
            }
            input {
                padding-top: 26px;
                padding-bottom: 4px;
                @media screen and (max-width: 576px) {
                    padding-bottom: 8px;
                }
            }
        }
        .icon_container {
            @media screen and (max-width: 576px) {
                display: none;
            }
            @media screen and (min-width: 767px) {
                flex-grow: 1;
                height: 100%;
                padding: 0;
                .search {
                    position: relative;
                    display: flex;
                    bottom: 0;
                }
            }
        }
    }
`;

export default Header;
