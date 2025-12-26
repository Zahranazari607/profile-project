import Row from "./Row";

export default function AccountDetailsCard({ details }) {
  return (
    <div className="card">
      <h2 className="cardTitle">Account Details</h2>
      <div className="rows">
        {Object.keys(details).map((label) => (
          <Row key={label} label={label} value={details[label]} />
        ))}
      </div>
    </div>
  );
}


