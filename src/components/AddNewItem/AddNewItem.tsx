import { useState } from "react";
import { AddItemButton } from "../../style";
import { NewItemForm } from  "."

interface AddItemProps {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark?: boolean;
}

export const AddNewItem = (props: AddItemProps) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const { onAdd, toggleButtonText, dark } = props;
  if (showForm) {
    // show item creation form here
    <NewItemForm
      onAdd={(text) => {
        onAdd(text);
        setShowForm(false);
      }}
    />;
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  );
};
