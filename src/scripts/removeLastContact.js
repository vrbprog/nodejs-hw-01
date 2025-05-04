import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  let data = [];

  try {
    data = await readContacts();
  } catch (error) {
    return error.message;
  }

  if (data.length === 0) {
    return 'No contacts to remove';
  }

  data.pop();

  try {
    await writeContacts(data);
  } catch (error) {
    return error.message;
  }
};

removeLastContact();
