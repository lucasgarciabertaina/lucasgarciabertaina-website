import { useState } from "react";

function useBurgerMenu(initialValue: boolean = false) {
  const [isOpen, setIsOpen] = useState<boolean>(initialValue);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return { isOpen, open, close };
}

export default useBurgerMenu;
