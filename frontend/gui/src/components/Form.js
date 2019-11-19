
import React from 'react'
import { Form, Input, Button } from 'antd';
import axios from 'axios';

const FormItem = Form.Item;

class CustomForm extends React.Component {

  handleFormSubmit = (event, requestType, assignmentID) => {
    

    const title= event.target.elements.title.value;
    const content= event.target.elements.content.value;
  
    switch (requestType){
      case 'post':
        return axios.post('http://127.0.0.1:8000/api/create/', {
          title: title,
          content: content
        })
        .then(response => { 
          console.log(response)
        })
        .catch(error => {
            console.log(error.response)
        });
      case 'put':
        return axios.put(`http://127.0.0.1:8000/api/${assignmentID}/update/`, {
            title: title,
            content: content
          })
          .then(response => { 
            console.log(response)
          })
          .catch(error => {
              console.log(error.response)
          });
    }
  }
  render() { 
    return (
      <div>
        <Form
          onSubmit={event =>
            this.handleFormSubmit(
              event,
              this.props.requestType,
              this.props.assignmentID
            )
          }>
          <FormItem label="Título">
            <Input name="title" placeholder="Título del curso" />
          </FormItem>
          <FormItem label="Descripción">
            <Input name="content" placeholder="Escribia una descripción" />
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">
              {this.props.btnText}
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
 } 

export default CustomForm;