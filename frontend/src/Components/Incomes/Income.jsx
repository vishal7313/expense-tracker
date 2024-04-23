import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';

function Income() {
    return (
        <IncomeStyle>
            <InnerLayout>
                <h1>Income</h1>
                <h2 className='total-income'>
                    Total Income: <span>$1200</span>
                </h2>
            </InnerLayout>
        </IncomeStyle>
    )
}

const IncomeStyle = styled.div`
    display: flex;
    overflow: auto;
    .total-income {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        span {
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }
`;

export default Income