// db.js
import Dexie from 'dexie';

// Crear una instancia de Dexie y definir la base de datos
export const db = new Dexie('logis-bares');

// Definir las tablas y sus índices
db.version(1).stores({
  productos: '++index,id,id_producto,cod,nombre,precio_venta,marca,familia,id_familia,id_categoria,imagen,favorito,actual,created_at',
  favoritos: '++index,id_producto,cod,nombre,precio_venta,marca,familia,id_familia,imagen,created_at',
  categorias: '++index,nombre,created_at',
  familias: '++index,nombre,ver,created_at',
  configuracion: '++index,id_usuario,usuario,nombre,consecutivo,apiKey,pw,id_almacen,id_tercero,establecimiento,direccion,telefono,doc_activo,servidor_impresion,impresora,vista_mesas,imagen_detalle,inventario,created_at',
  documentos: '++index,id,id_tercero,id_forma_pago,sutotal,total,recibido,cambio,estado,created_at',
  documentos_detalle: '++index,id_tercero,id_mesa,id_mesero,id_producto,cod,nombre,producto,imagen,cantidad,estado,unitario,impreso,mesa,iva,total,observacion,filtros,created_at,updated_at,captured_at',
  sincronizacion: '++index,tabla,no_registros,icono,created_at',
});

// Abrir la base de datos
db.open().catch((err) => {
  console.error('Error al abrir la base de datos:', err);
});

