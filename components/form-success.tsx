import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormErrorProps) => {
  if (!message) {
    return null;
  }
  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center text-sm text-emerald-500">
      <CheckCircledIcon className="h-4 w-4" />
      <h1 className="px-3"> {message}</h1>
    </div>
  );
};
