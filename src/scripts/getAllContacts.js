import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  let data = [];

  try {
    data = await readContacts();
  } catch (error) {
    return error.message;
  }

  return data;
};

console.log(await getAllContacts());
