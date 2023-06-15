import { useDispatch, useSelector } from 'react-redux';



import defaultAvatar from '../../img/icons/default-avatar.png'
import { Button, ContainerUser, IMG, Span } from 'components/SharedLayout/SharedLayout.styled';
import { authOperations, authSelectors } from 'redux/auth';




export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <ContainerUser>
      <IMG src={avatar} alt=""  />
      <Span >Добро пожаловать, {name}</Span>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </Button>
    </ContainerUser>
  );
}