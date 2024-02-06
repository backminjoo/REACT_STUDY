import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeName } from './../store.js'
import { addCount } from './../store.js'
import { memo, useMemo,useState } from 'react'

// 꼭 필요할 때만 재렌더링하려면 memo
// let Child = memo(function(){
//     console.log('재렌더링됨')
//     return <div>자식임</div>
// })




function Cart(){
    let state = useSelector((state)=>state) 
    let dispatch = useDispatch()
    // let [count,setCount] = useState(0)




    return (
        <div>
            {/* <Child></Child>
            <button onClick={()=>{setCount(count+1)}}>+</button> */}

            {state.user}의 장바구니
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((a,i)=>
                            <tr key={i}>
                                <td>{state.cart[i].id}</td>
                                <td>{state.cart[i].name}</td>
                                <td>{state.cart[i].count}</td>
                                <td>
                                    <button onClick={()=>{
                                        dispatch(addCount(state.cart[i].id))
                                    }}>+</button>
                                </td>
                            </tr>
                        )
                    }
 

                </tbody>
            </Table>
        </div>
    )
}
export default Cart