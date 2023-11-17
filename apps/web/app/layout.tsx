import { ApolloWrapper } from "@/lib/apollo-wrapper";
import "../styles/globals.css"
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body><ApolloWrapper>{children}</ApolloWrapper></body>
    </html>
  );
}
