import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
import { InnerLayout } from '../../styles/Layouts';

import { dollar } from '../../utils/useIcons';
import DoughnutChart from '../Chart/DoughnutChart';

function ViewTransactions() {
    const {totalExpense, incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses} = useGlobalContext();
    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])
    return (
        <ViewTransactionsStyle>
            <InnerLayout>
                <h1>View Transactions</h1>
                <div className="stats-con">
                    <div className="chart-con">
                        <DoughnutChart/>
                    </div>
                    <div className="history-con">
                        <History />
                    </div>
                </div>
            </InnerLayout>
        </ViewTransactionsStyle>
    )
}

const ViewTransactionsStyle = styled.div`
    .stats-con {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        .chart-con {
            grid-column: 1/4;
            height: 400px;
        }

        .history-con {
            grid-column: 4/-1;
            h2 {
                margin: 1rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        }
    }
`;

export default ViewTransactions