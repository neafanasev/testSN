import profileReducer, {addPostAC} from "./profile-reducer";

it('new post should be added', () => {
    let action = addPostAC('hello')
    let state = {
        PostsData: [
            {userid: 1, id: 1, likes: 15, msg: 'asdasdasd'},
            {userid: 1, id: 2, likes: 20, msg: 'dsddddd'},
            {userid: 1, id: 3, likes: 30, msg: 'mmmmmm'}
        ]
    }
    let newState = profileReducer(state, action)
    expect(newState.PostsData.length).toBe(4)
})


