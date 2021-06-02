import styled from "styled-components";
import { Header } from "components/Header";
import StayCard from "components/StayCard";
import colors from "constants/colors";
import stays from "constants/stays.json";

const Home = () => {
    return (
        <>
            <Header />
            <Root>
                <div className="header">
                    <h1 className="title">Stays in Finland</h1>
                    <span className="num_stays">12+ stays</span>
                </div>
                <Grid>
                    {stays.map((stay, id) => (
                        <StayCard key={id} {...stay} />
                    ))}
                </Grid>
                <div className="footer">
                    created by <span>Kijanda</span> - devChallenges.io
                </div>
            </Root>
        </>
    );
};

export default Home;

// styles
const Root = styled.div`
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        .title {
            color: ${colors.black33};
            font-weight: bold;
            font-size: 24px;
        }
        .num_stays {
            color: ${colors.black4F};
            font-size: 14px;
        }
    }
    .footer {
        margin-top: 40px;
        text-align: center;
        font-weight: 500;
        span {
            font-weight: 600;
        }
    }
`;

const Grid = styled.div`
    display: grid;
    width: 100%;
    gap: 32px;
    grid-template-columns: repeat(1, minmax(0, 1fr)); /* mobile */

    /* tablets */
    @media screen and (min-width: 576px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    /* desktop */
    @media screen and (min-width: 768.5px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
`;
