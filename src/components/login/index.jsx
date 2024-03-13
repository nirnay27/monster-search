import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Item } from '../Item';

export const Login = ()=>{

    return (
        
       
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
           <Grid item>
            <Item>LOGIN</Item>
                <Item>
            
          <TextField id="email" label="Email" variant="outlined" /> </Item>
          <Item>
          <TextField id="password" label="Password" type="password" variant="outlined" />
          </Item>
          <Item>
          <Button variant="contained" size="large">Login</Button>
         </Item>
         </Grid>
        </Box>
      
      );
}