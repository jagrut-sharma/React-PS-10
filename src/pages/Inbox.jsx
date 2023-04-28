import { useInboxContext } from "../context/InboxContext";
import MailCard from "../components/MailCard";
import Filters from "../components/Filtters";

export default function Inbox() {
  const {
    mailState: {
      inboxMailList,
      filters: { inbox }
    }
  } = useInboxContext();

  const filteredList = inbox.length
    ? inboxMailList.filter((mail) => {
        return inbox.some((filterVal) => mail[filterVal]);
      })
    : inboxMailList;

  // unread mails
  const unreadMails = filteredList.reduce(
    (acc, { unread }) => (unread ? acc + 1 : acc),
    0
  );

  return (
    <div>
      <Filters page={"inbox"} />
      <h2>Unread: {unreadMails}</h2>
      {filteredList.map((mail) => (
        <MailCard key={mail.mId} {...mail} list={inboxMailList} />
      ))}
    </div>
  );
}
