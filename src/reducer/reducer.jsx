import { actions } from "./actions";

export const reducer = function (state, action) {
  const {
    STAR_MAIL,
    DELETE_MAIL,
    READ_MAIL,
    SPAM_MAIL,
    VIEW_DETAIL_READ,
    FILTER_MAIL
  } = actions;
  const { inboxMailList, spamMailList, trashMailList, filters } = state;

  // STAR Mail
  if (action.type === STAR_MAIL) {
    const currList = action.order;
    const newList = state[currList].map((mail) =>
      mail.mId === action.payload
        ? { ...mail, isStarred: !mail.isStarred }
        : mail
    );

    // returning updated state
    return { ...state, [currList]: newList };
  }

  // DELETE Mail
  if (action.type === DELETE_MAIL) {
    const newTrashList = [...trashMailList, action.payload];

    const newInboxList = inboxMailList.filter(
      ({ mId }) => mId !== action.payload.mId
    );

    return {
      ...state,
      inboxMailList: newInboxList,
      trashMailList: newTrashList
    };
  }

  // READ Mail
  if (action.type === READ_MAIL) {
    const currList = action.order;
    const newList = state[currList].map((mail) =>
      mail.mId === action.payload ? { ...mail, unread: !mail.unread } : mail
    );

    // returning updated state
    return { ...state, [currList]: newList };
  }

  // SPAM Mail
  if (action.type === SPAM_MAIL) {
    const newSpamList = [...spamMailList, action.payload];

    const newInboxList = inboxMailList.filter(
      ({ mId }) => mId !== action.payload.mId
    );

    return {
      ...state,
      inboxMailList: newInboxList,
      spamMailList: newSpamList
    };
  }

  // VIEW READ mail
  if (action.type === VIEW_DETAIL_READ) {
    const currList = action.order;
    const newList = state[currList].map((mail) =>
      mail.mId === action.payload ? { ...mail, unread: false } : mail
    );

    // returning updated state
    return { ...state, [currList]: newList };
  }

  // FILTER
  if (action.type === FILTER_MAIL) {
    const curr = action.payload;
    let newFilter = { ...filters };
    if (curr.target.checked) {
      newFilter[action.order].push(curr.target.value);
    } else {
      newFilter[action.order] = filters[action.order].filter(
        (filterVal) => filterVal !== curr.target.value
      );
    }
    return { ...state, filters: newFilter };
  }

  return state;
};
