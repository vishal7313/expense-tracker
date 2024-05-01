import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';

function Dashboard() {
    return (
        <DashboardStyle>
            <InnerLayout>
                <h1>Dashboard</h1>
                <div className="stats-con">
                    <div className="chart-con">
                        
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyle>
    )
}

const DashboardStyle = styled.div`

`;

export default Dashboard