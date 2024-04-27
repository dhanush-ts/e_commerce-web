export const LoginReducer = (state,action) => {
    const { type, payload } = action;

    switch( type ){
        case "CHANGE":return {...state, name : payload.name, email : payload.email, id : payload.id, key : payload.key}
        case "RESET":return {name : undefined, email : undefined, id : undefined, key : undefined}
        default : throw new Error("No Matching case found");
    }
}