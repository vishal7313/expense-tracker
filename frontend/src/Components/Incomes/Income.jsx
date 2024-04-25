import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';

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
                        {incomes.map((income) => {
                            const {_id, title, amount, date, category, description, type} = income;
                            return <IncomeItem
                                key={_id}
                                id={_id} 
                                title={title} 
                                description={description} 
                                amount={amount} 
                                date={date} 
                                type={type}
                                category={category} 
                                indicatorColor="var(--color-green)"
                            />
                        })}
                    </div>
                </div>
            </InnerLayout>
        </IncomeStyle>
    )
}

const IncomeStyle = styled.div`
    display: flex;
    overflow: auto;
    .income-content {
        display: flex;
        gap: 2rem;
        .incomes {
            flex: 1;
        }
    }
`;

export default Income