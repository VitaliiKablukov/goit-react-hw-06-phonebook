import { Button } from './ContactItem.styled';
import { getContacts } from 'Redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'Redux/ContactsSlice';
import { getFilterText } from 'Redux/selectors';
export const ContactItem = () => {
  const filterText = useSelector(getFilterText);

  const contacts = useSelector(getContacts);
  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterText)
  );
  const dispatch = useDispatch();
  return visibleContacts.map(({ id, name, number }) => {
    return (
      <li key={id}>
        {name}: {number}
        <Button type="button" onClick={() => dispatch(deleteContacts(id))}>
          delete:{name}
        </Button>
      </li>
    );
  });
};
