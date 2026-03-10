// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";

// export default function VisitorFormCreation() {
//   return (
//     <div className="space-y-4 mt-6">
//       <div>
//         <Label>Visitor Number</Label>
//         <Input placeholder="VN101" />
//       </div>

//       <div>
//         <Label>Visitor Name</Label>
//         <Input />
//       </div>

//       <div>
//         <Label>Mobile Number</Label>
//         <Input />
//       </div>

//       <div>
//         <Label>Purpose</Label>
//         <Input />
//       </div>

//       <Button>Create Form</Button>
//     </div>
//   );
// }

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export default function VisitorFormCreation() {
  const [visitorNumber, setVisitorNumber] = useState("");
  const [visitorName, setVisitorName] = useState("");
  const [mobile, setMobile] = useState("");
  const [purpose, setPurpose] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      visitorNumber,
      visitorName,
      mobile,
      purpose,
    };

    console.log(data);
  };

  return (
    <div>
      <Card className="w-[450px] shadow-lg">
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
                placeholder="VN101"
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
                placeholder="Enter mobile number"
                value={mobile}
                required
                onChange={(e) => setMobile(e.target.value)}
              />
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

            <Button className="w-full cursor-pointer" type="submit">
              Create Form
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
