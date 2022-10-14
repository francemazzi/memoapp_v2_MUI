import { parseISO, formatDistanceToNow } from "date-fns";
import Typography from "@mui/material/Typography";
import React from "react";

export const TimeAgo = ({ timestamp }) => {
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} fa`;
  }

  return (
    <div>
      <Typography
        sx={{ fontSize: 14 }}
        color="text.secondary"
        title={timestamp}
        gutterBottom
      >
        {timeAgo}
      </Typography>
    </div>
  );
};
