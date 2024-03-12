import { formatNum } from "../../../utils/formatNumber";
import formatTimeAgo from "../../../utils/time-ago";

export default function HistoryTransactionItem({ el }) {
  const timeAgo = formatTimeAgo(el?.createdAt);
  return (
    <li className="px-4 py-2 border border-b-0 flex">
      <div className="flex-1 flex items-center">
        <div className=" flex items-center gap-2">
          <img
            className="w-20"
            src={
              !el?.watch
                ? el.inventory?.watch?.watchImage
                : el.watch?.watchImage
            }
          />
          <div>{el?.watch?.modelName}</div>
        </div>
      </div>
      <div className="w-32 flex items-center justify-center">
        {el?.watch?.brand?.name}
      </div>
      <div className="w-32 flex items-center justify-center">
        {el?.inventoryId ? "-" : formatNum(el.price)}
      </div>
      <div className="w-32 flex items-center justify-center">
        {el?.inventoryId ? formatNum(el.price) : "-"}
      </div>
      <div className="w-32 flex items-center justify-center">{el?.status}</div>
      <div className="w-32 flex items-center justify-center">{timeAgo}</div>
      <div className="w-32 flex items-center justify-center">
        {el?.createdAt.split("T")[0]}
      </div>
    </li>
  );
}
