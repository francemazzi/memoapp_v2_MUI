import { useDispatch } from "react-redux";
import { reactionAdd } from "./app/features/memoString/memoSlice";
import Button from "@mui/material/Button";

const reactionSimbol = {
  toDo: "Tra 📝",
  workInProgres: "⏳",
};

function ReactionButtons({ memo }) {
  const dispactch = useDispatch();

  const reactionButtons = Object.entries(reactionSimbol).map(
    ([name, reaction]) => {
      return (
        <Button
          key={reaction}
          className="ractionButton"
          onClick={() =>
            dispactch(reactionAdd({ memoId: memo.id, reaction: name }))
          }
          style={{ textDecoration: "none" }}
        >
          {reaction} {memo.reactions[name]} min
        </Button>
      );
    }
  );
  return <div>{reactionButtons}</div>;
}

export default ReactionButtons;
