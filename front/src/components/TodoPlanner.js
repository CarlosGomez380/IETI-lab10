import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import {PlannerList} from "./PlannerList";

class TodoPlanner extends Component {

    constructor(props) {
        super(props);
        this.state = {items: [], description: '', responsible: 0, status:'', dueDate: moment()};
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleResponsableChange = this.handleResponsableChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
    }

    render() {
        return(
        <div>
            <form onSubmit={this.handleSubmit} className="todo-form">
                <h3>New Task</h3>
                <label htmlFor="description" className="right-margin">
                    Description:
                </label>
                <input id="description" onChange={this.handleDescriptionChange} value={this.state.description}>
                </input>
                <br/>
                <br/>
                <label htmlFor="responsable" className="right-margin">
                        Responsable:
                </label>
                <input id="responsable" onChange={this.handleResponsableChange} value={this.state.responsable}>
                </input>
                <br/>
                <br/>
                <label htmlFor="status" className="right-margin">
                        Status:
                </label>
                <input id="status" onChange={this.handleStatusChange} value={this.state.status}>
                </input>
                <br/>
                <br/>
                <input type="file" id="file" onChange={this.handleInputChange}/>
                <br/>
                <br/>
                <DatePicker id="due-date" selected={this.state.dueDate} placeholderText="Due date" onChange={this.handleDateChange}>
                </DatePicker>
                <br/>
                <button>
                    Add Task
                </button>
            </form>
            <br/>
            <br/>
            <PlannerList listPlanner={this.state.items}/>
        </div>
        )

    }

    handleInputChange(e) {
        this.setState({
            file: e.target.files[0]
        });                
    }

    handleDescriptionChange(e) {
        this.setState({
            description: e.target.value
        });
    }

    handleResponsableChange(e) {
        this.setState({
            responsable: e.target.value
        });
    }

    handleStatusChange(e) {
        this.setState({
            status: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.description.length || !this.state.responsable.length || !this.state.status.length || !this.state.dueDate)
            return;

        const newItem = {
            description: this.state.description,
            responsable: this.state.responsable,
            status: this.state.status,
            dueDate: this.state.dueDate,

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            description: '',
            responsable: '',
            status: '',
            dueDate: ''
        }));
        let data = new FormData();
        data.append('file', this.state.file);

        this.axios.post('files', data)
            .then(function (response) {
                console.log("file uploaded!", data);
        })
        .catch(function (error) {
            console.log("failed file upload", error);
        });
    }

}

export default TodoPlanner;