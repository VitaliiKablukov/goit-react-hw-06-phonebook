export const getContacts = state => state.contacts;
export const getFilterText = state => {
  if (state.filter) {
    return state.filter;
  } else return '';
};
