import React from "react";
import userAdmin from "./hooks/userAdmin";

function UnblockForm({ id }) {
  const { updateStatusUnblock, users } = userAdmin();

  const filterUser = users.filter((e) => e.id == id)[0];
  return (
    <>
      <form>
        <h1 className="text-center font-medium">Block Confirm</h1>
        <h1 className="text-center font-medium">Id User : {id}</h1>
        <h1 className="text-center font-medium">
          Username : {filterUser.firstName} {filterUser.lastName}
        </h1>
        <div className="flex justify-center gap-10 mt-5">
          <button
            className="btn "
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              updateStatusUnblock(id);
              document.getElementById(`unblock${id}`).close();
            }}
          >
            confirm
          </button>
          <button
            className="underline"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              document.getElementById(`unblock${id}`).close();
            }}
          >
            no
          </button>
        </div>
      </form>
    </>
  );
}

export default UnblockForm;
