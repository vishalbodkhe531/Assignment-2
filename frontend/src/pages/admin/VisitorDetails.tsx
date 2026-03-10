export default function VisitorDetails() {
  const visitors = [
    { name: "Rahul", mobile: "9876543210", purpose: "Meeting" },
    { name: "Amit", mobile: "9876543211", purpose: "Interview" },
  ];

  return (
    <div className="mt-6">
      <table className="w-full border">
        <thead>
          <tr className="border">
            <th>Name</th>
            <th>Mobile</th>
            <th>Purpose</th>
          </tr>
        </thead>

        <tbody>
          {visitors.map((v, i) => (
            <tr key={i} className="border">
              <td>{v.name}</td>
              <td>{v.mobile}</td>
              <td>{v.purpose}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
