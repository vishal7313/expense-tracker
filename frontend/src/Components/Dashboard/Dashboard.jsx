import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';
import Chart from '../Chart/Chart';

function Dashboard() {
    return (
        <DashboardStyle>
            <InnerLayout>
                <h1>Dashboard</h1>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart/>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyle>
    )
}

const DashboardStyle = styled.div`

`;

export default Dashboard