import React from 'react'
import {
    Chart as ChartJs, 
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'

import { Doughnut } from 'react-chartjs-2'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'

ChartJs.register(
    ArcElement,
    Tooltip,
    Legend
);

function DoughnutChart() {
    const {totalIncome, totalExpense} = useGlobalContext();
    const options = {};
    const data = {
        labels: ['income', 'expense'],
        datasets: [
            {
                label: 'Income / Expense',
                data: [totalIncome(), totalExpense()],
                backgroundColor: ['green', 'red'],
                borderColor: ['green', 'red'],
            }
        ]
    }
    return (
        <DoughnutChartStyled >
            <Doughnut
                data={data}
                options={options}
            />
        </DoughnutChartStyled>
    )
}

const DoughnutChartStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 50%;
    height: 100%;
`;

export default DoughnutChart