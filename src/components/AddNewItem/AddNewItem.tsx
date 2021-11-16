import { useCallback, useState } from "react";
import { AddItemButton } from "../../style";
import { NewItemForm } from "./NewItemForm";

interface AddItemProps {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark?: boolean;
}

export const AddNewItem = (props: AddItemProps) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const { onAdd, toggleButtonText, dark } = props;

  const handleAddNew = useCallback(() => {
    console.log("NewItemButton in AddNewItem is clicked~!");
    setShowForm(true);
  }, []);

  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }

  return (
    <AddItemButton dark={dark} onClick={handleAddNew}>
      {toggleButtonText}
    </AddItemButton>
  );
};
