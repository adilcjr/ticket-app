"use client";

import { Ticket, User } from "@prisma/client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectSeparator,
} from "@/components/ui/select";
import axios from "axios";

interface Props {
  ticket: Ticket;
  users: User[];
}

const AssignTicket = ({ ticket, users }: Props) => {
  const [isAssigning, setIsAssigning] = useState(false);
  const [error, setError] = useState("");

  const assignTicket = async (userId: string) => {
    setError("");
    setIsAssigning(true);
    await axios
      .patch(`/api/tickets/${ticket.id}`, {
        userId: userId === "0" ? null : userId,
      })
      .catch((error) => {
        setError("Unable to assign ticket");
        console.log(error);
      });

    setIsAssigning(false);
  };

  return (
    <>
      <Select
        defaultValue={ticket.userId?.toString() || "0"}
        onValueChange={assignTicket}
        disabled={isAssigning}
      >
        <SelectTrigger>Assign ticket</SelectTrigger>
        <SelectContent>
          <SelectItem value="0">Unassigned</SelectItem>
          {users.map((user) => (
            <SelectItem key={user.id} value={user.id.toString()}>
              {user.username}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <p className="text-destructive">{error}</p>
    </>
  );
};

export default AssignTicket;
