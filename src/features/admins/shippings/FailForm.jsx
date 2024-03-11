import React from "react";

function FailForm({ id, issue }) {
  console.log(issue);
  return (
    <div>
      FailForm {id} {issue}
    </div>
  );
}

export default FailForm;
