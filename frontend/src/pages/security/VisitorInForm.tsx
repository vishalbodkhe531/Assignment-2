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
    <div className="flex justify-center items-center flex-col h-screen ">
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle>Visitor IN</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label>Visitor Name</Label>
              <Input name="name" required onChange={handleChange} />
            </div>

            <div>
              <Label>Mobile</Label>
              <Input name="mobile" required onChange={handleChange} />
            </div>

            <div>
              <Label>Email</Label>
              <Input name="email" required onChange={handleChange} />
            </div>

            <div>
              <Label>Person To Meet</Label>
              <Input name="personToMeet" required onChange={handleChange} />
            </div>

            <div>
              <Label>Department</Label>
              <Input name="department" required onChange={handleChange} />
            </div>

            <div>
              <Label>Purpose</Label>
              <Input name="purpose" required onChange={handleChange} />
            </div>

            <Button className="w-full cursor-pointer" type="submit">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
