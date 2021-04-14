import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import PersonIcon from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';

export const UserProfile = (props) => {
    const[userNameState,setUserNameState] = useState("");
    const[userPassState,setUserPassState] = useState("");

    const handleClick = () => {
        localStorage.setItem('username', document.getElementById('userName').value);
        localStorage.setItem('password', document.getElementById('password').value);
        
        setUserPassState(document.getElementById('password'));
        setUserNameState(document.getElementById('userName'));
        document.getElementById('form').submit();
        window.location.href= "/";
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <main className="layout">
                <Paper className="paper">
                    <Typography variant="h2"> Profile </Typography>
                    <Avatar className="avatar">
                        <PersonIcon />
                    </Avatar>
                    <form className="form" id="form">
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="userName">Username</InputLabel>
                            <Input id="userName" name="userName"  autoFocus />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">email</InputLabel>
                            <Input id="email" name="email"  autoFocus />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input
                                name="password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </FormControl>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="submit"
                            onClick={handleClick}
                        >
                            Save
                        </Button>
                    </form>
                    </Paper>
            </main>
        </React.Fragment>
    );

}