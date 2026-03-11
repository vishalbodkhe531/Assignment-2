import VisitorInDetails from "@/components/security/VisitorInDetails";
import VisitorOutDetailsForm from "@/components/security/VisitorOutDetailsForm";
import VisitorReportDownload from "@/components/security/VisitorReportDownload";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SecurityDashboard() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Security Dashboard</h1>

      <Tabs defaultValue="visitor-in" className="w-full">
        <TabsList className="grid w-[600px] grid-cols-3">
          <TabsTrigger value="visitor-in" className="cursor-pointer">
            Visitor In Details
          </TabsTrigger>

          <TabsTrigger value="visitor-out" className="cursor-pointer">
            Visitor Out Details Form
          </TabsTrigger>

          <TabsTrigger value="report" className="cursor-pointer">
            Visitor Report Download
          </TabsTrigger>
        </TabsList>

        <TabsContent value="visitor-in">
          <VisitorInDetails />
        </TabsContent>

        <TabsContent value="visitor-out">
          <VisitorOutDetailsForm />
        </TabsContent>

        <TabsContent value="report">
          <VisitorReportDownload />
        </TabsContent>
      </Tabs>
    </div>
  );
}
