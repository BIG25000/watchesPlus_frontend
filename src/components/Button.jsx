const bgClass = {
  brown:
    "bg-gradient-to-t from-stone-500 to-stone-700 hover:bg-gradient-to-t hover:from-stone-600 hover:to-stone-800",
  // brown: "bg-brown hover:bg-amber-600",
  scarlet:
    "bg-gradient-to-tr from-rose-600 to-red-800 hover:bg-gradient-to-tr hover:from-rose-700 hover:to-red-900",
  red: "bg-red-500 hover:bg-red-600",
  cyan: "bg-gradient-to-tr from-teal-500 to-emerald-800 hover:bg-gradient-to-tr hover:from-teal-600 hover:to-emerald-900",
  green: "bg-green-600 hover:bg-green-700",
  remove: "hover:bg-egg hover:text-black",
  black: "bg-black hover:bg-gray-700",
};

const colorClass = {
  black: "text-black",
  white: "text-white",
};

export default function Button({
  bg,
  color,
  onClick,
  type,
  children,
  id,
  width,
}) {
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
