import { resolverAlmacen } from './resolvers/almacen';
import { resolverBodega } from './resolvers/Bodega';
import { resolverCliente } from './resolvers/clientes';
import { resolverDespacho } from './resolvers/Despachos';
import { resolverIngreso } from './resolvers/Ingresos';

export const Resolver = [resolverAlmacen, resolverBodega, resolverCliente,
resolverDespacho, resolverIngreso];