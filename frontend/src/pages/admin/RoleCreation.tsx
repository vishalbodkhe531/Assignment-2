// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { useState } from "react";

// export default function RoleCreation() {
//   const [role, setRole] = useState("");

//   return (
//     <div className="space-y-4 mt-6">
//       <div>
//         <Label>Username</Label>
//         <Input placeholder="Enter username" />
//       </div>

//       <div>
//         <Label>Password</Label>
//         <Input type="password" />
//       </div>

//       <div>
//         <Label>Select Role</Label>

//         <Select onValueChange={(value) => setRole(value as string)} required>
//           <SelectTrigger>
//             <SelectValue placeholder="Choose role" />
//           </SelectTrigger>

//           <SelectContent>
//             <SelectItem value="security">Security</SelectItem>
//             <SelectItem value="manager">Manager</SelectItem>
//             <SelectItem value="hr">HR</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>

//       <Button>Create Role</Button>
//     </div>
//   );
// }

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RoleCreation() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      username,
      password,
      role,
    };

    console.log(data);

    // Frontend role-based navigation
    if (role === "security") {
      navigate("/security/visitor-in");
    } else if (role === "manager") {
      navigate("/manager/meeting-status");
    } else if (role === "hr") {
      navigate("/hr/visitor-list");
    }
  };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   const data = {
  //     username,
  //     password,
  //     role,
  //   };

  //   console.log(data);

  //   // Frontend role-based navigation
  //   if (role === "security") {
  //     navigate("/security/visitor-in");
  //   } else if (role === "manager") {
  //     navigate("/manager/meeting-status");
  //   } else if (role === "hr") {
  //     navigate("/hr/visitor-list");
  //   }
  // };

  return (
    // <div className="flex min-h-screen items-center justify-center bg-gray-100">
    <div className="">
      <Card className="w-[400px] shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Login Form</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label>Username</Label>
              <Input
                placeholder="Enter username"
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <Label>Select Role</Label>

              <Select
                onValueChange={(value) => setRole(value as string)}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choose role" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="security">Security</SelectItem>
                  <SelectItem value="manager">Manager</SelectItem>
                  <SelectItem value="hr">HR</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full cursor-pointer" type="submit">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
