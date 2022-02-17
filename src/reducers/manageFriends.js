export function manageFriends(state = { friends: [] }, action){
    switch (action.type) {
        case "ADD_FRIEND":
            let newFriend = action.friend
            return { friends: [...state.friends, newFriend]}
        case "REMOVE_FRIEND":
            let removeFriend = state.friends.findIndex(friend => friend.id === action.id)
            return { friends: [...state.friends.slice(0, removeFriend), ...state.friends.slice(removeFriend + 1)]
            }
        default:
            return state
    }
}


