import { PageHeader } from '../../components/PageHeader';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';

export function NewContact() {
  return (
    <>
      <PageHeader title="Novo contato" />
      <Input type="text" placeholder="Nome" />
      <Select>
        <option>Categoria</option>
        <option>Instagram</option>
        <option>Instagram</option>
      </Select>
    </>
  );
}
