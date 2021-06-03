import styled from "styled-components";
import { LocationIcon } from "components/Icons";
import colors from "constants/colors";

const locations = [
    "Helsinki, Finland",
    "Turku, Finland",
    "Oulu, Finland",
    "Vaasa, Finland",
];

interface Props {
    visible: boolean;
    onLocationClick?: (location: string) => void;
}

const LocationContainer = (props: Props) => {
    if (!props.visible) return null;
    return (
        <Div>
            {locations.map((location, id) => (
                <div
                    key={id}
                    className="Location"
                    onClick={() => props.onLocationClick?.(location)}
                >
                    <LocationIcon />
                    <span>{location}</span>
                </div>
            ))}
        </Div>
    );
};

const Div = styled.div`
    position: absolute;
    z-index: 30;
    top: 100%;
    left: 0;
    width: 100%;
    max-height: 292px;
    overflow-x: hidden;
    overflow-y: auto;

    .Location {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 18px 28px;
        color: ${colors.black33};
        cursor: pointer;

        &:first-child {
            margin-top: 18px;
        }
        &:hover {
            background: #fbfbfd;
        }
    }
`;

export default LocationContainer;
