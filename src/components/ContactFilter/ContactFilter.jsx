// import propTypes from 'prop-types';
import { useDispatch, useSelector} from 'react-redux';

import { filterContacts } from 'redux/filterSlice';
import { BoxFilter, Label, Input } from './ContactFilter.styled';


export const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const changeFilter = e => {
    dispatch(filterContacts(e.target.value));
    console.log(filter);
  };
    

  return (
    <BoxFilter>
      <Label htmlFor="filter">Find contacts by name</Label>

      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={changeFilter}
        // disabled={dis}
      />
    </BoxFilter>
  );
};

// ContactFilter.propEypes = {
//   filter: propTypes.string,
//   onFilter: propTypes.func,
// };
