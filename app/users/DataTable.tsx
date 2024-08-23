import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { User } from "@prisma/client";
import Link from "next/link";

interface Props {
  users: User[];
}

const DataTable = ({ users }: Props) => {
  return (
    <div className="w-full mt-5">
      <div className="rounded-md sm:border">
        <Table>
          <TableHeader>
            <TableRow className="bg-secondary hover:bg-secondary">
              <TableHead className="font-medium">
                <div className="flex justify-center">Name</div>
              </TableHead>
              <TableHead className="font-medium">
                <div className="flex justify-center">Username</div>
              </TableHead>
              <TableHead className="font-medium">
                <div className="flex justify-center">Role</div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users
              ? users.map((user) => (
                  <TableRow key={user.id} data-href="/">
                    <TableCell>
                      <div className="flex justify-between">
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <Link href={`/users/${user.id}`}>{user.username}</Link>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <Link href={`/users/${user.id}`}>{user.role}</Link>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DataTable;
