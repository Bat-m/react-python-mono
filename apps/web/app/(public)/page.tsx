import { Metadata } from "next"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { BrandingForm } from "./_forms/branding-forms"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DataServerForm } from "./_forms/data-server-forms"
import PollPage from "./_components/poll-page"



export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
}

export default function DashboardPage() {
  return (
    <>
      <TailwindIndicator />
      <Tabs defaultValue="brandings" className="w-1/2 mx-auto mt-12">
        <TabsList>
          <TabsTrigger value="brandings">Personnalisation</TabsTrigger>
          <TabsTrigger value="data-server">Infos serveur</TabsTrigger>
          <TabsTrigger value="billing">Facturation</TabsTrigger>
        </TabsList>
        <TabsContent value="brandings"><BrandingForm /></TabsContent>
        <TabsContent value="data-server"><DataServerForm/></TabsContent>
        <TabsContent value="billing">Incoming</TabsContent>

      </Tabs>

<PollPage/>
    </>
  )
}