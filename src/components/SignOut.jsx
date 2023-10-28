import { Button } from '@mui/material'
import React from 'react'
import { auth } from '../firebase'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

function SignOut() {
    return (
        <div className='header'>
            <Button style={{ color: "white", fontSize: "15px" }} onClick={() => auth.signOut()}>
                <KeyboardArrowLeftIcon style={{fontSize:"40px",color:"#051659"}}/>
            </Button>
            <p>{auth.currentUser.displayName}</p>
        </div>
    )
}

export default SignOut