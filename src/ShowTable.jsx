function ShowTable({ data }) {
  return (
    <li>
      <div>{data.heading}</div>

      {data.rowData.map((el) => (
        <div className="table-row-data" key={el}>
          {el}
        </div>
      ))}
    </li>
  );
}

export default ShowTable;
