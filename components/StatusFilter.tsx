"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Status } from "@prisma/client";

const statuses: { label: string; value: string }[] = [
  { label: "Open / Started", value: "" },
  { label: "Open", value: Status.OPEN },
  { label: "Started", value: Status.STARTED },
  { label: "Closed", value: Status.CLOSED },
];
const StatusFilter = () => {
  const route = useRouter();
  const searchParams = useSearchParams();

  return (
    <Select
      defaultValue={searchParams.get("status") || ""}
      onValueChange={(status) => {
        const params = new URLSearchParams();
        if (status) params.append("status", status);
        const query = params.size ? `${params.toString()}` : "0";
        route.push(`/tickets?${query}`);
      }}
    >
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Filter by status" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {statuses.map((status) => (
            <SelectItem key={status.value || "0"} value={status.value || "0"}>
              {status.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default StatusFilter;
