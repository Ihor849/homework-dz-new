// import propTypes from 'prop-types';
import {useState} from 'react'
import { Item, Button, Wrapper,Wrapname } from './ContactsItem.styled';
import { useDispatch} from 'react-redux';



export const ContactItem = ({ id, name, number, onDelete, updateContact}) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editNumber, setEditNumber] = useState(number)

  const onEditContact=()=>{
   

    setIsEdit(prevState=>!prevState);
    if(isEdit){
      const contact = {
        id: id,
        name: editName,
        number:editNumber,
      }
      
      dispatch(updateContact(contact));
    }
    
  };

  const handleChange =(e)=>{
    const {value,name }=e.currentTarget

    switch(name){
    case "editName":
      setEditName(value)
      break;
    case "editNumber": {
      setEditNumber(value)
      break;

    }
    default:  break;
  }
   
  }
  return (
    <Item key={id}>
      {isEdit
       ?
      <Wrapper>
        <Wrapname>
          <label htmlFor="editName">Name
            <input type='text'name="editName" onChange={handleChange} value={editName}/>
          </label>
        </Wrapname>
        <Wrapname>
          <label htmlFor="editNumber">Number
            <input type='text' name="editNumber" onChange={handleChange} value={editNumber}/>
          </label>
        </Wrapname>
      </Wrapper>
      : 
      <>
      <span>{name}</span>
      <span>{number}</span>
      </>
      }
     
      
      <Button type="button" onClick={onEditContact}>
        {isEdit? "Save contact" :"Edit contact"}
        </Button>
      <Button type="button" onClick={() => onDelete(id, name)}>
        Delete
      </Button>
    </Item>
  );
};


// ContactItem.propTypes = {
//   name: propTypes.string.isRequired,
//   id: propTypes.string.isRequired,
//   number: propTypes.string.isRequired,
//   onDelete: propTypes.func.isRequired,
// };
