import { ApolloWrapper } from "@/lib/apollo-wrapper";
import "../styles/globals.css"
import { Toaster, toast } from "sonner";
import { Button } from "@/components/ui/button";
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Toaster />
        <ApolloWrapper>{children}</ApolloWrapper>
        
      </body>
    </html>
  );
}
