
export const productos = [{"id":"1", "nombre":"Red Hot Chilli Peppers", "categoria": "Sal Marina", "caracteristicas": "Cristales de Sal marina con ardientes ajíes molidos. Ideal para comidas vibrantes que despierten temperatura. Pensado para aquellos que les gusta cocinar con sabores picantes robustos.", "precio": "200", "stock": "5"},
{"id":"2", "nombre":"Ginger", "categoria": "Sal Marina", "caracteristicas": "Intenso sabor a jengibre que perfumará todas tus comidas. Los recomendamos para darle un toque especial a verduras, carnes blancas y sopas.", "precio": "400", "stock": "4"},
{"id":"3", "nombre":"Garlic", "categoria": "Sal Marina", "caracteristicas": "Es la perfecta combinación de sal marina y ajitos tostados para darle el sabor más rico a tus preparaciones!", "precio": "325", "stock": "6"} ]

export const task = new Promise((res, rej) => {
    res(productos);
  });
  setTimeout(() => {
    task
      .then((res) => {
        res.forEach((item) => {
          console.log(item);
        });
      })
      .catch((err) => {
        console.log('Hubo un error');
      });
  }, 3000);