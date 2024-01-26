import logo from './logo.svg';
import {Button, Navbar, Container, Nav} from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import data from './data.js';
import{Routes,Route,Link} from 'react-router-dom'

function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">






    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Minjoo's shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>

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
                </>
        }/>

        <Route path="/detail" element={<div>상세페이지임</div>}/>
      </Routes>



    </div>
  );
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