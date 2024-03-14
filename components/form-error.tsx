import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) {
    return null;
  }
  return (
    <div className="bg-destructive/15 p-3 rounded-md flex items-center text-sm text-destructive">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <h1 className="px-3"> {message}</h1>
    </div>
  );
};
