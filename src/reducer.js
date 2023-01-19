function postReducer(state, action) {
    switch(action.type) {
        case "ADD_POST": {
            const newPost = action.payload.post;
            return { posts: [newPost, ...state.posts] }
        }
        case "DELETE_POST": {
            const newList = state.posts.filter(post => post.id !== action.payload.id);
            return { posts: newList };
        }
        default: 
            return state;
    }
}

export default postReducer;