const productos = [
  {
    id: "1",
    categoria: "Aceites",
    nombre: "Love Potion Rojo",
    detalle: "Aceite corporal para masajes con fragancia a frutilla",
    precio: 1000,
    stock: 50,
    imagen: "../../src/assets/Productos/aceite-1.jpeg",
    agregado: false,
  },

  {
    id: "2",
    categoria: "Aceites",
    nombre: "Love Potion Morado",
    detalle: "Aceite corporal para masajes con fragancia a frutos rojos",
    precio: 1000,
    stock: 50,
    imagen: "../../src/assets/Productos/aceite-2.jpeg",
    agregado: false,
  },
  {
    id: "3",
    categoria: "Aceites",
    nombre: "Love Potion Rosa",
    detalle: "Aceite corporal para masajes con fragancia a algodón de azucar",
    precio: 1000,
    stock: 50,
    imagen: "../../src/assets/Productos/aceite-3.jpeg",
    agregado: false,
  },
  {
    id: "4",
    categoria: "Aceites",
    nombre: "Sexitive",
    detalle: "Aceite corporal para masajes con fragancia floral",
    precio: 1000,
    stock: 50,
    imagen: "../../src/assets/Productos/aceite-4.jpeg",
    agregado: false,
  },
  {
    id: "5",
    categoria: "Aceites",
    nombre: "Fly Night",
    detalle: "Aceite corporal para masajes con fragancia de vainilla y coco",
    precio: 5000,
    stock: 50,
    imagen: "../../src/assets/Productos/aceite-5.jpeg",
    agregado: false,
  },
  {
    id: "6",
    categoria: "Lubricantes",
    nombre: "Sextual Sens",
    detalle: "Gel lubricante íntimo con aroma a frutilla",
    precio: 1500,
    stock: 50,
    imagen: "../../src/assets/Productos/gel-1.jpeg",
    agregado: false,
  },
  {
    id: "7",
    categoria: "Lubricantes",
    nombre: "Sexitive Lube Suprime",
    detalle: "Gel lubricante íntimo con efecto retardante",
    precio: 1500,
    stock: 50,
    imagen: "../../src/assets/Productos/gel-2.jpeg",
    agregado: false,
  },
  {
    id: "8",
    categoria: "Lubricantes",
    nombre: "Sexitive Lube Relaxing",
    detalle:
      "Gel lubricante íntimo con efecto relajante que contine jojoba y manzanilla",
    precio: 1500,
    stock: 50,
    imagen: "../../src/assets/Productos/gel-3.jpeg",
    agregado: false,
  },
  {
    id: "9",
    categoria: "Lubricantes",
    nombre: "SXV Wet",
    detalle: "Gel intimo lubricante con extracto de ácido hialuronico",
    precio: 1500,
    stock: 50,
    imagen: "../../src/assets/Productos/gel-4.jpeg",
    agregado: false,
  },
  {
    id: "10",
    categoria: "Lubricantes",
    nombre: "Sextual Natural",
    detalle: "Gel lubricante íntimo neutro",
    precio: 1500,
    stock: 50,
    imagen: "../../src/assets/Productos/gel-5.jpeg",
    agregado: false,
  },
];

export const gFetch = () => {
  return new Promise((res, rej) =>
    setTimeout(() => {
      res(productos);
    }, 1000)
  );
};

/*
- Crear base de datos de Firebase en ingles

- Agregar condicionales en ItemListContainer para verificar que el array de productos de 
Firebase no este vacio.
- Modificar UseEffect para cargar detalles en en itemDetailContainer.
- Crear componente para detalles de item en el CartContainer.
- Renombrar todas las funciones con nombre en ingles.
- Modicicar apariciencia de los botones de ItemDescription

*/
