// import propTypes from 'prop-types';
import { useDispatch, useSelector} from 'react-redux';

import { filterContacts, getFilterValue } from '../../redux/filtersSlice';

import { BoxFilter, Label, Input } from './ContactFilter.styled';


export const ContactFilter = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  

  const filterValue = useSelector(getFilterValue);


  // const changeFilter = e => {
  //   console.log(e.target.value);
    
  //   if (filter) {
  //     console.log("HHHHHHHH");
  //     console.log(contacts);

  //     return contacts.filter(
  //       contact =>contact.name.toLowerCase().includes(filter));
      
  //   } 

  //   // return contactsFilter;
  //   dispatch(filterContacts(e.target.value));
  //   console.log(filter);
  // };
    

  return (
    <BoxFilter>
      <Label htmlFor="filter">Find contacts by name</Label>

      <Input
        type="text"
        name="filter"
        value={filterValue}
        onChange={event => dispatch(filterContacts(event.currentTarget.value))}
        // disabled={dis}
      />
    </BoxFilter>
  );
};

// ContactFilter.propEypes = {
//   filter: propTypes.string,
//   onFilter: propTypes.func,
// };
