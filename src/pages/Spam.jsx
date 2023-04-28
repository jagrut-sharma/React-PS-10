import Filters from "../components/Filtters";
import MailCard from "../components/MailCard";
import { useInboxContext } from "../context/InboxContext";

export default function Spam() {
  const {
    mailState: {
      spamMailList,
      filters: { spam }
    }
  } = useInboxContext();

  const filteredList = spam.length
    ? spamMailList.filter((mail) => {
        return spam.some((filterVal) => mail[filterVal]);
      })
    : spamMailList;

  if (!filteredList.length)
    return (
      <>
        <Filters page={"spam"} />
        <h1>No Spam Present</h1>
      </>
    );

  return (
    <>
      <Filters page={"spam"} />
      {filteredList.map((mail) => (
        <MailCard
          key={mail.mId}
          {...mail}
          list={spamMailList}
          notInbox
          spamMailList
        />
      ))}
    </>
  );
}
