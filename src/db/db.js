// db.js
import Dexie from 'dexie';

export const db = new Dexie('bares');
db.version(1).stores({
  productos: '++id, name, age'
});