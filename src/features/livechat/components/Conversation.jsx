import Avatar from "../../../components/Avatar";
import Loading from "../../../components/Loading";
import formatTimeAgo from "../../../utils/time-ago";

export default function Conversation({
  ownMessage,
  senderFirstName,
  senderLastName,
  createdAt,
  message,
  src,
  loading,
}) {
  return (
    <>
      {loading && <Loading />}
      {ownMessage ? (
        <div className="flex flex-col items-end">
          <div className="flex flex-row gap-2">
            <div className="flex flex-col items-end">
              <div className="my-1">
                <span>
                  {senderFirstName} {senderLastName}
                </span>
              </div>
              <div className="py-1.5 px-2.5 rounded-xl bg-yellow-600 flex items-center justify-center min-w-1">
                <h1 className="text-white">{message}</h1>
              </div>
              <small className="font-light text-[0.7rem]">
                {formatTimeAgo(createdAt)}
              </small>
            </div>
            <div className="w-[2.5vw] h-[2.5vw] bg-orange-100 rounded-full flex items-center justify-center my-6 mr-2">
              <Avatar src={src} />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="flex flex-row gap-2">
            <div className="w-[2.5vw] h-[2.5vw] bg-orange-100 rounded-full flex items-center justify-center my-6 ml-2">
              <Avatar src={src} />
            </div>
            <div>
              <span className="my-1">
                {senderFirstName} {senderLastName}
              </span>
              <div className="py-1.5 px-2.5 rounded-xl bg-gray-100 flex items-center justify-center min-w-1">
                <h1>{message}</h1>
              </div>
              <small className="font-light text-[0.7rem]">
                {formatTimeAgo(createdAt)}
              </small>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
