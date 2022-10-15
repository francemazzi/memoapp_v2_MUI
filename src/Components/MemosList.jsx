//MUI materials import
import { useEffect } from "react";
import MemoExtraction from "./MemoExtraction";

// //Data --> inserito in memoExtractor
// import { TimeAgo } from "./TimeAgo";
// //reazioni --> inserito in memo extractor
// import ReactionButtons from "./ReactionButtons";
// import ModifyButton from "./ReactionRemove";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllMemos,
  getMemoStatus,
  getmemoError,
  fetchMemo,
} from "./app/features/memoString/memoSlice";

const MemosList = () => {
  //Redux render posts
  const dispatch = useDispatch();
  const memos = useSelector(selectAllMemos);
  const memosStatus = useSelector(getMemoStatus);
  const memoError = useSelector(getmemoError);

  useEffect(() => {
    if (memosStatus === "idle") {
      dispatch(fetchMemo());
    }
  }, [memosStatus, dispatch]);

  let content;
  if (memosStatus === "loading") {
    content = <p>'LOADING'</p>;
  } else if (memosStatus === "succeeded") {
    const orderMemos = memos
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderMemos.map((memo) => <MemoExtraction memo={memo} />);
  } else if (memosStatus === "failed") {
    content = <p>{memoError}</p>;
  }

  return <>{content}</>;
};

export default MemosList;
