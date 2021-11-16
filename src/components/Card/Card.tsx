import { CardContainer } from "../../style";
import { VFC } from "react";

type CardProps = {
  text?: string;
};

export const Card: VFC<CardProps> = ({ text }: CardProps) => {
  return <CardContainer>{text ? text : "Card Title"}</CardContainer>;
};
