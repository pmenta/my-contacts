import Logo from '../../assets/images/logo.svg';
import { HeaderContainer, InputSearchContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="My Contacts" />
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>
    </HeaderContainer>
  );
}
