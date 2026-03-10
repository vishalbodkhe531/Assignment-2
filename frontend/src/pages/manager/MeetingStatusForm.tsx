import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

export default function MeetingStatusForm() {
  return (
    <div className="w-[500px] space-y-4">
      <Input placeholder="Visitor Name" />
      <Input placeholder="Employee Name" />

      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Meeting Status" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="approved">Approved</SelectItem>
          <SelectItem value="rejected">Rejected</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
        </SelectContent>
      </Select>

      <Input placeholder="Remarks" />

      <Button className="w-full">Update Status</Button>
    </div>
  );
}
