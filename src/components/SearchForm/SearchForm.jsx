import {  useState } from 'react'
import { ReactComponent as SearchButton } from 'components/img/icons/SearchButton.svg';
import {Form,ButtonLabel,FormInput,FormButton} from './SearchForm.styled'

export const SearchForm = ({ setSearchParams }) => {
    const [query, setQuery] = useState('');
    
  
    const handleSubmit = event => {
      event.preventDefault();
      setSearchParams({query});
      setQuery('');
    };

    
  
    const handleSearchParams = ({target:{value}}) => {
      setQuery(value);
    };
    return (
      <Form  onSubmit={handleSubmit}>
      
        <FormInput
          type="text"
          name="search"
          value={query}
          onChange={handleSearchParams}
          placeholder="Search movie..."
          autoComplete="off"
          
        />
        
        <FormButton type="submit" disabled={!query}>
          <ButtonLabel>
            <SearchButton />
          </ButtonLabel>
        </FormButton>
        
        
      </Form>
    );
  };
  export default SearchForm