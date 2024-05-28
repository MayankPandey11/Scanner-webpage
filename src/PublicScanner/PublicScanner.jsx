import './PublicScanner.css'

export default function PublicScanner(){
  return (
    <>
      <div className="search-section">
        <h1 className="search-heading">Public Scanners</h1>
        <h2 className="search-subheading">Search Scanners</h2>
        <p className="search-paragraph">
          Search over 150,000+ scans or create your own customized screener.
        </p>
        <div className="search-bar-container">
          <input type="text" className="search-input" placeholder="Search..." />
          <button className="search-button">
            <i className="fas fa-search"></i> Search
          </button>
        </div>
      </div>

    </>
  );
}