import './Divscan.css' ;


export default function Divscan() {
  return (
    <div className="card card-custom">
      <div className="card-header card-header-custom">
        <h4 className="card-header-title">My Scanner</h4>
        <button className="card-button">
          <i className="fas fa-plus"></i>
          Add New
        </button>
      </div>
      <div className="card-body">
        <table className="table table-striped table-custom">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Name</th>
              <th>Type</th>
              <th>Creation Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Example Scanner</td>
              <td>Type A</td>
              <td>2023-05-28</td>
              <td>
                <button className="btn btn-primary">Edit</button>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
