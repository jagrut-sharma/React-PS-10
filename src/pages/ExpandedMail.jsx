import parse from "html-react-parser";
import { useParams } from "react-router-dom";
import { useInboxContext } from "../context/InboxContext";

export default function ExpandedMail() {
  const { mailID } = useParams();
  const {
    mailState: { allMailList }
  } = useInboxContext();

  const findSelectedMail = function (id, allMailList) {
    return allMailList.find(({ mId }) => mId === id);
  };

  const selectedMail = findSelectedMail(mailID, allMailList);

  const { subject, content } = selectedMail;

  return (
    <div>
      <h3>{subject}</h3>
      <p>{parse(content)}</p>
    </div>
  );
}
