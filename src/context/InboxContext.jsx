import { createContext, useContext, useReducer } from "react";

import { mails } from "../data/mailData";
import { reducer } from "../reducer/reducer";

const InboxContext = createContext({
  inboxList: [],
  spamList: [],
  trashList: [],
  allMails: [],
  filters: {}
});

const defaultState = {
  allMailList: mails,
  inboxMailList: mails,
  spamMailList: [],
  trashMailList: [],
  filters: { inbox: [], spam: [], trash: [] }
};

// make default value of filter a object and based on it store filters. Try to find a similar way as we did in starred and read/unread.

export const InboxProvider = function ({ children }) {
  const [mailState, dispatch] = useReducer(reducer, defaultState);

  const inboxContext = {
    mailState,
    dispatch
  };

  return (
    <InboxContext.Provider value={inboxContext}>
      {children}
    </InboxContext.Provider>
  );
};

export const useInboxContext = () => useContext(InboxContext);
