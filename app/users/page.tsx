import UserForm from "@/components/UserForm";
import React from "react";
import DataTable from "./DataTable";
import prisma from "@/prisma/db";

const Users = async () => {
  const users = await prisma.user.findMany();

  return (
    <div>
      <UserForm />
      <DataTable users={users} />
    </div>
  );
};

export default Users;
