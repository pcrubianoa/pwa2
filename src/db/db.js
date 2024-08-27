import Dexie from 'dexie';

export const db = new Dexie('logis-bares');

db.version(1).stores({
  productos: '++id,id,id_producto,cod,nombre,precio_venta,marca,familia,id_familia,id_categoria,imagen,favorito,actual,created_at',
  favoritos: '++id,id_producto,cod,nombre,precio_venta,marca,familia,id_familia,imagen,created_at',
  categorias: '++id,nombre,created_at',
  familias: '++id,nombre,ver,created_at',
  configuracion: '++id,id_usuario,usuario,nombre,consecutivo,apiKey,pw,id_almacen,id_tercero,establecimiento,direccion,telefono,doc_activo,servidor_impresion,impresora,vista_mesas,imagen_detalle,inventario,created_at',
  documentos: '++id,id_tercero,id_forma_pago,sutotal,total,recibido,cambio,estado,created_at',
  documentos_detalle: '++id,id_tercero,id_mesa,id_mesero,id_producto,cod,nombre,producto,imagen,cantidad,estado,unitario,impreso,mesa,iva,total,observacion,filtros,created_at,updated_at,captured_at',
  sincronizacion: '++id,tabla,no_registros,icono,created_at',
});

db.open().catch((err) => {
  console.error('Error al abrir la base de datos:', err);
});