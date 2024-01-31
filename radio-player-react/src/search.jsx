export default function SearchChannel({ setSearchTerm }) {
  function handleInputChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="search">
      <label htmlFor="search" className="label">Search channel</label>
      <input id="search" onChange={handleInputChange} className={"input"} />
    </div>
  );
}
