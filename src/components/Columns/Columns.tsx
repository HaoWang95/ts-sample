import { ColumnContainer, ColumnTitle } from "../../style";
import { VFC, PropsWithChildren } from 'react';
import { AddNewItem } from "../AddNewItem";

// type React.PropsWithChildren<P> = P & {children ?: React.ReactNode}

type ColumnProps = PropsWithChildren<{
    text: string;
}>

// Another implementation
// type ColProps = {
//     text: string;
//     children?: ReactNode;
// }

export const Column: VFC<ColumnProps> = ({ text, children }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text ? text : "Column Title"}</ColumnTitle>
      {children}
      <AddNewItem 
        toggleButtonText={`+ Add another task in ${text}`}
        onAdd={() => console.log("not implemented yet")}
        dark
      />
    </ColumnContainer>
  );
};
