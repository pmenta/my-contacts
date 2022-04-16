import { PageHeader } from '../../components/PageHeader';
import { ContactForm } from '../../components/ContactsForm';

export function NewContact() {
  return (
    <>
      <PageHeader title="Novo contato" />
      <ContactForm />
    </>
  );
}
