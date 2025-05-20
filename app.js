// iniciamos el mudulo expres 
const express = require('express');
const app = express();
const postsRouter = require('./routes/posts');

app.use(express.json());
app.use('/posts', postsRouter);

app.listen(5501, () => {
  console.log('Servidor ejecutándose en http://localhost:5501');
});

//body - perser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// se crean las rutas 
app.get('/', (req, res) => {
    res.send('prueba 1 respuesta del servidor');
});
app.listen(1999)

 
app.listen(1999, () => {
  console.log("Servidor en puerto 1999");
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error("El puerto 1999 está en uso");
  }
});

// ruta base 
const postRoutes = require('routes/posts');
app.use('./api/post', postRoutes);

// Ejemplo en routes/post.js
router.get('/', getPosts);          // GET /api/posts
router.post('/', createPost);       // POST /api/posts
router.get('/:id', getPostById);    // GET /api/posts/1



// prueba del servidor 

import { mount } from '@vue/test-utils';
import ProductCard from '@/components/ProductCard.vue';

describe('ProductCard.vue', () => {
  it('muestra el nombre y precio del producto', () => {
    const wrapper = mount(ProductCard, {
      props: {
        product: { name: 'Anillo de Esmeralda', price: 500 }
      }
    });
    expect(wrapper.text()).toContain('Anillo de Esmeralda');
    expect(wrapper.text()).toContain('$500');
  });
});


