export const depositMoney =(amount)=>{
 return (dispatch)=>{
    dispatch({
        type : 'deposit',
        payload : amount
     })
 }
}

export const withdrawMoney =(amount)=>{
    return (dispatch)=>{
        dispatch({
            type: 'withdraw',
            payload : amount
        })
    }

}

export const departureCity =(city)=>{
    return(dispatch)=>{
        dispatch({
            type: 'departure',
            payload: city
        })
    }
}
export const arrivalCity =(city)=>{
    return(dispatch)=>{
        dispatch({
            type: 'arrival',
            payload: city
        })
    }
}

export const loggedIn =(allow)=>{
    return (dispatch)=>{
        dispatch({
            type: 'allowUser',
            payload : allow
        })
    }
}
export const storeName = (name)=>{
    return (dispatch)=>{
        dispatch({
            type: 'addName',
            payload : name
        })
    }
}