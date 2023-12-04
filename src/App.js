import './App.css';
import Header from './common/header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom';
import Pages from './pages/Pages';
import Data from './components/flashDeals/Data';
import {  useState } from 'react';
import Cart from './common/cart/Cart';

import Sdata from './components/shops/Sdata';
import Footer from './common/footer/Footer';
import UserAcount from './components/userAcount/UserAcount';
import Bill from './components/bill/Bill';
//import Register from './components/userAcount/Register';
import Login from './components/userAcount/Login';
import VendorAccount from './components/vendorAccount/VendorAccount';

function App() {
  const usersT = [
    { id: 1, username: 'admin', password: 'admin123', role: 'ADMIN',userlastname:'admin', usermail:'admin@admin' },
    { id: 2, username: 'cliente1', password: 'cliente123', role: 'CLIENTE', userlastname: 'lastname', userdirection: 'direction', usercel: '0000', userdui: '0000', usermail:'mail@mail', },
    // ... otros usuarios
  ];

  //para manejar usuarios....
  const [authenticatedUser, setAuthenticatedUser] = useState('');

  const handleLogin = (username, password) => {
    // Lógica de autenticación aquí
    const user = usersT.find((user) => user.username === username && user.password === password);

    if (user) {
      setAuthenticatedUser(user);
    } else {
      console.log('please try again');
    }
    
  };

  const handleLogout = () => {
    setAuthenticatedUser(null);
  };  


  //--------------------
  const [users, setUsers] = useState([]);

  const handleRegister = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };



  //Para manejar eventos de producto
  const { productItems } = Data
  const { shopItems } = Sdata
  const [cartItem, setCartItem] = useState([])

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }])
    }
  }

  //Reducir los items del carrito
  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    if (productExit.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  //Eliminar los itemns del carrito de una vez
  const removeProduct = (product) => {
    setCartItem(cartItem.filter((item) => item.id !== product.id));
  }

  //Limpiar todo le carrito al hacer la compra
  const clearCart = () => {
    

    // Restar la cantidad total del carrito solo al producto seleccionado
    const updatedProductItems = productItems.map((item) => {
      const cartItemMatch = cartItem.find((cartProduct) => cartProduct.id === item.id);

      if (cartItemMatch) {
        return {
          ...item,
          quantity: item.quantity - cartItemMatch.qty,
        };
      }

      return item;
    });

    // Actualizar productItems con la nueva cantidad
    Data.productItems = updatedProductItems;

    setCartItem([]);
  }

// Función de búsqueda
const searchProducts = (query) => {
  // Convertir la consulta a minúsculas para hacer la búsqueda sin distinción entre mayúsculas y minúsculas
  const lowercaseQuery = query.toLowerCase();

  // Filtrar productos que coincidan con la consulta en el nombre o descripción
  const searchResults = productItems.filter((product) => {
    const lowercaseName = product.name.toLowerCase();
    const lowercaseDescription = (product.description || '').toLowerCase(); // Manejar descripciones nulas

    return lowercaseName.includes(lowercaseQuery) || lowercaseDescription.includes(lowercaseQuery);
  });

  return searchResults;
};

  return (
    <>

<Router>
        <Header cartItem={cartItem} searchProducts={searchProducts} authenticatedUser={authenticatedUser}/>

        {authenticatedUser ? (
          <Switch>
            {/* Rutas protegidas para usuarios autenticados */}
            <Route path="/" exact>
                <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} authenticatedUser={authenticatedUser}/>
            </Route>
            <Route path="/cart" exact>
              <Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} removeProduct={removeProduct} />
            </Route>
            <Route path="/user" exact>
              <UserAcount users={users} onRegister={handleRegister} onLogin={handleLogin} authenticatedUser={authenticatedUser} onLogout={handleLogout}/>
            </Route>
            <Route path="/bill" exact>
              <Bill users={users} cartItem={cartItem} clearCart={clearCart} authenticatedUser={authenticatedUser}/>
            </Route>
            <Route path="/vendor" exact>
              <VendorAccount/>
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Login onLogin={handleLogin}/>
          </Switch>
        )}

        <Footer />
      </Router>

    </>
  );
}


export default App;
