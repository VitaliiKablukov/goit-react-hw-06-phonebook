import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'Redux/FilterContacts';
export const Filter = () => {
  const dispatch = useDispatch();
  const filterText = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <Fragment>
      <label htmlFor="filter">Find contacts by name</label>
      <input type="text" name="filter" onChange={filterText} />
    </Fragment>
  );
};
