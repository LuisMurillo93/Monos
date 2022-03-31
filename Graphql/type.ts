import { gql } from 'apollo-server-express';
import { TypeAlmacen } from './tipos/almacen';
import { TypeBodega } from './tipos/Bodega';
import { TypeCliente } from  './tipos/clientes';
import { TypeDespacho } from  './tipos/Despachos';
import { TypeIngreso } from  './tipos/Ingresos';

const TypeG = gql`
    scalar Date
`;

export  const Tipos = [TypeG, TypeAlmacen, TypeBodega, TypeCliente,
TypeDespacho, TypeIngreso];
