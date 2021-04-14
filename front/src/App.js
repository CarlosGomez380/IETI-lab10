
import {useState} from 'react';
import './App.css';
import {Login} from './components/Login';
import TodoPlanner from './components/TodoPlanner';
import ResponsiveDrawer from './components/drawer';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { UserProfile } from './components/UserProfile';
import Modal from '@material-ui/core/Modal';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import DatePicker from 'react-datepicker';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}



function App() {
  if(localStorage.getItem('username')=== null){
    localStorage.setItem('username', "david");
    localStorage.setItem('password', 123);
  }
  
  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);

  const [logIn, setLogIn]= useState( localStorage.getItem('isLoggedIn')==='true');

  const logInFalse=()=>{
    setLogIn(false);
  }
  const logInTrue=()=>{
    setLogIn(true);
  }

  console.log(localStorage.getItem('username'));
  const changeProfile = () =>{
    window.location.href= "/userName";
  }

  const [open, setOpen] =useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <form className="todo-form">
                <h3>Task Filter</h3>
                <label htmlFor="description" className="right-margin">
                    Description:
                </label>
                <input id="description" >
                </input>
                <br/>
                <br/>
                <label htmlFor="responsable" className="right-margin">
                        Responsable:
                </label>
                <input id="responsable" >
                </input>
                <br/>
                <br/>
                <label htmlFor="status" className="right-margin">
                        Status:
                </label>
                <input id="status" >
                </input>
                <br/>
                <br/>
                <label htmlFor="due-date" className="right-margin">
                        Due Date:
                </label>
                <DatePicker id="due-date"  >
                    Due Date
                </DatePicker>
                <br/>
                <button>
                    Filter
                </button>
            </form>
    </div>
  );

  if(!logIn ){
    return (
      <div className="App">
        <Login goLogIn={logInTrue}/>
      </div>
    );
  }else{
    
    return (
      <Router>
        <div className="App">
          <Route exact path="/">
            <ResponsiveDrawer goLogOut={logInFalse} changeProfile={changeProfile}/> 
            <button type="button" onClick={handleOpen}>
              Open Modal
            </button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              {body}
            </Modal>
            <TodoPlanner/>
          </Route>
          <Route path="/userName" >
            <UserProfile/>
          </Route>
        </div>
      </Router>
    );
  }
  
}





export default App;
