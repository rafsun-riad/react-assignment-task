function AddorRemoveColumn({ data, getId, deleteId }) {
  function handleChange(e) {
    if (e.target.checked) {
      getId(data.id);
    } else {
      deleteId(data.id);
    }
  }

  return (
    <li>
      <input type="checkbox" onChange={handleChange} />
      {data.column.heading}
    </li>
  );
}

export default AddorRemoveColumn;
