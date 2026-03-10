import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function VisitorInForm() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    personToMeet: "",
    department: "",
    purpose: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle>Visitor IN</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Visitor Name</Label>
            <Input name="name" onChange={handleChange} />
          </div>

          <div>
            <Label>Mobile</Label>
            <Input name="mobile" onChange={handleChange} />
          </div>

          <div>
            <Label>Email</Label>
            <Input name="email" onChange={handleChange} />
          </div>

          <div>
            <Label>Person To Meet</Label>
            <Input name="personToMeet" onChange={handleChange} />
          </div>

          <div>
            <Label>Department</Label>
            <Input name="department" onChange={handleChange} />
          </div>

          <div>
            <Label>Purpose</Label>
            <Input name="purpose" onChange={handleChange} />
          </div>

          <Button className="w-full">Submit</Button>
        </form>
      </CardContent>
    </Card>
  );
}
