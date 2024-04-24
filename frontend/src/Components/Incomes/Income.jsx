import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';

function Income() {
    const {addIncome, getIncomes, incomes} = useGlobalContext();
    
    useEffect (() => {
        getIncomes()
    }, [])

    return (
        <IncomeStyle>
            <InnerLayout>
                <h1>Income</h1>
                <h2 className='total-income'>
                    Total Income: <span>$1200</span>
                </h2>

                <div className="income-content">
                    <div className="form-container">
                        <Form />
                    </div>
                    <div className='incomes'>
                    </div>
                </div>
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