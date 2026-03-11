import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { toast } from "react-toastify";

export default function VisitorFormCreation() {
  const [visitorNumber, setVisitorNumber] = useState("");
  const [visitorName, setVisitorName] = useState("");
  const [mobile, setMobile] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [purpose, setPurpose] = useState("");
  const [numberOfPersons, setNumberOfPersons] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [visitInTime, setVisitInTime] = useState("");
  const [visitOutTime, setVisitOutTime] = useState("");
  const [totalTimeSpent, setTotalTimeSpent] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      visitorNumber,
      visitorName,
      mobile,
      contactPerson,
      purpose,
      numberOfPersons,
      vehicleNumber,
      visitInTime,
      visitOutTime,
      totalTimeSpent,
    };

    try {
      const res = await fetch("/api/visitor/create-visitor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Failed to create visitor");
      }

      toast.success("Visitor created successfully");

      console.log(result);

      setVisitorNumber("");
      setVisitorName("");
      setMobile("");
      setContactPerson("");
      setPurpose("");
      setNumberOfPersons("");
      setVehicleNumber("");
      setVisitInTime("");
      setVisitOutTime("");
      setTotalTimeSpent("");
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <Card className="w-[500px] shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            Visitor Form Creation
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label>Visitor Number</Label>
              <Input
                placeholder="Enter number"
                value={visitorNumber}
                required
                onChange={(e) => setVisitorNumber(e.target.value)}
              />
            </div>

            <div>
              <Label>Visitor Name</Label>
              <Input
                placeholder="Enter visitor name"
                value={visitorName}
                required
                onChange={(e) => setVisitorName(e.target.value)}
              />
            </div>

            <div>
              <Label>Mobile Number</Label>
              <Input
                type="tel"
                placeholder="Enter mobile number"
                value={mobile}
                required
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>

            <div>
              <Label>Contact Person</Label>
              <select
                className="w-full border rounded-md p-2"
                value={contactPerson}
                onChange={(e) => setContactPerson(e.target.value)}
                required
              >
                <option value="">Select</option>
                <option value="Manager">Manager</option>
                <option value="HR">HR</option>
              </select>
            </div>

            <div>
              <Label>Purpose</Label>
              <Input
                placeholder="Enter purpose"
                value={purpose}
                required
                onChange={(e) => setPurpose(e.target.value)}
              />
            </div>

            <div>
              <Label>Number Of Persons</Label>
              <Input
                type="number"
                placeholder="1"
                value={numberOfPersons}
                required
                onChange={(e) => setNumberOfPersons(e.target.value)}
              />
            </div>

            <div>
              <Label>Vehicle Number</Label>
              <Input
                placeholder="Enter vehicle number"
                value={vehicleNumber}
                onChange={(e) => setVehicleNumber(e.target.value)}
              />
            </div>

            <div>
              <Label>Visit In Time</Label>
              <Input
                type="time"
                value={visitInTime}
                onChange={(e) => setVisitInTime(e.target.value)}
              />
            </div>

            <div>
              <Label>Visitor Out Time</Label>
              <Input
                type="time"
                value={visitOutTime}
                onChange={(e) => setVisitOutTime(e.target.value)}
              />
            </div>

            <div>
              <Label>Total Time Spent</Label>
              <Input
                placeholder="2 hours"
                value={totalTimeSpent}
                onChange={(e) => setTotalTimeSpent(e.target.value)}
              />
            </div>

            <Button className="w-full cursor-pointer" type="submit">
              Create Visitor
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
