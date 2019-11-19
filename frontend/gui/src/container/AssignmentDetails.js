import React from 'react'
import axios from 'axios'
import { Card } from 'antd';
import CustomForm from '../components/Form'
// import Questions from './Questions'

class AssignmentDetails extends React.Component{
  state ={
    assignment:[]
  }

  componentDidMount(){
    const assignmentID = this.props.match.params.assignmentID;
    axios.get(`http://127.0.0.1:8000/api/${assignmentID}`)
    .then(res =>{
      this.setState({
        assignment:res.data
      });
    console.log(res)
    })
  }
  
  render(){
    return[
    <div style={{ height: '100%' }}>
      <Card title={this.state.assignment.title}>
       <p>{this.state.assignment.content}</p>
       <CustomForm requestType="put" assignmentID={this.props.match.params.assignmentID} btnText="Actualizar"/>
      </Card>
    
      
    </div>
    ]
  }
}

export default AssignmentDetails;
