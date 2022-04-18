import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import { FormGroup } from '../FormGroup';
import { Input } from '../Input';
import { Select } from '../Select';
import { Button } from '../Button';

import { Form } from './styles';

import { formatPhone } from '../../utils/formatPhone';

export function ContactForm({ buttonLabel }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup error={errors.name?.type === 'required' ? 'Insira um nome' : ''}>
        <Input
          {...register('name', {
            required: true,
          })}
          error={errors.name}
          type="text"
          placeholder="Nome"
        />
      </FormGroup>
      <FormGroup error={errors.email?.type === 'required' ? 'Insira um e-mail' : ''}>
        <Input
          {...register('email', { required: true })}
          error={errors.email}
          type="email"
          placeholder="Email"
        />
      </FormGroup>
      <FormGroup error={errors.phone?.type === 'required' || errors.phone?.type === 'minLength' ? 'Insira um telefone válido' : ''}>
        <Input
          {...register('phone', { required: true, minLength: 15 })}
          error={errors.phone}
          // eslint-disable-next-line no-param-reassign
          onChange={((ev) => { ev.target.value = formatPhone(ev.target.value); })}
          type="phone"
          placeholder="Telefone"
        />
      </FormGroup>
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
