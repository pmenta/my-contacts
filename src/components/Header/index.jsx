import Logo from '../../assets/images/logo.svg';
import { HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="My Contacts" width={201} height={34.83} />
    </HeaderContainer>
  );
}
