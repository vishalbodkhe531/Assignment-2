import { useState } from "react";
import { toast } from "react-toastify";

export default function VisitorOutDetailsForm() {
  const [visitorNumber, setVisitorNumber] = useState("");
  const [visitOutTime, setVisitOutTime] = useState("");
  const [totalTimeSpent, setTotalTimeSpent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/visitor/visitor-out", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          visitorNumber,
          visitOutTime,
          totalTimeSpent,
        }),
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.message);

      toast.success("Visitor OUT updated");
    } catch (error:any) {
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 max-w-md">
      <input
        placeholder="Visitor Number"
        onChange={(e)=>setVisitorNumber(e.target.value)}
      />

      <input
        type="time"
        onChange={(e)=>setVisitOutTime(e.target.value)}
      />

      <input
        placeholder="Total Time Spent"
        onChange={(e)=>setTotalTimeSpent(e.target.value)}
      />

      <button type="submit">Update Visitor OUT</button>
    </form>
  );
}