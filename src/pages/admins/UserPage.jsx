import React from "react";
import UserForm from "../../features/admins/users/UserForm";
import UserAdminContextProvider from "../../features/admins/users/contexts/UserAdminContext";

function UserPage() {
  return (
    <>
      <UserAdminContextProvider>
        <UserForm />
      </UserAdminContextProvider>
    </>
  );
}

export default UserPage;
