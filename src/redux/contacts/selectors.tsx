import { createSelector } from '@reduxjs/toolkit';
import { IState } from 'types/typers';

export const selectContacts = (state: IState) => state.contacts.items;
export const selectFilterName = (state: IState) => state.contacts.filter;
export const selectLoading = (state: IState) => state.contacts.isLoading;
export const selectErrorMessage = (state: IState) => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilterName],
  (contacts, filterName) => {
    const filterNameNormalized = filterName.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNameNormalized)
    );
  }
);
