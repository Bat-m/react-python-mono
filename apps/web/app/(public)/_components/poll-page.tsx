"use client";

export const dynamic = "force-dynamic";

import {useProjectsQuery} from "@packages/codegen"


export default function PollPage() {
  const { data }:any = useProjectsQuery();

  return <div>{JSON.stringify(data)}</div>;
};