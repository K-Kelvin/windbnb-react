import styled from "styled-components";
import colors from "../constants/colors";
import { RateIcon } from "./Icons";

interface Props {
    city: string;
    country: string;
    superHost: boolean;
    title: string;
    rating: number;
    maxGuests: number;
    type: string;
    beds: number | null;
    photo: string;
}

const StayCard = (props: Props) => {
    return (
        <Card>
            <Image src={props.photo} alt=" " />
            <div className="flex">
                <div className="host_beds_container">
                    {props.superHost && (
                        <div className="super_host">Super host</div>
                    )}
                    <p className="type">
                        {props.type}
                        {props.beds && <span> . {props.beds} beds</span>}
                    </p>
                </div>
                <div className="rate">
                    <RateIcon color={colors.redEB} />
                    <span>{props.rating}</span>
                </div>
            </div>
            <p className="title">{props.title}</p>
        </Card>
    );
};

const Image = styled.img`
    width: 100%;
    height: 270px;
    border-radius: 24px;
    object-fit: cover;
    background: #c4c4c4;
    overflow: hidden;
`;
const Card = styled.div`
    width: 100%;
    .flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px;
    }
    .host_beds_container {
        display: flex;
        align-items: center;
        gap: 11px;
    }
    .super_host {
        padding: 6px 10px;
        margin-right: 8px;
        border: 1px solid ${colors.black4F};
        color: ${colors.black4F};
        border-radius: 100px;
        font-family: "Montserrat", sans-serif;
        font-size: 12px;
        text-transform: uppercase;
        font-weight: 700;
    }
    .type {
        color: ${colors.gray82};
        font-size: 14px;
        font-weight: 500;
    }
    .rate {
        display: flex;
        align-items: center;
        svg {
            margin-top: -2px;
        }
        span {
            display: block;
            font-size: 14px;
            color: ${colors.black4F};
        }
    }
    .title {
        font-weight: 600;
        color: ${colors.black33};
        margin-top: 12px;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;
export default StayCard;
