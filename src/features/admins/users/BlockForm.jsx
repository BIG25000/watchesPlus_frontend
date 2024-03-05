import React from "react";

function BlockForm({ data }) {
  return (
    <>
      <form>
        <h1 className="text-center font-medium">Block Confirm</h1>
        <h1 className="text-center font-medium">{data}</h1>
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

export default BlockForm;
