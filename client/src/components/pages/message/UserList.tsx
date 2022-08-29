import { Grid } from '@mui/material'
import React from 'react'
import './UserList.css'

function UserList() {
    return (
        <Grid item xs={4} className='grid history'>
        <div className='history-title'>
            <p>履歴</p>
        </div>
    </Grid>
    )
}

export default UserList