import { Input } from "antd";

function Search( { search , onSearchChange} ) {
 
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "20px auto",
      }}
    >
      <Input
        placeholder="Search notes..."
        allowClear
        value={search}
        onChange={onSearchChange}
        style={{ width: "400px" }}
      />
    </div>
  );
}

export default Search;
