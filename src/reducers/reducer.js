//import actions

// const INITIAL_STATE = {
//what state is being passed in?
//sample code:
//     //members: [
//     { name: "Jojo Zhang", dragonStatus: true },
//     { name: "Brandon Harris", dragonStatus: false }
//   ]
//};

// export const reducer (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//         case action.type:
//             return {
//                 ...state,
//                 ...action.payload
//             };
//         default:
//             return state;
//     }
// };

/* 
sample code 

import { ADD_MEMBER, TOGGLE_DRAGON_STATUS } from "../actions";

const initialState = {
  members: [
    { name: "Jojo Zhang", dragonStatus: true },
    { name: "Brandon Harris", dragonStatus: false }
  ]
};

export const membersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MEMBER: {
      return {
        ...state,
        members: [
          ...state.members,
          { name: action.payload, dragonStatus: false }
        ]
      };
    }
    case TOGGLE_DRAGON_STATUS: {
      return {
        ...state,
        members: state.members.map((member, index) => {
          if (index === action.payload) {
            return {
              ...member,
              dragonStatus: !member.dragonStatus
            };
          }
          return member;
        })
      };
    }
    default:
      return state;
  }
};



*/
