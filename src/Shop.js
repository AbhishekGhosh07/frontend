import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index'

const Shop = () => {
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators,dispatch);
  const amount = useSelector(state=>state.amount)
  return (
    <div>
    {/* <button className='btn btn-primary' onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
    Add balance
    <button className='btn btn-primary' onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button> */}
    <button className='btn btn-primary' onClick={()=>{actions.withdrawMoney(100)}}>-</button>
    Add balance : {amount}
    <button className='btn btn-primary' onClick={()=>{actions.depositMoney(100)}}>+</button>
   
    </div>
  )
}

export default Shop