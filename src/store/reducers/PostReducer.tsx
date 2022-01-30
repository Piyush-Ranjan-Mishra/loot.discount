import { POST_GET, POST_LOADING } from "../ActionsString";

const initialState = {
  isLoading: true,
  posts: [],
};

export default function PostReducer(state = initialState, action: any) {
  switch (action.type) {
    case POST_LOADING:
      state.isLoading = true;
      return state;
    case POST_GET:
  }
}
