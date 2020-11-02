import { profileReducer, addPost, deletePost } from "./profile-reducer";

let state = {
  postsData: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: "Blabla", likesCount: 11 },
    { id: 4, message: "Dada", likesCount: 11 },
  ],
};

test("length of posts should be incremented", () => {
  let action = addPost("it-kamasutra.com");

  let newState = profileReducer(state, action);

  expect(newState.postsData.length).toBe(5);
});

test("message of new post should be 'it-kamasutra.com'", () => {
  let action = addPost("it-kamasutra.com");

  let newState = profileReducer(state, action);

  expect(newState.postsData[4].message).toBe("it-kamasutra.com");
});

test("after deleting length should be decrement", () => {
  let action = deletePost(1);

  let newState = profileReducer(state, action);

  expect(newState.postsData.length).toBe(3);
});
