import { Input } from '../Input';
import { Select } from '../Select';
import { Button } from '../Button';

import { Form } from './styles';

export function ContactForm() {
  return (
    <Form>
      <Input type="text" placeholder="Nome" />
      <Input type="email" placeholder="Email" />
      <Input type="phone" placeholder="Email" />
      <Select>
        <option value="123">Instagram</option>
        <option value="123">Instagram</option>
        <option value="123">Instagram</option>
      </Select>
      <Button type="submit">Cadastrar</Button>
    </Form>
  );
}
