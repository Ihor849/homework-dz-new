import PropTypes from 'prop-types';
import { UpTop } from './ButtonUpTop.styled';
import { ReactComponent as Up } from 'components/img/icons/rocket_icon_187836 (1).svg';

const ButtonUpTop = ({ onClick }) => {
  return (
    <UpTop type="button" className="up-top" onClick={onClick}>
      <Up />
    </UpTop>
  );
};
export default ButtonUpTop
ButtonUpTop.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};
