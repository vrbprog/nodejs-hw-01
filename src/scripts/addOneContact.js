import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  let data = [];

  try {
    data = await readContacts();
  } catch (error) {
    return error.message;
  }

  data.push(createFakeContact());

  try {
    await writeContacts(data);
  } catch (error) {
    return error.message;
  }
};

addOneContact();
