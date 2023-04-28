import { Link } from "react-router-dom";
import parse from "html-react-parser";

import { useInboxContext } from "../context/InboxContext";
import { actions } from "../reducer/actions";

export default function MailCard(mail) {
  const { dispatch } = useInboxContext();
  const {
    STAR_MAIL,
    DELETE_MAIL,
    READ_MAIL,
    SPAM_MAIL,
    VIEW_DETAIL_READ
  } = actions;

  const {
    mId,
    subject,
    content,
    unread,
    isStarred,
    list,
    spamMailList,
    trashMailList
  } = mail;

  const starHandler = () =>
    dispatch({
      type: STAR_MAIL,
      payload: mId,
      list,
      order: spamMailList
        ? "spamMailList"
        : trashMailList
        ? "trashMailList"
        : "inboxMailList"
    });

  const viewReadHandler = () =>
    dispatch({
      type: VIEW_DETAIL_READ,
      payload: mId,
      list,
      order: spamMailList
        ? "spamMailList"
        : trashMailList
        ? "trashMailList"
        : "inboxMailList"
    });

  const deleteHandler = () => dispatch({ type: DELETE_MAIL, payload: mail });

  const spamHandler = () => dispatch({ type: SPAM_MAIL, payload: mail });

  const readHandler = () =>
    dispatch({
      type: READ_MAIL,
      payload: mId,
      list,
      order: spamMailList
        ? "spamMailList"
        : trashMailList
        ? "trashMailList"
        : "inboxMailList"
    });

  return (
    <div>
      <h1>{subject}</h1>
      <button onClick={starHandler}>{isStarred ? "Unstar" : "Star"}</button>
      <p>{parse(content)}</p>
      <Link to={`/inbox/${mId}`} onClick={viewReadHandler}>
        View Details
      </Link>
      <div>
        {!(spamMailList || trashMailList) && (
          <button onClick={deleteHandler}>Delete</button>
        )}

        <button onClick={readHandler}>
          {unread ? "Mark as read" : "Mark as unread"}
        </button>

        {!(spamMailList || trashMailList) && (
          <button onClick={spamHandler}>Report spam</button>
        )}

        {/* {notInbox && <button>Restore</button>} */}
      </div>
    </div>
  );
}
