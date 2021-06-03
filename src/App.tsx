import Home from "./pages/Home";
import styled from "styled-components";

function App() {
    return (
        <Root>
            <Home />
        </Root>
    );
}

const Root = styled.div`
    padding: 22px 12px;
    @media screen and (min-width: 768px) {
        padding: 22px 32px;
    }
    @media screen and (min-width: 1048px) {
        padding: 32px 94px;
    }
`;

export default App;
