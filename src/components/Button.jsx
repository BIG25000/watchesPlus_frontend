const bgClass = {
  brown: "bg-brown hover:bg-amber-600",
  red: "bg-red-500 hover:bg-red-600",
  green: "bg-green-500 hover:bg-green-600",
  remove: "hover:bg-egg hover:text-black",
  black: "bg-black hover:bg-gray-700",
};

const colorClass = {
  black: "text-black",
  white: "text-white",
};

export default function Button({ bg, color, onClick, type, children, id , width }) {
  let finalClassName = `
    w-${width}
    ${bg ? bgClass[bg] : ""}
    ${color ? colorClass[color] : ""}
    px-4 py-2 rounded-md font-semibold
    `;
  return (
    <button id={id} type={type} onClick={onClick} className={finalClassName}>
      {children}
    </button>
  );
}
