import { PageHeader } from '../../components/PageHeader';
import { ContactForm } from '../../components/ContactsForm';

export function EditContact() {
  return (
    <>
      <PageHeader title="Editar contato" />
      <ContactForm buttonLabel="Editar" />
    </>
  );
}
