export default function SelectionForm({ sort, onChange }) {
    const optionArray = sort
    return (
        <select className="outline-none border px-4 py-2 bg-egg" onChange={onChange}>
            {optionArray.map(el => <option key={el.id}>{el.name}</option>)}
        </select>
    )
}
