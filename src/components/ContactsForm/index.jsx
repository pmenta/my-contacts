import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import { FormGroup } from '../FormGroup';
import { Input } from '../Input';
import { Select } from '../Select';
import { Button } from '../Button';

import { Form } from './styles';
import { formatPhone } from '../../utils/formatPhone';

export function ContactForm({ buttonLabel }) {
  const {
    register, handleSubmit, formState: { errors }, setValue,
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  const phoneRegex = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/;

  return (
    <Form onSubmit={handleSubmit(onSubmit)} noValidate>
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
      <FormGroup error={errors.email ? 'Insira um e-mail válido' : ''}>
        <Input
          {...register('email', { required: false, pattern: /^\S+@\S+\.\S+$/ })}
          error={errors.email}
          type="email"
          placeholder="Email"
        />
      </FormGroup>
      <FormGroup error={errors.phone ? 'Insira um telefone válido' : ''}>
        <Input
          {...register('phone', { required: false, mode: 'onChange', pattern: phoneRegex })}
          error={errors.phone}
          type="phone"
          placeholder="Telefone"
          onChange={(ev) => setValue('phone', formatPhone(ev.currentTarget.value), { shouldValidate: true })}
        />
      </FormGroup>
      <FormGroup error={errors.category?.type === 'required' ? 'Selecione uma categoria' : ''}>
        <Select
          {...register('category', { required: false })}
          error={errors.category}
        >
          <option value="">Selecione uma categoria</option>
          <option value="instagram">Instagram</option>
          <option value="trabalho">Trabalho</option>
        </Select>
      </FormGroup>
      <Button type="submit">{buttonLabel}</Button>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
