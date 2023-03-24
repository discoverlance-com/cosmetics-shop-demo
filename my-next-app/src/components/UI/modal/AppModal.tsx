import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import AppButton from "~/components/UI/button/AppButton";

interface Props {
  footer?: React.ReactNode;
  trigger: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const AppModal = (props: Props) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <AppButton>{props.trigger}</AppButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blue-50/80 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-blue-700 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-blue-50 m-0 text-xl font-bold">
            {props.title}
          </Dialog.Title>
          <Dialog.Description className="text-gray-200 mt-2 mb-5 text-sm leading-normal">
            {props.subtitle}
          </Dialog.Description>
          {props.children}
          <div className="mt-[25px] flex justify-end">
            <Dialog.Close asChild>
              <AppButton>Close</AppButton>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              className="text-white hover:bg-blue-800 focus:shadow-blue-800 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AppModal;
