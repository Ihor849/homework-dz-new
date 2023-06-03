// import propTypes from 'prop-types';
import {useState} from 'react'
import Notiflix from 'notiflix';
import { Item, Button, Wrapper,Wrapname } from './ContactsItem.styled';
import { useDispatch} from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';



export const ContactItem = ({ id, name, number, updateContact}) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editNumber, setEditNumber] = useState(number)

  const onEditContact=(id, name, number)=>{
   

    setIsEdit(prevState=>!prevState);
    if(isEdit){
      const editContact = {
        id: id,
        name: editName,
        number:editNumber,
      }
      
      dispatch(updateContact(editContact));
    }
    
  };

  const handleChange =(e)=>{
    const {value,name }=e.currentTarget
    console.log(e.currentTarget.value);
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

  const onDelete = (id, name) => {
      Notiflix.Confirm.show(
        'Confirm',
        ` Do You want to delete a ${name}?`,
        'Yes',
        'No',
        () => {
          
          dispatch(deleteContact(id))
          
        },
        () => {},
        {
          titleColor: '#ce6214',
          titleFontSize: '20px',
          messageColor: '#1e1e1e',
          messageFontSize: '20px',
        }
      );
    };

  return (
    <Item key={id}>
      {isEdit
       ?
      <Wrapper>
        <Wrapname>
          <label htmlFor="editName">Name
            <input 
            type='text'
            name="editName"
            onChange={handleChange}
            value={editName}/>
          </label>
        </Wrapname>
        <Wrapname>
          <label htmlFor="editNumber">Number
            <input 
            type='text' 
            name="editNumber" 
            onChange={handleChange} 
            value={editNumber}/>
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

