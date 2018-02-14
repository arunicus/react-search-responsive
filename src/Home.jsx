import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea, Header } from 'semantic-ui-react'
const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

class SidebarLeftSlideAlong extends Component {
  state = { visible: false }
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <div>
        <Form>
          <Form.Group widths='equal'>
            <Form.Field control={Select} label='Label1' options={options} placeholder='Label1' />
            <Form.Field control={Select} label='Label1' options={options} placeholder='Label1' />
            <Form.Field control={Select} label='Label1' options={options} placeholder='Label1' />
            <Form.Field control={Select} label='Label1' options={options} placeholder='Label1' />
          </Form.Group>
          <Header as='h3' icon textAlign='left' >
          <Header.Content>
            SubHeader
         </Header.Content>
        </Header>
          <Form.Group widths='equal'>
            <Form.Field control={Select} label='Label1' options={options} placeholder='Label1' />
            <Form.Field control={Select} label='Label1' options={options} placeholder='Label1' />
            <Form.Field control={Select} label='Label1' options={options} placeholder='Label1' />
          </Form.Group>
          <Form.Group inline>
            <label>Quantity</label>
            <Form.Field control={Radio} label='One' value='1' checked={value === '1'} onChange={this.handleChange} />
            <Form.Field control={Radio} label='Two' value='2' checked={value === '2'} onChange={this.handleChange} />
            <Form.Field control={Radio} label='Three' value='3' checked={value === '3'} onChange={this.handleChange} />
          </Form.Group>
          <Form.Field control={Checkbox} label='Remember My Search Criterias' />
          <Form.Group widths='equal'>
            <Form.Field size="large" control={Button}>Search</Form.Field>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default SidebarLeftSlideAlong