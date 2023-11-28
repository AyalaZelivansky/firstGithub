const initalState = [];
// const initalState = {
//     name:"",
//     teacher:""
// }
const reducer = (state=initalState,action)=>{
    switch (action.type) {
        case "createUser":
            // לברר מה עושים פה..
            return [...state, action.payload]
            // console.log(action.payload);
            // return {
            //     state: action.payload
            // }
        case "updateUser":
          return
        default:
            return state
    }

}

export default reducer