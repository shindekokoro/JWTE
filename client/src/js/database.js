import { openDB } from 'idb';

const initDB = async () =>
  openDB('jwte', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jwte')) {
        console.log('JWTE database already exists');
        return;
      }
      db.createObjectStore('jwte', { keyPath: 'id', autoIncrement: true });
      console.log('JWTE database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => console.error('putDb not implemented');

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');

initDB();
