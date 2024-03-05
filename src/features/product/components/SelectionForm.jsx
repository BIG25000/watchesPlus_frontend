export default function SelectionForm({ name }) {
    const optionArray = name.split(',')
    return (
        <select className="outline-none border px-4 py-2 bg-egg">
            {optionArray.map(el => <option key={el}>{el}</option>)}
        </select>
    )
}
