import Filters from "../components/Filtters";
import MailCard from "../components/MailCard";
import { useInboxContext } from "../context/InboxContext";

export default function Trash() {
  const {
    mailState: {
      trashMailList,
      filters: { trash }
    }
  } = useInboxContext();

  const filteredList = trash.length
    ? trashMailList.filter((mail) => {
        return trash.some((filterVal) => mail[filterVal]);
      })
    : trashMailList;

  if (!filteredList.length)
    return (
      <>
        <Filters page={"trash"} />
        <h1>Your trash is clean.</h1>
      </>
    );

  return (
    <>
      <Filters page={"trash"} />
      {filteredList.map((mail) => (
        <MailCard
          key={mail.mId}
          {...mail}
          list={trashMailList}
          notInbox
          trashMailList
        />
      ))}
    </>
  );
}
