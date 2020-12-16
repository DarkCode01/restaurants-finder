import React from "react";

import { Star } from "@material-ui/icons";

export default function Ratter({ rate }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        fontSize: '16px',
        fontWeight: '600',
        color: `${rate >= 3.5 ? "#00aa66" : rate >= 2 ? "#aa6600" : "#dd2200"}`,
      }}
    >
      {rate.toFixed(1)}<Star />
    </span>
  );
}
