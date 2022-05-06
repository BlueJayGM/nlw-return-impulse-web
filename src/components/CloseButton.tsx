import { Popover } from '@headlessui/react';
import { X } from 'phosphor-react';

const buttonStyles = `
  top-5 right-5 absolute text-zinc-400 
  hover:text-zinc-100
`;

export function CloseButton() {
  return (
    <Popover.Button className={buttonStyles} title="Fechar formulário de feedback">
      <X weight="bold" className="w-4 h-4" />
    </Popover.Button>
  );
}