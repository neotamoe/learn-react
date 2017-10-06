import React, {Component} from 'react';
import {Form} from 'semantic-ui-react';

const options = [
  { key: 'm', name: 'Male', text: 'Male', value: 'male' },
  { key: 'f', name: 'Female', text: 'Female', value: 'female' },
]


class FormExampleCaptureValues extends Component {

  state = { name: '', email: '', submittedName: '', submittedEmail: '', favoriteNumber: '', submittedFavoriteNumber: '', submittedSex: '', sex: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { name, email, favoriteNumber, sex } = this.state

    this.setState({ submittedName: name, submittedEmail: email, submittedFavoriteNumber: favoriteNumber, submittedSex: sex })

    console.log('submittedName: ' + name + ' submittedEmail: ' + email + ' submittedFavoriteNumber: ' + favoriteNumber + ' submittedSex: ' + sex);
  }

  render() {
    const { name, email, submittedName, submittedEmail, favoriteNumber, submittedFavoriteNumber, submittedSex, sex } = this.state

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input placeholder='Name' name='name' value={name} onChange={this.handleChange} />
            <Form.Input placeholder='Email' name='email' value={email} onChange={this.handleChange} />
            <Form.Input placeholder='Favorite Number' name='favoriteNumber' value={favoriteNumber} onChange={this.handleChange} />
            <Form.Select options={options} placeholder='Sex' onChange={this.handleChange} />
            <Form.Button content='Submit' />
          </Form.Group>
        </Form>
        <strong>onChange:</strong>
        <pre>{JSON.stringify({ name, email, favoriteNumber, sex}, null, 2)}</pre>
        <strong>onSubmit:</strong>
        <pre>{JSON.stringify({ submittedName, submittedEmail, submittedFavoriteNumber, submittedSex }, null, 2)}</pre>
      </div>
    )
  }
}

export default FormExampleCaptureValues
