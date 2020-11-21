import React, { Component } from 'react';
import { Button, Form, Input } from 'reactstrap';

export default class PlayerForm extends Component {
  state = {
    id: this.props.player.id || '',
    name: this.props.player.name || '',
    imageUrl: this.props.player.imageUrl || '',
    number: this.props.player.number || '',
  }

  handleChange = (e) => {
    const value = e.target.name === 'number' ? Number(e.target.value) : e.target.value;
    this.setState({
      [e.target.name]: value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addUpdatePlayer(this.state);
  };

  render() {
    const dataItems = ['name', 'imageUrl', 'position'];
    return (
      <Form className='container mb-3' onSubmit={this.handleSubmit}>
            {
                dataItems.map((item) => (
                  (item !== 'id') && (
                   <Input
                    key={item}
                    className='mb-2'
                    type='text'
                    name={item}
                    id={item}
                    value={this.state[`${item}`]}
                    placeholder={`Enter player ${item}`}
                    onChange={this.handleChange}
                    required
                   />)
                ))
            }
            <Button className="mt-3">Submit</Button>
        </Form>
    );
  }
}
