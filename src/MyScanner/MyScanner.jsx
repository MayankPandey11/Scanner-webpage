import './MyScanner.css';

function MyScanner(){
  return (
    <div className="container">
      <h4 className="scan">Scanners</h4>
      <i className="fas fa-home icon-below-title"></i>
      <p className='para'>/Scanners</p>
      {/* <i class="fa-brands fa-bitcoin bell"></i> */}
      <div class="container mt-5 d-flex justify-content-end">
        <a href="#" class="btn download-btn">
          <i class="fas fa-download"></i>
          Download Scanner Example
        </a>
      </div>
    </div>
  );
  
}
export default MyScanner ;