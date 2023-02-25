const productos = [
  {
    id: "1",
    categoria: "Aceites",
    nombre: "Love Potion Rojo",
    detalle: "Aceite corporal para masajes con fragancia a frutilla",
    precio: 1000,
    stock: 50,
    imagen: "../../src/assets/Productos/aceite-1.jpeg",
  },

  {
    id: "2",
    categoria: "Aceites",
    nombre: "Love Potion Morado",
    detalle: "Aceite corporal para masajes con fragancia a frutos rojos",
    precio: 1000,
    stock: 50,
    imagen: "../../src/assets/Productos/aceite-2.jpeg",
  },
  {
    id: "3",
    categoria: "Aceites",
    nombre: "Love Potion Rosa",
    detalle: "Aceite corporal para masajes con fragancia a algodón de azucar",
    precio: 1000,
    stock: 50,
    imagen: "../../src/assets/Productos/aceite-3.jpeg",
  },
  {
    id: "4",
    categoria: "Aceites",
    nombre: "Sexitive",
    detalle: "Aceite corporal para masajes con fragancia floral",
    precio: 1000,
    stock: 50,
    imagen: "../../src/assets/Productos/aceite-4.jpeg",
  },
  {
    id: "5",
    categoria: "Aceites",
    nombre: "Fly Night",
    detalle: "Aceite corporal para masajes con fragancia de vainilla y coco",
    precio: 5000,
    stock: 50,
    imagen: "../../src/assets/Productos/aceite-5.jpeg",
  },
  {
    id: "6",
    categoria: "Lubricantes",
    nombre: "Sextual Sens",
    detalle: "Gel lubricante íntimo con aroma a frutilla",
    precio: 1500,
    stock: 50,
    imagen: "../../src/assets/Productos/gel-1.jpeg",
  },
  {
    id: "7",
    categoria: "Lubricantes",
    nombre: "Sexitive Lube Suprime",
    detalle: "Gel lubricante íntimo con efecto retardante",
    precio: 1500,
    stock: 50,
    imagen: "../../src/assets/Productos/gel-2.jpeg",
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
  },
  {
    id: "9",
    categoria: "Lubricantes",
    nombre: "SXV Wet",
    detalle: "Gel intimo lubricante con extracto de ácido hialuronico",
    precio: 1500,
    stock: 50,
    imagen: "../../src/assets/Productos/gel-4.jpeg",
  },
  {
    id: "10",
    categoria: "Lubricantes",
    nombre: "Sextual Natural",
    detalle: "Gel lubricante íntimo neutro",
    precio: 1500,
    stock: 50,
    imagen: "../../src/assets/Productos/gel-5.jpeg",
  },
];

export const gFetch = () => {
  return new Promise((res, rej) =>
    setTimeout(() => {
      res(productos);
    }, 1000)
  );
};
