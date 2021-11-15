import { ColumnContainer, ColumnTitle } from "../../style";
import { VFC, PropsWithChildren, ReactNode } from 'react';

// type React.PropsWithChildren<P> = P & {children ?: React.ReactNode}

type ColumnProps = PropsWithChildren<{
    text: string;
}>

// Another implementation
type ColProps = {
    text: string;
    children?: ReactNode;
}

export const Column: VFC<ColumnProps> = ({ text, children }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text ? text : "Column Title"}</ColumnTitle>
      {children}
    </ColumnContainer>
  );
};
