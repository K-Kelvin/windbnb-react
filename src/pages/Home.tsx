import styled from "styled-components";
import Header from "../components/Header";
import StayCard from "../components/StayCard";
import colors from "../constants/colors";
import stays from "../constants/stays.json";

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
        }
        .num_stays {
            color: ${colors.gray82};
        }
    }
`;

const Grid = styled.div`
    display: grid;
    width: 100%;
    gap: 32px;
    grid-template-columns: repeat(1, minmax(0, 1fr)); /* mobile */

    @media screen and (min-width: 576px) {
        /* tablets */
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media screen and (min-width: 768px) {
        /* desktop */
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
`;
