import { useInboxContext } from "../context/InboxContext";
import { actions } from "../reducer/actions";

export default function Filters({ page }) {
  const {
    mailState: { filters },
    dispatch
  } = useInboxContext();
  const { FILTER_MAIL } = actions;

  const dispatchHandler = (e) =>
    dispatch({ type: FILTER_MAIL, payload: e, order: page });

  return (
    <>
      <fieldset>
        <legend style={{ textAlign: "left" }}>Filters</legend>
        <div className="label-container">
          <label>
            <input
              type="checkbox"
              value="unread"
              onChange={dispatchHandler}
              checked={filters[page].includes("unread")}
            />
            Show unread mails
          </label>
          <label>
            <input
              type="checkbox"
              value="isStarred"
              onChange={dispatchHandler}
              checked={filters[page].includes("isStarred")}
            />
            Show starred mails
          </label>
        </div>
      </fieldset>
    </>
  );
}
