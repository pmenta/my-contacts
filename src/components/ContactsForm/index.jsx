import PropTypes from 'prop-types';
import { FormGroup } from '../FormGroup';
import { Input } from '../Input';
import { Select } from '../Select';
import { Button } from '../Button';

import { Form } from './styles';

export function ContactForm({ buttonLabel }) {
  return (
    <Form>
      <FormGroup><Input type="text" placeholder="Nome" /></FormGroup>
      <FormGroup><Input type="email" placeholder="Email" /></FormGroup>
      <FormGroup><Input type="phone" placeholder="Telefone" /></FormGroup>
      <FormGroup>
        <Select>
          <option value="123">Instagram</option>
          <option value="123">Instagram</option>
          <option value="123">Instagram</option>
        </Select>
      </FormGroup>
      <Button type="submit">{buttonLabel}</Button>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
