import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface Visitor {
  _id: string;
  visitorNumber: string;
  visitorName: string;
  mobile: string;
  contactPerson: string;
  purpose: string;
  visitInTime: string;
  visitOutTime: string;
  totalTimeSpent: string;
}

export default function VisitorDetails() {
  const [visitors, setVisitors] = useState<Visitor[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchVisitors = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/visitor/get-visitors");
      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      setVisitors(result);
    } catch (error: any) {
      toast.error(error.message || "Failed to fetch visitors");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVisitors();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Visitor Details</h2>

      {loading ? (
        <p>Loading visitors...</p>
      ) : (
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Visitor No</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Mobile</th>
              <th className="border p-2">Contact Person</th>
              <th className="border p-2">Purpose</th>
              <th className="border p-2">In Time</th>
              <th className="border p-2">Out Time</th>
              <th className="border p-2">Total Time</th>
            </tr>
          </thead>

          <tbody>
            {visitors.map((visitor) => (
              <tr key={visitor._id}>
                <td className="border p-2">{visitor.visitorNumber}</td>
                <td className="border p-2">{visitor.visitorName}</td>
                <td className="border p-2">{visitor.mobile}</td>
                <td className="border p-2">{visitor.contactPerson}</td>
                <td className="border p-2">{visitor.purpose}</td>
                <td className="border p-2">{visitor.visitInTime}</td>
                <td className="border p-2">{visitor.visitOutTime}</td>
                <td className="border p-2">{visitor.totalTimeSpent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
