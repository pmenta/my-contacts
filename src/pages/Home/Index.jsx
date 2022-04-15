import {
  Container, InputSearchContainer, Header, ListContainer, CardList, Card,
} from './styles';

import ArrowIcon from '../../assets/images/icons/chevron.svg';
import EditIcon from '../../assets/images/icons/edit.svg';
import TrashIcon from '../../assets/images/icons/trash.svg';

export function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>
      <Header>
        <strong>
          3 contatos
        </strong>
        <a href="/">Novo contato</a>
      </Header>
      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={ArrowIcon} alt="Flecha" width={14} height={19} />
          </button>
        </header>
        <CardList>
          <Card>
            <div>
              <div>
                <strong>Mateus Silva</strong>
                <small>instagram</small>
              </div>
              <span>mateus@devacadamy.com.br</span>
              <span>(73) 9 9904-4965</span>
            </div>
            <div>
              <a href="/"><img src={EditIcon} alt="Editar" width={20} height={22} /></a>
              <button type="button"><img src={TrashIcon} alt="Excluir" width={20} height={22} /></button>
            </div>
          </Card>

          <Card>
            <div>
              <div>
                <strong>Mateus Silva</strong>
                <small>instagram</small>
              </div>
              <span>mateus@devacadamy.com.br</span>
              <span>(73) 9 9904-4965</span>
            </div>
            <div>
              <a href="/"><img src={EditIcon} alt="Editar" width={20} height={22} /></a>
              <button type="button"><img src={TrashIcon} alt="Excluir" width={20} height={22} /></button>
            </div>
          </Card>

          <Card>
            <div>
              <div>
                <strong>Mateus Silva</strong>
                <small>instagram</small>
              </div>
              <span>mateus@devacadamy.com.br</span>
              <span>(73) 9 9904-4965</span>
            </div>
            <div>
              <a href="/"><img src={EditIcon} alt="Editar" width={20} height={22} /></a>
              <button type="button"><img src={TrashIcon} alt="Excluir" width={20} height={22} /></button>
            </div>
          </Card>

        </CardList>
      </ListContainer>
    </Container>
  );
}
