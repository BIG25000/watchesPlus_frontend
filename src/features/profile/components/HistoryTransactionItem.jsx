export default function HistoryTransactionItem({ el }) {
  return (
    <li className="px-4 py-2 border border-b-0 flex">
      <div className="flex-1 flex items-center">
        <div className=" flex items-center gap-2">
          <img
            className="w-20"
            src="https://images.unsplash.com/photo-1627630737366-fbd46d8c11f5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div>Model</div>
        </div>
      </div>
      <div className="w-36 flex items-center justify-center">Rolex</div>
      <div className="w-36 flex items-center justify-center">$60</div>
      <div className="w-36 flex items-center justify-center">$50</div>
      <div className="w-36 flex items-center justify-center">Success</div>
      <div className="w-36 flex items-center justify-center">{'11-11-1111'}</div>
    </li>
  );
}
