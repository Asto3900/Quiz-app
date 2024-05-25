import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({
  setquizCount,
  quizCount,
}) {
  return (
  
    <Box
    component="form"
    noValidate
    autoComplete="off"
>
    <TextField
        fullWidth
        type="number"
        id="outlined-basic"
        label="Number of Questions"
        variant="outlined"
        onChange={(e) => setquizCount(e.target.value)}
        value={quizCount}
    />
</Box>
    
  );
}
