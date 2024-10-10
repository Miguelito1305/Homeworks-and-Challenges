const products = [
    { id: 1, name: 'Laptop', category: 'electrónica', price: 1000, stock: 5 },
    { id: 2, name: 'Smartphone', category: 'electrónica', price: 800, stock: 10 },
    { id: 3, name: 'Camiseta', category: 'ropa', price: 20, stock: 50 },
    { id: 4, name: 'Jeans', category: 'ropa', price: 40, stock: 20 },
    { id: 5, name: 'Cereal', category: 'alimentos', price: 5, stock: 100 },
    { id: 6, name: 'TV', category: 'electrónica', price: 600, stock: 7 },
  ];
  
  // 1. map(): Crear un array con los nombres de los productos
  const productNames = products.map(product => product.name);
  console.log('1. Nombres de productos:', productNames);
  
  // 2. filter(): Filtrar productos de la categoría "electrónica"
  const electronics = products.filter(product => product.category === 'electrónica');
  console.log('2. Productos de electrónica:', electronics);
  
  // 3. reduce(): Calcular el valor total de todos los productos en stock
  const totalValue = products.reduce((total, product) => total + (product.price * product.stock), 0);
  console.log('3. Valor total de productos en stock:', totalValue);
  
  // 4. forEach(): Imprimir el nombre de cada producto
  console.log('4. Nombres de productos (forEach):');
  products.forEach(product => console.log(product.name));
  
  // 5. find(): Encontrar el primer producto con menos de 10 unidades en stock
  const lowStock = products.find(product => product.stock < 10);
  console.log('5. Producto con menos de 10 unidades en stock:', lowStock);
  
  // 6. some(): Verificar si algún producto de "ropa" cuesta más de 50
  const hasExpensiveClothing = products.some(product => product.category === 'ropa' && product.price > 50);
  console.log('6. ¿Algún producto de ropa cuesta más de 50?:', hasExpensiveClothing);
  
  // 7. every(): Verificar si todos los productos tienen más de 3 unidades en stock
  const allInStock = products.every(product => product.stock > 3);
  console.log('7. ¿Todos los productos tienen más de 3 unidades?:', allInStock);
  
  // 8. sort(): Ordenar productos por precio de menor a mayor
  const sortedByPrice = [...products].sort((a, b) => a.price - b.price);
  console.log('8. Productos ordenados por precio:', sortedByPrice);
  
  // 9. findIndex(): Encontrar el índice del producto "Jeans"
  const jeansIndex = products.findIndex(product => product.name === 'Jeans');
  console.log('9. Índice del producto "Jeans":', jeansIndex);
  
  // 10. splice(): Remover el producto "Jeans" del array
  const removedProduct = products.splice(jeansIndex, 1);
  console.log('10. Producto eliminado:', removedProduct);
  console.log('Productos restantes:', products);
  
  // 11. includes(): Verificar si las categorías incluyen "ropa"
  const categories = products.map(product => product.category);
  const hasClothing = categories.includes('ropa');
  console.log('11. ¿Incluye "ropa" entre las categorías?:', hasClothing);
  