export default function VisitorList() {

  const visitors = [
    { name: "Rahul", department: "HR", status: "Approved" },
    { name: "Amit", department: "IT", status: "Pending" }
  ]

  return (
    <div className="p-10">

      <h2 className="text-2xl font-bold mb-6">Visitor List</h2>

      <table className="w-full border">

        <thead>
          <tr className="border">
            <th>Name</th>
            <th>Department</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {visitors.map((v, i) => (
            <tr key={i} className="border">
              <td>{v.name}</td>
              <td>{v.department}</td>
              <td>{v.status}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  )
}