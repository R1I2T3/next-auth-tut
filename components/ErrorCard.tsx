import React from "react";
import CardWrapper from "./auth/CardWrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops something went wrong"
      backButtonHref="/auth/login"
      backButtonLabel="back to login"
    >
      <div className="w-full flex justify-center items-center">
        <ExclamationTriangleIcon className="text-destructive" />
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
