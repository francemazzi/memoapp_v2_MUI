import Button from "@mui/material/Button";
import { removeMemo } from "./app/features/memoString/memoSlice";
import { useDispatch } from "react-redux";

function ModifyButton({ memos, memo }) {
  const dispatch = useDispatch();
  return (
    <div>
      <Button
        className="ractionButton"
        style={{ textDecoration: "none" }}
        onClick={() => {
          dispatch(removeMemo({ memoId: memo.id, memolist: memos }));
        }}
      >
        Done ✅
      </Button>
    </div>
  );
}

export default ModifyButton;
