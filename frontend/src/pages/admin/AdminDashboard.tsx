import RoleCreation from "@/components/admin/RoleCreation";
import VisitorDetails from "@/components/admin/VisitorDetails";
import VisitorFormCreation from "@/components/admin/VisitorFormCreation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AdminDashboard() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <Tabs defaultValue="roles" className="w-full ">
        <TabsList className="grid w-[400px] grid-cols-3 ">
          <TabsTrigger value="roles" className="cursor-pointer">
            Role Creation
          </TabsTrigger>

          <TabsTrigger value="form" className="cursor-pointer">
            Visitor Form
          </TabsTrigger>

          <TabsTrigger value="details" className="cursor-pointer">
            Visitor Details
          </TabsTrigger>
        </TabsList>

        <TabsContent value="roles">
          <RoleCreation />
        </TabsContent>

        <TabsContent value="form">
          <VisitorFormCreation />
        </TabsContent>

        <TabsContent value="details">
          <VisitorDetails />
        </TabsContent>
      </Tabs>
    </div>
  );
}
