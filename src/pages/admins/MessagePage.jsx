import React from "react";

import MessageForm from "../../features/admins/messages/MessageForm";
import MessageAdminContextProvider from "../../features/admins/messages/contexts/MessageAdminContext";

function MessagePage() {
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <MessageForm />
    </div>
  );
}

export default MessagePage;
