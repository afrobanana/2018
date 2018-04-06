import Button from 'reactstrap/lib/Button'
import FormGroup from 'reactstrap/lib/FormGroup'
import FormText from 'reactstrap/lib/FormText'
import Input from 'reactstrap/lib/Input'
import InputGroup from 'reactstrap/lib/InputGroup'
import React from 'react'
import styled from 'styled-components'

import { maxWidth } from '../../theme'

const Form = styled.form`
  max-width: ${maxWidth};
  margin: 6vw auto;
  text-align: center;
`

export default ({ action }) => (
  <Form method="post" target="_blank" action={action}>
    <h3>Subscribe to our Newsletter!</h3>
    <p>
      <Input
        type="email"
        name="EMAIL"
        placeholder="Your email address"
        required
      />
    </p>
    <p>
      <Button type="submit" name="subscribe" bsStyle="primary">
        Subscribe!
      </Button>
    </p>
    <FormText color="muted">
      We send newsletters <strong>infrequently</strong>.
      <br />
      We keep your e-mail to ourselves and won't share it with anyone.
    </FormText>
  </Form>
)
