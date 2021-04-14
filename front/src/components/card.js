import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export class OutlinedCard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Card variant="outlined">
              <CardContent>
                <Typography variant="body2" component="p">
                  {this.props.description}
                </Typography>
                <Typography variant="body2" component="p">
                  {this.props.status}  {this.props.dueDate.format('DD-MM-YYYY')}
                </Typography>
                <Typography variant="body2" component="p">
                  {this.props.responsable}
                </Typography>
              </CardContent>
            </Card>
          );
    }
}