import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Nav} from 'react-bootstrap'
import {Context1} from './../App.js'


function Detail(props) {

    let {재고} = useContext(Context1)


    let[count, setCount] = useState(0)
    let {id} = useParams();
    let 찾은상품 = props.shoes.find(x=>x.id == id);
    let [alert,setAlert]=useState(true)
    let [탭, 탭변경] = useState(0)




    useEffect(()=>{
        let a = setTimeout(()=>{setAlert(false)},2000)
        return ()=> {
            clearTimeout(a)
        };
    },[]);


    return (
        <div className='container'>
            {
                alert==true
                ? <div className='alert alert-warning'>
                    2초이내 구매시 할인
                    </div>
                : null

            }
            {재고[0]}
            {count}
            <button onClick={()=>{setCount(count+1)}}>버튼</button>
            <div className='row'>
                <div className='col-md-6'>
                    <img src='https://codingapple1.github.io/shop/shoes1.jpg' width="100%"/>
                </div>
                <div className='col-md-6 mt-4'>
                    <h4 className='pt-5'>{props.shoes[id].title}</h4>
                    <p>{props.shoes[id].content}</p>
                    <p>{props.shoes[id].price}원</p>
                    <button className='btn btn-danger'>주문하기</button>
                </div>
            </div>
            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link eventKey="link0" onClick={()=>{탭변경(0)}}>Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1" onClick={()=>{탭변경(1)}}>Option 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2" onClick={()=>{탭변경(2)}}>
                        Disabled
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent 탭={탭}></TabContent>
        </div>
    )
}


function TabContent({탭}){
    let [fade,setFade] = useState('')
    useEffect(()=>{
        setTimeout(()=>{ setFade('end')},100)


        return ()=>{
            setFade('')
        }
    },[탭])

    return (<div className={'start '+ fade}>
        
        {[<div>내용0</div>,<div>내용1</div>,<div>내용2</div>][탭]}
    </div>)
}
export default Detail;
