import React from 'react'
// import Assignment from '../components/Assignment'
import axios from 'axios'
// import CustomForm from '../components/Form'
import { List } from 'antd';
import { Link} from 'react-router-dom';



class LessonsList extends React.Component{
  state ={
    assignment:[]
  }

  componentDidMount(){
    axios.get('http://127.0.0.1:8000/lessons/')
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
  <List.Item>{item.title} CursoID:{item.assignment}</List.Item>
      </Link>
    )
  }
  render(){
    return(
        <div>
          <h3 style={{ margin: '16px 0' }}>Lista de Lecciones</h3>
          <List
            size="large"
            header={<div>Lecciones</div>}
            bordered
            dataSource={this.state.assignment}
            renderItem={item => this.renderItem(item)}
          />
        </div>
    )
   }
}
export default LessonsList;