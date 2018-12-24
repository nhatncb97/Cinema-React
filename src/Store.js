var redux = require('redux');
//Tạo các thuộc tính sử dụng chung cho các component
var oldState = {
    username: '',
    email: '',
    firstname: '',
    lastname: '',
    dateOfBirth: '',
    phone: '',
    avatar: '',
    loginState: 'true',
    film:'',
    date:'',
    seatID:'',
    time:'',
    cinema:'',
    ticketNumber:'',
    price:'',
    seatData: []
}
const reducer = (state = oldState, action) => {
    //Các case sẽ thực hiện update các thuộc tính tương ứng
    switch (action.type) {
        case "USER_INFO": 
            return { ...state }
        case "LOG_IN":
            return {
                ...state,
                username: action.username,
                email: action.email,
                firstname: action.firstname,
                lastname: action.lastname,
                dateOfBirth: action.dateOfBirth,
                phone: action.phone,
                avatar: action.avatar,
                loginState: action.loginState
            }
        case "USER_UPDATE": //?
            return {
                ...state,
                username: action.username,
                firstname: action.firstname,
                lastname: action.lastname,
                phone: action.phone,
                avatar: action.avatar,
            }
        case "LOG_OUT":
            return {
                ...state,
                loginState: 'false'
            }
        case "BOOKING":
            return{
                ...state,
                seatID:action.seatID,
                ticketNumber: action.ticketNumber,
                price: action.price
            }
        case "BOOKING_1":
            return {
                ...state,
                film: action.film
            }
        case "BOOKING_2":
            return{
                ...state,
                date:action.date,
                cinema:action.cinema,
                time:action.time
            }
        case "SLOT":
            return{
                ...state,
                seatData: action.seatData
            }
        default:
            return state
    }
}
var store = redux.createStore(reducer);
export default store;
