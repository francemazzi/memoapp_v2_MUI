import Button from "@mui/material/Button";
import { decrement } from "./app/features/counter/counterSlice";
import { removeMemo } from "./app/features/memoString/memoSlice";
import { useDispatch } from "react-redux";

function ModifyButton({ memo }) {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeMemo({ memoId: memo.id }));
    dispatch(decrement());
  };
  return (
    <div>
      <Button
        className="ractionButton"
        style={{ textDecoration: "none" }}
        onClick={handleRemove}
      >
        Done ✅
      </Button>
    </div>
  );
}

export default ModifyButton;
