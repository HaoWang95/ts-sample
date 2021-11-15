import { CardContainer } from "../../style";

type CardProps = {
  text?: string;
};

export const Card = ({ text }: CardProps) => {
  return <CardContainer>{text ? text : "Card Title"}</CardContainer>;
};
