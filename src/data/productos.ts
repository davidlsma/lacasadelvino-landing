export interface Producto {
  id: string;
  nombre: string;
  varietal: string;
  imagen: string;
  categoria: 'vino' | 'whisky';
}

export const productos: Producto[] = [
  {
    id: 'glenmorangie',
    nombre: 'Glenmorangie',
    varietal: 'The Original 10 Años',
    imagen: 'promo-glenmorangie.jpg',
    categoria: 'whisky',
  },
  {
    id: 'cognac-reserva',
    nombre: 'Reserva San Juan',
    varietal: 'Coñac V.S.O.P. Añejo',
    imagen: 'promo-cognac.jpg',
    categoria: 'vino',
  },
  {
    id: 'jagermeister',
    nombre: 'Jägermeister',
    varietal: 'Regalo + Gorra',
    imagen: 'promo-jagermeister.jpg',
    categoria: 'vino',
  },
  {
    id: 'heineken-barril',
    nombre: 'Heineken',
    varietal: 'Barril 5 Litros',
    imagen: 'promo-heineken.jpg',
    categoria: 'vino',
  },
];
