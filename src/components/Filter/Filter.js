import { FilterContainer, FindGroup, Findinput } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { findContact } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = filters => dispatch(findContact(filters));

  return (
    <FilterContainer>
      <FindGroup>
        Find contacts by name
        <Findinput
          type="text"
          name="filters"
          onChange={evt => handleFilter(evt.target.value)}
        />
      </FindGroup>
    </FilterContainer>
  );
};
