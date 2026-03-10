import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function VisitorOutForm() {
  return (
    <div className="w-[500px]">
      <h2 className="text-xl font-semibold mb-4">Visitor OUT</h2>

      <div className="space-y-4">
        <Input placeholder="Visitor ID" />
        <Input placeholder="Visitor Name" />
        <Input placeholder="Out Time" />
        <Input placeholder="Remarks" />

        <Button className="w-full">Update</Button>
      </div>
    </div>
  );
}
