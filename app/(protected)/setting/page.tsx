import { auth, signOut } from "@/auth";
import React from "react";

const Settings = async () => {
  const session = await auth();
  return (
    <>
      <div>{JSON.stringify(session)}</div>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">SignOut</button>
      </form>
    </>
  );
};

export default Settings;
