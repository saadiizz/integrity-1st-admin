import { Stack } from '@mui/material'
import React from 'react'
import UserComponent from '../../components/users/UserComponent'

const UserScreen = () => {
    return (
        <Stack width={'100%'} overflow={'auto'}>
            <UserComponent />
        </Stack>
    )
}

export default UserScreen