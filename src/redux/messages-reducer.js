const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    dialogItemsData: [
        {id: '1', name: 'Коля'},
        {id: '2', name: 'Вася'},
        {id: '3', name: 'Паша'},
        {id: '4', name: 'Никита'},
        {id: '5', name: 'Саша'},
        {id: '6', name: 'Маша'},
        {id: '7', name: 'Дима'}
    ],
    messagesData: [
        {id:1, text:'hi'},
        {id:2, text:'how are you?'},
        {id:3, text:'stop being so fucking pretty'},
        {id:4, text:'bb'}
    ],
    newMessageBody: ''
}


export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = state.newMessageBody
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 5, text: body}],
                newMessageBody: ''
            }
        }
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body
            }
        }
        default:
            return state
    }
}

export let sendMessageAC = () => ({type: SEND_MESSAGE})
export let updateNewMessageBodyAC = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body})

export default messagesReducer