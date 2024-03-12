import React from "react";
import UserForm from "../../features/admins/users/UserForm";
import UserAdminContextProvider from "../../features/admins/users/contexts/UserAdminContext";
import MessageAdminContextProvider from "../../features/admins/messages/contexts/MessageAdminContext";

function UserPage() {
  return (
    <>
      <MessageAdminContextProvider>
        <UserAdminContextProvider>
          <UserForm />
        </UserAdminContextProvider>
      </MessageAdminContextProvider>
    </>
  );
}

export default UserPage;
