import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  let data = [];

  try {
    data = await readContacts();
  } catch (error) {
    return error.message;
  }

  return data.length;
};

console.log(await countContacts());
