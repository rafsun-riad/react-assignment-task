import { useState } from 'react';
import AddorRemoveColumn from './AddorRemoveColumn';
import ShowTable from './ShowTable';

// data
const tableData = [
  {
    id: 1,
    column: { heading: 'Title', rowData: ['Title1', 'Title2'] },
  },
  {
    id: 2,
    column: { heading: 'Category', rowData: ['Category1', 'Category2'] },
  },
  {
    id: 3,
    column: { heading: 'Price', rowData: ['Price1', 'Price2'] },
  },
  {
    id: 4,
    column: { heading: 'Date', rowData: ['date1', 'date2'] },
  },
  {
    id: 5,
    column: { heading: 'Author', rowData: ['Author1', 'Author2'] },
  },
  {
    id: 6,
    column: { heading: 'Status', rowData: ['Status1', 'Status2'] },
  },
  {
    id: 7,
    column: { heading: 'Action', rowData: ['Action1', 'Action2'] },
  },
];

function App() {
  const [colListShowOrHide, setCoListShowOrHide] = useState(false);
  const [columnId, setColumnId] = useState([]);

  function getId(id) {
    if (!id) return;

    setColumnId([...columnId, id]);
  }

  function deleteId(id) {
    const filteredID = columnId.filter((e) => e !== id);
    setColumnId(filteredID);
  }

  return (
    <div>
      <h1>Table task</h1>

      <button onClick={() => setCoListShowOrHide(!colListShowOrHide)}>
        Show or Hide Column List
      </button>

      {/* showing column list */}
      <ul>
        {colListShowOrHide &&
          tableData.map((data) => (
            <AddorRemoveColumn
              data={data}
              key={data.id}
              getId={getId}
              deleteId={deleteId}
            />
          ))}
      </ul>

      {/* rendering table */}
      <ul className="table">
        {tableData.map((data) =>
          columnId.some((id) => id === data.id) ? (
            <ShowTable data={data.column} key={data.column.heading} />
          ) : (
            ''
          )
        )}
      </ul>
    </div>
  );
}

export default App;
