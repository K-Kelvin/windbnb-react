import { useEffect, useState } from "react";
import styled from "styled-components";
import colors from "constants/colors";
import { MinusIcon, PlusIcon } from "components/Icons";

interface Props {
    visible: boolean;
    setTotal: (total: number) => void;
}

const GuestsContainer = ({ visible, setTotal, ...rest }: Props) => {
    const [numOfAdults, setNumOfAdults] = useState(0);
    const [numOfChildren, setNumOfChildren] = useState(0);

    useEffect(() => {
        setTotal(numOfAdults + numOfChildren);
    }, [numOfAdults, numOfChildren, setTotal]);

    useEffect(() => {
        return () => {
            setNumOfAdults(0);
            setNumOfChildren(0);
        };
    }, []);

    if (!visible) return null;
    const increaseAdults = () => {
        setNumOfAdults(prevState => {
            return prevState + 1;
        });
    };
    const decreaseAdults = () => {
        setNumOfAdults(prevState => {
            if (prevState <= 0) return 0;
            return prevState - 1;
        });
    };
    const increaseChildren = () => {
        setNumOfChildren(prevState => {
            return prevState + 1;
        });
    };
    const decreaseChildren = () => {
        setNumOfChildren(prevState => {
            if (prevState <= 0) return 0;
            return prevState - 1;
        });
    };

    return (
        <Div>
            <div className="setter">
                <h3 className="title">Adults</h3>
                <div className="description">Ages 13 or above</div>
                <div className="inputs">
                    <button onClick={decreaseAdults}>
                        <MinusIcon />
                    </button>
                    <span>{numOfAdults}</span>
                    <button onClick={increaseAdults}>
                        <PlusIcon />
                    </button>
                </div>
            </div>
            <div className="setter">
                <h3 className="title">Children</h3>
                <div className="description">Ages 2-12</div>
                <div className="inputs">
                    <button onClick={decreaseChildren}>
                        <MinusIcon />
                    </button>
                    <span>{numOfChildren}</span>
                    <button onClick={increaseChildren}>
                        <PlusIcon />
                    </button>
                </div>
            </div>
        </Div>
    );
};

const Div = styled.div`
    position: absolute;
    z-index: 30;
    top: 100%;
    left: 0;
    padding: 28px;
    padding-top: 0;
    width: 100%;
    max-height: 300px;
    overflow-x: hidden;
    overflow-y: auto;

    .setter {
        margin-top: 36px;
        font-family: "Mulish", sans-serif;
        font-size: 14px;
        .title {
            font-weight: 700;
            color: ${colors.black33};
        }
        .description {
            font-weight: 400;
            color: ${colors.grayBD};
        }
        .inputs {
            display: flex;
            align-items: center;
            gap: 16px;
            margin-top: 12px;
            button {
                width: 24px;
                height: 24px;
                border: 1px solid ${colors.gray82};
                color: ${colors.gray82};
                border-radius: 4px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            span {
                color: ${colors.black33};
                font-weight: bold;
            }
        }
    }
`;

export default GuestsContainer;
