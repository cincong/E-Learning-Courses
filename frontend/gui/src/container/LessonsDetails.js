import React from 'react'
import axios from 'axios'
import { Card } from 'antd';
import Questions from './Questions'

class LessonsDetails extends React.Component{
  state ={
    lessons:[]
  }

  componentDidMount(){
    const lessonsID = this.props.match.params.lessonsID;
    axios.get(`http://127.0.0.1:8000/lessons/${lessonsID}`)
    .then(res =>{
      this.setState({
        lessons:res.data
      });
    console.log(res)
    })
  }
  
  render(){
    return[
    <div style={{ height: '100%' }}>
      <Card title={this.state.lessons.title}>
       <Card type="inner" tittle="title">
        <Questions/>
       </Card>
      </Card>
    
      
    </div>
    ]
  }
}

export default LessonsDetails;
