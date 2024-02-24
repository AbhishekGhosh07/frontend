const reducer =(state='',action) =>{
    if(action.type=='addName'){
        return action.payload
    }
    else{
        return state;
    }
}

export default reducer