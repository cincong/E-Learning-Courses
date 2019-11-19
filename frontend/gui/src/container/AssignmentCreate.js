import React from 'react'
import { Form, Input, Icon, Button } from 'antd';
import FormItem from 'antd/lib/form/FormItem';

let id = 0;

class AssignmentCreate extends React.Component {
  
  state = {
    formCount:1
  }
  remove = () => {
    const { formCount } = this.state;
    this.setState({
      formCount: formCount - 1
    })
    };

  add = () => {
   const { formCount } = this.state;
   this.setState({
     formCount: formCount + 1
   })
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { keys, names } = values;
        console.log('Received values of form: ', values);
        console.log('Merged values:', keys.map(key => names[key]));
      }
    });
  };

  render() {
    const { getFieldDecorator} = this.props.form;
    
    getFieldDecorator('keys', { initialValue: [] });
    const questions = []
        
    return (
      <Form onSubmit={this.handleSubmit}>
        <h1>Crea un Curso</h1>
        <FormItem label={"Título: "}>
        {getFieldDecorator(`title`, {
          validateTrigger: ['onChange', 'onBlur'],
          rules: [
            {
              required: true,
              whitespace: true,
              message: "Poner un título",
            },
          ],
        })(<Input placeholder="Agrega un título" style={{ width: '60%', marginRight: 8 }} />)}
        </FormItem>
      
        <Form.Item >
          <Button type="secondary" onClick={this.add} >
            <Icon type="plus" /> Agregar pregunta
          </Button>
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedAssignmentCreate = Form.create({ name: 'dynamic_form_item' })(AssignmentCreate);
export default WrappedAssignmentCreate;
