import { useState } from "react";
import { toast } from "react-toastify";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function VisitorInDetails() {
  const [visitorNumber, setVisitorNumber] = useState("");
  const [visitorName, setVisitorName] = useState("");
  const [mobile, setMobile] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [purpose, setPurpose] = useState("");
  const [numberOfPersons, setNumberOfPersons] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [visitInTime, setVisitInTime] = useState("");

  const [photo, setPhoto] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setPhoto(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

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
      // photo,
    };

    console.log(data);

    try {
      const res = await fetch("/api/visitor/visitor-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      setVisitorNumber("");
      setVisitorName("");
      setMobile("");
      setContactPerson("");
      setPurpose("");
      setNumberOfPersons("");
      setVehicleNumber("");
      setVisitInTime("");
      setPhoto(""); 
      

      toast.success("Visitor entry created successfully");
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <Card className="w-[500px] shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            Visitor In Details
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label>Visitor Number</Label>
              <Input
                value={visitorNumber}
                placeholder="Enter visitor number"
                onChange={(e) => setVisitorNumber(e.target.value)}
                required
              />
            </div>

            <div>
              <Label>Visitor Name</Label>
              <Input
                value={visitorName}
                placeholder="Enter visitor name"
                onChange={(e) => setVisitorName(e.target.value)}
                required
              />
            </div>

            <div>
              <Label>Mobile</Label>
              <Input
                type="tel"
                placeholder="Enter mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>

            <div>
              <Label>Contact Person</Label>
              <Input
                value={contactPerson}
                placeholder="Enter contact person"
                onChange={(e) => setContactPerson(e.target.value)}
              />
            </div>

            <div>
              <Label>Purpose</Label>
              <Input
                value={purpose}
                placeholder="Enter purpose of visit"
                onChange={(e) => setPurpose(e.target.value)}
              />
            </div>

            <div>
              <Label>Number Of Persons</Label>
              <Input
                type="number"
                placeholder="Enter number of persons"
                value={numberOfPersons}
                onChange={(e) => setNumberOfPersons(e.target.value)}
              />
            </div>

            <div>
              <Label>Vehicle Number</Label>
              <Input
                value={vehicleNumber}
                placeholder="Enter vehicle number"
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
              <Label>Visitor Photo</Label>
              <Input type="file" onChange={handleFileChange} />
            </div>

            <Button className="w-full cursor-pointer" type="submit">
              Submit Visitor Entry
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
