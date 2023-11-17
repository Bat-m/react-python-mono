"use client";

export const dynamic = "force-dynamic";

import { Button } from "@/components/ui/button";
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { toast } from "sonner";

const query = gql`query {
  launchLatest {
    mission_name
  }
}`

export default function PollPage() {
  const { data }:any = useSuspenseQuery(query);

  return <div>{data?.launchLatest?.mission_name}</div>;
};