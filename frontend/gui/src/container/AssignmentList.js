import React from 'react'
import axios from 'axios'
import CustomForm from '../components/Form'
import { List } from 'antd';
import { Link} from 'react-router-dom';



class AssignmentList extends React.Component{
  state ={
    assignment:[]
  }

  componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/')
    .then(res =>{
      this.setState({
        assignment:res.data
      });
      console.log(res.data);
    })
  }

  renderItem(item){
    return(
      <Link to="/">
        <List.Item>{item.title}</List.Item>
      </Link>
    )
  }
  render(){
    return(
        <div>
          <h3 style={{ margin: '16px 0' }}>Lista de Cursos</h3>
          <List
            size="large"
            header={<div>Cursos</div>}
            bordered
            dataSource={this.state.assignment}
            renderItem={item => this.renderItem(item)}
          />
          <CustomForm requestType="post" assignmentID={null} btnText="Crear"/>
        </div>
    )
   }
}
export default AssignmentList;