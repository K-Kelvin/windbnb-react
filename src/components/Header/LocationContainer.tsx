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
    onLocationClick?: (id: number) => void;
}

const LocationContainer = (props: Props) => {
    if (!props.visible) return null;
    return (
        <Div>
            {locations.map((location, id) => (
                <div
                    key={id}
                    className="Location"
                    onClick={() => props.onLocationClick?.(id)}
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
    padding: 28px;
    width: 100%;
    max-height: 300px;
    overflow-x: hidden;
    overflow-y: auto;

    .Location {
        display: flex;
        align-items: center;
        gap: 10px;
        color: ${colors.black33};

        & + .Location {
            margin-top: 36px;
        }
    }
`;

export default LocationContainer;
