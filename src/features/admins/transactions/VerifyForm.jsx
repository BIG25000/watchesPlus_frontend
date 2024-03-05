import React from "react";

function VerifyForm() {
  return (
    <>
      <form>
        <h1 className="text-center font-medium">Confirm Verify</h1>
        <div className="flex justify-center gap-10 mt-5">
          <button className="btn  " type="submit">
            confirm
          </button>
          <button className="underline" type="submit">
            no
          </button>
        </div>
      </form>
    </>
  );
}

export default VerifyForm;
