import { useState } from 'react'
import styled from 'styled-components';
import bg from './img/bg.png'
import { MainLayout } from './styles/Layouts';
import Orb from './Components/Orb/Orb';

function App() {
    const [count, setCount] = useState(0)

    return (
        <AppStyled bg={bg} className='App'>
            <Orb />
            <MainLayout>
                This is a test
            </MainLayout>
        </AppStyled>
    )
}

const AppStyled = styled.div`
    height: 100vh;
    background-image: url(${props => props.bg});
    position: relative;
    main {
        flex: 1;
        background: rgba(252, 246, 249, 0.78);
        border: 3px solid #FFFFFF;
        backdrop-filter: blur(4.5px);
        border-radius: 32px;
        overflow-x: hidden;
        &::-webkit-scrollbar {
            width: 0;
        }
    }
`;

export default App;