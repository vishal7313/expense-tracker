import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';

function Expenses() {
    return (
        <ExpensesStyle>
            <InnerLayout>
                <h1>Expenses</h1>
            </InnerLayout>
        </ExpensesStyle>
    )
}

const ExpensesStyle = styled.div`

`;

export default Expenses