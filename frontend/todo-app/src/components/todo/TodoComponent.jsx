import { Component } from "react";
import moment from "moment";
import { ErrorMessage, Field, Form, Formik } from "formik";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";
class TodoComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.params.id,
            description: '',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onValidate = this.onValidate.bind(this)
    }

    onSubmit(values) {
        // console.log(values)
        let userName = AuthenticationService.getLoggedInUserName();
        let todo = {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
        };

        if (this.state.id === -1) {
            TodoDataService.createTodoDataSrvce(userName, todo)
                .then(() => this.props.navigate('/todos'))
        }else {
            TodoDataService.updateTodoDataSrvce(userName, this.state.id, todo)
            .then(() => this.props.navigate('/todos'))
        }
    }

    componentDidMount() {
        if (this.state.id === -1) {
            return
        }
        else {
            let userName = AuthenticationService.getLoggedInUserName();
            TodoDataService.getTodoDataSrvce(userName, this.state.id).then(
                respone => {
                    this.setState({
                        description: respone.data.description,
                        targetDate: moment(respone.data.targetDate).format('YYYY-MM-DD')
                    })
                }

            )
        }
    }

    onValidate(values) {
        let errors = {}
        if (!values.description)
            errors.description = "Please enter Description"
        else if (values.description.length < 5)
            errors.description = 'Enter atleast 5 Characters in Description'
        if (!moment(values.targetDate).isValid())
            errors.targetDate = "Please enter valid TargetDate"
        return errors;
    }

    render() {
        let { description, targetDate } = this.state
        // let  targetDate: this.state.taretDate;
        return (

            <div>
                <h1>TOdo</h1>
                <div className="container">
                    <Formik
                        initialValues={{ description, targetDate }}
                        onSubmit={this.onSubmit}
                        validate={this.onValidate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" className="alert alert-warning" component="div" />
                                    <ErrorMessage name="targetDate" className="alert alert-warning" component="div" />
                                    <fieldset className="form-group">
                                        <label>Description:</label>
                                        <Field type="text" name="description" className="form-control" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>TargetDate:</label>
                                        <Field type="date" name="targetDate" className="form-control" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>)
    }
}

export default TodoComponent