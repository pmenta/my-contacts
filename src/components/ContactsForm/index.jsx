// import { useRef } from 'react';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';

import { FormGroup } from '../FormGroup';
import { Input } from '../Input';
import { Select } from '../Select';
import { Button } from '../Button';

import { Form } from './styles';

export function ContactForm({ buttonLabel }) {
  const {
    register, handleSubmit, formState: { errors }, control,
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  // const maskRef = useRef(null);
  // console.log(getValues('phone'));

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
          {...register('email', { required: true, mode: 'onChange', pattern: /^\S+@\S+\.\S+$/ })}
          error={errors.email}
          type="email"
          placeholder="Email"
        />
      </FormGroup>
      <FormGroup error={errors.phone ? 'Insira um telefone válido' : ''}>
        <Controller
          name="phone"
          control={control}
          rules={{ required: true, minLength: 16 }}
          defaultValue=""
          render={({ field }) => (
            <InputMask
              {...field}
              mask="(99) 9 9999-9999"
              maskChar=""
              alwaysShowMask={false}
              type="phone"
              placeholder="Telefone"
              error={errors.phone}
            >
              {(inputProps) => (
                <Input
                  {...inputProps}
                />
              )}
            </InputMask>
          )}
        />
      </FormGroup>
      <FormGroup error={errors.category?.type === 'required' ? 'Selecione uma categoria' : ''}>
        <Select
          {...register('category', { required: true })}
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
