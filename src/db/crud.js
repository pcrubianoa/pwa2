import { db } from "./db";

export const crud = {
  // Leer todos los registros de una tabla
  getAll: async (tableName) => {
    try {
      return await db[tableName].toArray();
    } catch (error) {
      console.error(`Error al leer los registros de la tabla ${tableName}:`, error);
    }
  },

  getById: async (tableName, id) => {
    try {
      return await db[tableName].get(id);
    } catch (error) {
      console.error(`Error al leer el registro con ID ${id} de la tabla ${tableName}:`, error);
    }
  },

  getByIndex: async (tableName, indexName, value) => {
    try {
      return await db[tableName].where(indexName).equals(value).first();
    } catch (error) {
      console.error(`Error al leer el registro con ${indexName} = ${value} de la tabla ${tableName}:`, error);
    }
  },

  // Insertar un nuevo registro en una tabla
  add: async (tableName, data) => {
    try {
      await db[tableName].add(data);
      console.log(`Registro agregado en la tabla ${tableName}:`, data);
    } catch (error) {
      console.error(`Error al agregar un registro en la tabla ${tableName}:`, error);
    }
  },

  // Insertar un nuevo registro en una tabla
  bulkAdd: async (tableName, data) => {
    try {
      await db[tableName].bulkAdd(data);
      console.log(`Registro agregado en la tabla ${tableName}:`);
    } catch (error) {
      console.error(`Error al agregar un registro en la tabla ${tableName}:`, error);
    }
  },

  // Actualizar un registro en una tabla
  update: async (tableName, id, changes) => {
    try {
      await db[tableName].update(id, changes);
      console.log(`Registro con id ${id} actualizado en la tabla ${tableName}`);
    } catch (error) {
      console.error(`Error al actualizar un registro en la tabla ${tableName}:`, error);
    }
  },

  // Eliminar un registro por su id en una tabla
  delete: async (tableName, id) => {
    try {
      await db[tableName].delete(id);
      console.log(`Registro con id ${id} eliminado de la tabla ${tableName}`);
    } catch (error) {
      console.error(`Error al eliminar un registro en la tabla ${tableName}:`, error);
    }
  },

  clear: async (tableName) => {
    try {
      await db[tableName].clear();
      console.log(`Registros eliminados de la tabla ${tableName}`);
    } catch (error) {
      console.error(`Error al eliminar un registro en la tabla ${tableName}:`, error);
    }
  }
};
