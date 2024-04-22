import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';

function Dashboard() {
    return (
        <DashboardStyle>
            <InnerLayout>
                <h1>Dashboard</h1>
            </InnerLayout>
        </DashboardStyle>
    )
}

const DashboardStyle = styled.div`

`;

export default Dashboard