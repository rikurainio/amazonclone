
import {useState, useEffect} from "react"
import logo from './logo.svg';
import './App.css';
import Header from "./Header"
import Cart from "./Cart"
import Home from "./Home"
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import {db, auth} from "./firebase"
import Login from "./Login"
import styled from "styled-components"

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [cartItems, setCartItems] = useState([]);

  const getCartItems = () => {
    db.collection("cartItems").onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data()
      }))
      setCartItems(tempItems);
    })
  }

  const signOut = () => {
    //sign out from auth db and reset user to null
    //also remove user from browser localStorage
    auth.signOut()
      .then(() => {
        localStorage.removeItem('user');
        setUser(null);
      })
  }

  useEffect(() => {
    getCartItems();
  }, [])

  console.log(cartItems);

  return (

    <Router>
      {!user ?
        (<Login setUser={setUser}/>)
        :(<Container>
            <Header cartItems={cartItems} user={user} signOut={signOut}/>
    
            <Switch>
              <Route path="/cart">
                <Cart cartItems={cartItems}/>
              </Route>
    
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Container>)}
  </Router>
  );
}

const Container = styled.div`
`

export default App;
