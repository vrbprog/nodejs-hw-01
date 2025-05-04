import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const generateContacts = async (number) => {
  let data = [];

  try {
    data = await readContacts();
  } catch (error) {
    return error.message;
  }

  for (let i = 0; i < number; i++) {
    data.push(createFakeContact());
  }

  try {
    await writeContacts(data);
  } catch (error) {
    return error.message;
  }
};

generateContacts(5);
