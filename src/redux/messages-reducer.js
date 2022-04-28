const SEND_MESSAGE = '/messages/SEND_MESSAGE'

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
        {id:3, text:'stop'},
        {id:4, text:'bb'}
    ]
}


export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 5, text: body}],
            }
        }
        default:
            return state
    }
}

export let sendMessageAC = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default messagesReducer