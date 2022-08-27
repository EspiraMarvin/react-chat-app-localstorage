import React from 'react'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material//Grid';
import Fab from '@mui/material/Fab';
import { KeyboardArrowRight } from '@mui/icons-material';


export default function SendChat() {
  return (
    <>
        <Grid container style={{padding: '20px'}}>
            <Grid item xs={10}>
                <TextField id="outlined-basic-email" label="Type Something" fullWidth />
            </Grid>

            <Grid className="ml-[3px] lg:ml-8">
                <Fab className="bg-blue-500" color="primary" aria-label="add"><KeyboardArrowRight /></Fab>
            </Grid>
        </Grid> 

    </>
  )
}
