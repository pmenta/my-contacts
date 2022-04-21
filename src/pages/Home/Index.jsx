import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  Container, InputSearchContainer, Header, ListContainer, CardList, Card,
} from './styles';

import ArrowIcon from '../../assets/images/icons/chevron.svg';
import EditIcon from '../../assets/images/icons/edit.svg';
import TrashIcon from '../../assets/images/icons/trash.svg';

import { formatPhone } from '../../utils/formatPhone';

import { getContacts } from '../../requests/Contacts';

export function Home() {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const fetchedContacts = await getContacts();
        setContacts(fetchedContacts);
      } catch {
        if (isLoading) setIsLoading(false);
      }
    })();
  }, []);

  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>
      <Header>
        <strong>
          3 contatos
        </strong>
        <Link to="/new">Novo contato</Link>
      </Header>
      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={ArrowIcon} alt="Flecha" width={14} height={19} />
          </button>
        </header>
        <CardList>
          {contacts.map((contact) => (
            <Card key={contact.id}>
              <div>
                <div>
                  <strong>{contact.name}</strong>
                  {contact.category_name && <small>{contact.category_name}</small>}
                </div>
                <span>{contact.email}</span>
                <span>{formatPhone(contact.phone)}</span>
              </div>
              <div>
                <a href="/"><img src={EditIcon} alt="Editar" width={20} height={22} /></a>
                <button type="button"><img src={TrashIcon} alt="Excluir" width={20} height={22} /></button>
              </div>
            </Card>
          ))}
        </CardList>
      </ListContainer>
    </Container>
  );
}
