export default function HistoryTransactionItem({ el }) {
  return (
    <li className="px-4 py-2 border border-b-0 flex">
      <div className="flex-1 flex items-center">
        <div className=" flex items-center gap-2">
          <img
            className="w-20"
            src={!el.watch ? el.inventory.watch?.watchImage : el.watch?.watchImage}
          />
          <div>Model</div>
        </div>
      </div>
      <div className="w-36 flex items-center justify-center">Rolex</div>
      <div className="w-36 flex items-center justify-center">{el.inventoryId ? '-' : el.price}</div>
      <div className="w-36 flex items-center justify-center">{el.inventoryId ? el.price : '-'}</div>
      <div className="w-36 flex items-center justify-center">{el?.status}</div>
      <div className="w-36 flex items-center justify-center">{el?.createdAt.split('T')[0]}</div>
    </li>
  );
}
