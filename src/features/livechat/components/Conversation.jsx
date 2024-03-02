import React from "react";

export default function Conversation({ own }) {
  return (
    <>
      {own ? (
        <div className="flex flex-col items-end">
          <div className="flex flex-row gap-2">
            <div className="flex flex-col items-end">
              <div>
                <span>name</span>
              </div>
              <div className="py-1.5 px-2.5 rounded-xl bg-blue-400 flex items-center justify-center max-w-[13vw]">
                <h1 className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                  fuga.
                </h1>
              </div>
              <small>1 hour ago</small>
            </div>
            <div className="w-[2.5vw] h-[2.5vw] bg-blue-100 rounded-full flex items-center justify-center my-6 mr-2">
              <span>Avatar</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="flex flex-row gap-2">
            <div className="w-[2.5vw] h-[2.5vw] bg-blue-100 rounded-full flex items-center justify-center my-6 ml-2">
              <span>Avatar</span>
            </div>
            <div>
              <span>name</span>
              <div className="py-1.5 px-2.5 rounded-xl bg-gray-200 flex items-center justify-center max-w-[13vw]">
                <h1>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                  fuga.
                </h1>
              </div>
              <small>1 hour ago</small>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
