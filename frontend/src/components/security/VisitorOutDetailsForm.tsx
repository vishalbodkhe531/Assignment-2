import { useState } from "react";
import { toast } from "react-toastify";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function VisitorOutDetailsForm() {
  const [visitorNumber, setVisitorNumber] = useState("");
  const [visitOutTime, setVisitOutTime] = useState("");
  const [totalTimeSpent, setTotalTimeSpent] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      visitorNumber,
      visitOutTime,
      totalTimeSpent,
    };

    try {
      const res = await fetch("/api/visitor/visitor-out", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      toast.success("Visitor exit updated successfully");

      setVisitorNumber("");
      setVisitOutTime("");
      setTotalTimeSpent("");

    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <Card className="w-[500px] shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            Visitor Out Details
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <Label>Visitor Number</Label>
              <Input
                placeholder="Enter visitor number"
                value={visitorNumber}
                onChange={(e) => setVisitorNumber(e.target.value)}
                required
              />
            </div>

            <div>
              <Label>Visit Out Time</Label>
              <Input
                type="time"
                value={visitOutTime}
                onChange={(e) => setVisitOutTime(e.target.value)}
                required
              />
            </div>

            <div>
              <Label>Total Time Spent</Label>
              <Input
                placeholder="Ex: 2 hours"
                value={totalTimeSpent}
                onChange={(e) => setTotalTimeSpent(e.target.value)}
                required
              />
            </div>

            <Button className="w-full cursor-pointer" type="submit">
              Update Visitor Exit
            </Button>

          </form>
        </CardContent>
      </Card>
    </div>
  );
}