import * as React from "react";

export interface ShowNumberProps {
  value?: number;
}

export const ShowNumber: React.VFC<ShowNumberProps> = ({ value }: ShowNumberProps) => {
  const val = value!==0 ? value : 0;
  return <i>{val}</i>;
};
