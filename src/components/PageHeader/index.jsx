import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container } from './styles';

import ChevronIcon from '../../assets/images/icons/chevron.svg';

export function PageHeader({ title }) {
  return (
    <Container>
      <Link to="/">
        <img src={ChevronIcon} alt="Voltar" width="14" height="19" />
        <span>Voltar</span>
      </Link>
      <h1>{ title }</h1>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
