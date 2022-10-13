import { useSelector } from "react-redux";
import { selectAllUsers } from "./app/features/users/userSlice";

import React from "react";

const MemoUser = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  const user = users.find((user) => user.id === userId);

  return (
    <div>
      <span>{user ? `Per ➡️ ${user.mail}` : "Per tutti"}</span>
    </div>
  );
};

export default MemoUser;
