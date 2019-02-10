import React, { Component } from 'react'
import { Form, Radio } from 'semantic-ui-react'

class RadioGroup extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    return (
      <Form>
        <Form.Field>
          Selected: <b>{this.state.value}</b>
        </Form.Field>
        <Form.Field>
          <Radio
            label='One'
            name='radioGroup'
            value='One'
            checked={this.state.value === 'One'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Two'
            name='radioGroup'
            value='Two'
            checked={this.state.value === 'Two'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Three'
            name='radioGroup'
            value='Three'
            checked={this.state.value === 'Three'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Four'
            name='radioGroup'
            value='Four'
            checked={this.state.value === 'Four'}
            onChange={this.handleChange}
          />
        </Form.Field>
      </Form>
    )
  }
};

export default RadioGroup;