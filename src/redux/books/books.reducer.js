const INITIAL_STATE = {
  isToggleOpen: false,
  books: [
    {
      title: "Project Managment",
      author: "Dr: Ahmed",
      section: "civil",
      available: true,
      img:
        "https://assets.entrepreneur.com/content/3x2/2000/20191219170611-GettyImages-1152794789.jpeg",
      description: "amazing topic"
    },
    {
      title: "Amazing Book and super",
      author: "me",
      available: true,
      section: "civil",
      img:
        "https://assets.entrepreneur.com/content/3x2/2000/20191219170611-GettyImages-1152794789.jpeg",
      description: "amazing topic"
    }
  ]
};

const booksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_TOGGLE_BUTTON":
      return {
        ...state,
        isToggleOpen: !state.isToggleOpen
      };

    default:
      return state;
  }
};

export default booksReducer;
