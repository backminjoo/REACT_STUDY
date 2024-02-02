import logo from './logo.svg';
import {Button, Navbar, Container, Nav} from 'react-bootstrap';
import './App.css';
import { createContext, useState } from 'react';
import data from './data.js';
import{Routes,Route,Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './routes/Detail.js';
import axios from 'axios';
import Cart from './routes/Cart.js'

export let Context1 = createContext()


function App() {

  let [shoes,setShoes] = useState(data);
  let [재고] = useState([10,11,12])
  
  let navigate = useNavigate();
  return (
    <div className="App">






    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Minjoo's shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/ ')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
      
      {/* <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link> */}


      <Routes>
        <Route path="/" element={
          <>
                <div className='main-bg' style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                  <h1 style={{color:'white', textAlign:'center'}}>Winter Sale - 20% OFF!</h1>
                  <h4 style={{color:'white', textAlign:'center'}}>minjoo's shoes shop</h4>
                </div>
                <div className='container'>
                  <div className='row'>
                    {
                      shoes.map((a,i)=>{
                        return (
                          <Card shoes={shoes[i]} i={i}></Card>
          
                        )
                      })
                    }
                  </div>
                </div>
                <button onClick={()=>{
                  axios.get('https://codingapple1.github.io/shop/data2.json')
                  .then((결과)=>{ 
                    let copy = [...shoes, ...결과.data];
                    setShoes(copy);
                  })

                }}>더보기</button>
                </>
        }/>

        <Route path="/detail/:id" element={
          <Context1.Provider value={{재고}}>
            <Detail shoes={shoes} />
          </Context1.Provider>
        }/>

        {/* <Route path="*" element={<div>없는페이지입니다.</div>}/> */}

        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>위치정보임</div>} />
        </Route>
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>
  );
}
function About(){
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Card(props) {
  return(
    <div className='col-md-4'>
      <img src={"https://codingapple1.github.io/shop/shoes" +(props.i+1)+".jpg"} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
  </div>
  )
}
export default App;
