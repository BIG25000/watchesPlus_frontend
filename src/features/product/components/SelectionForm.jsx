export default function SelectionForm({ items, onClick }) {
    return (
        <select className="outline-none border px-4 py-2 bg-egg" onClick={onClick}>
            {items?.map(el => <option key={el.id}>{el.name}</option>)}
        </select>
    )
}
