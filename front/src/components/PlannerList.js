import React from 'react';
import {OutlinedCard} from './card'

export class PlannerList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const plannerList = this.props.listPlanner.map((planner, i) => {
            console.log(planner.description);
            console.log(planner.responsable);
            console.log(planner.status);
            return (
                <OutlinedCard key={i} description={planner.description} responsable={planner.responsable} status={planner.status} dueDate={planner.dueDate}/>
            );
        });

        return (
            <div>{plannerList}</div>
            

        );


    }

}