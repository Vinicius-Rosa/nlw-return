import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export const CloseBtn = () => {
  return (
    <Popover.Button
      className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100 transition-all"
      title="Fechar formulário de feedback"
    >
      <X className="h-4 w-4" weight="bold" />
    </Popover.Button>
  );
};
