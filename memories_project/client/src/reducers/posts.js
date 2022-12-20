// state is the post so just name it post

export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            // takes all existing posts and spreads them into array.
            // then add the new created post found in the payload
            return [...posts, action.payload];
        default:
            return posts;
    }
}