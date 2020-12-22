import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "@material-ui/core/Button"
import SaveIcon from '@material-ui/icons/Save'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'

import {makeStyles, ThemeProvider,createMuiTheme} from '@material-ui/core/styles'
import {orange, green} from '@material-ui/core/colors'
import 'fontsource-roboto';

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles({
  root:{
    background:'linear-gradient(45deg, #FE6B8B,#FF8E53)',
    border: 0,
    borderRadius:15,
    color:'white',
    padding:'5px 30 px',
    marginBottom:15
  }
})

const theme = createMuiTheme({
  typography: {
    h2:{
      fontSize:18,
      marginBottom:15,
    }
  },
  palette:{
    primary:{
      main:green[500],
    },
    secondary:{
      main:orange[500]
    }
  }
})

function ButtonStyled(){
  const classes = useStyles();
  return <Button className={classes.root}>TEST STYLED BUTTON </Button>

}


function CheckboxExample(){
  const [checked,setChecked] = React.useState(true)

  return (
    <div>
      <FormControlLabel 
      control = {
        <Checkbox
        checked = {checked}
        icon = {<DeleteIcon/>}
        checkedIcon = {<SaveIcon/>}
        onClick = {(e)=>setChecked(e.target.checked)}
        importProps = {{
          'aria-label': 'secondary checkbox'
        }}
        />
      }
      label = "TESTING CHECKBOX"
      />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth ='xs'>
    <div className="App">
      <header className="App-header">
        <AppBar color = "secondary">
          <ToolBar>
            <IconButton>
              <MenuIcon/>
            </IconButton>
            <Typography variant= 'h6'>
              MUI Themeing
            </Typography>
            <Button>
              Login
            </Button>
          </ToolBar>
        </AppBar>

        <Typography variant = 'h2' component ="div">
          Welcome to MUI
        </Typography>
        <Typography variant = 'subtitle1'>
        LEARN
        </Typography>
        <ButtonStyled/>

<Grid container spacing={2} justify="center">
<Grid item xs={3} sm={6}>
        <Paper style = {{height:75,width:'100%'}}/>
      </Grid>
      <Grid item xs={3} sm={6}>
        <Paper style = {{height:75,width:'100%'}}/>
      </Grid>
      <Grid item xs={3} sm={6}>
        <Paper style = {{height:75,width:'100%'}}/>
      </Grid>
</Grid>
     



        <TextField
        variant = "filled"
        color = "secondary"
        type = "email"
        label = "THE TIME"
        placeholder= "@test.com"
        
        />
      <CheckboxExample/>
        <ButtonGroup  variant= "contained" color="primary" >
        
        <Button onClick = {()=> alert('hello')} 
        size="large"
        startIcon= {<SaveIcon/>}>
          Save
        </Button>

        <Button onClick = {()=> alert('hello')} 
        size="large"
        startIcon= {<DeleteIcon/>}>
          Discard
        </Button>
        </ButtonGroup>

       
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    </Container>
    </ThemeProvider>
  );
}

export default App;
