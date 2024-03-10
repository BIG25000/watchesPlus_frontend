import React from "react";

export default function TableList(props) {
  const { data } = props;
  return (
    // <div className='grid grid-cols-5 items-center justify-between border-b-2 border-black p-4 text-center'>
    //     <div className='w-20'><img src={data.watchImage}  /></div>
    //     <div>{data.modelName}</div>
    //     <div>{data.brand.name}</div>
    //     <div className=''>{reference}</div>
    //     <div>{status}</div>
    // </div>
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>No</th>
            <th>Image</th>
            <th>Model Name</th>
            <th>Brand</th>
            <th>Reference</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {data.map((e,i) => {
            return (
              <tr className="hover" key={e.id}>
                <th>{i+1}</th>
                <td><img className="w-20"  src={e.watch.watchImage}/></td>
                <td>{e.watch.modelName}</td>
                <td>{e.watch.brand.name}</td>
                <td>{e.referenceNumber}</td>
                <td>{e.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
