import React from "react";

function TransactionForm() {
  return (
    <div>
      <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
        <strong className="text-gray-700 font-medium">Transaction</strong>
        <div className="border-x border-gray-200 rounded-sm mt-3">
          <div className="overflow-x-auto">
            <table className="table w-full ">
              {/* head */}
              <thead>
                <tr className="bg-gray-700 text-white">
                  <th>id</th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                  <th>Favorite Color</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionForm;
