import { ticketPatchSchema } from "@/ValidationSchemas/tickets";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/db";
import { parse } from "path";

interface Props {
  params: { id: string };
}

export async function PATCH(request: NextRequest, { params }: Props) {
  const body = await request.json();
  const validation = ticketPatchSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }

  if (body.userId) {
    body.userId = parseInt(body.userId);
  }

  const ticket = await prisma.ticket.findUnique({
    where: { id: Number(params.id) },
  });
  if (!ticket) {
    return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
  }

  const updatedTicket = await prisma.ticket.update({
    where: { id: Number(params.id) },
    data: { ...body },
  });

  return NextResponse.json(updatedTicket, { status: 200 });
}

export async function DELETE(request: NextRequest, { params }: Props) {
  const ticket = await prisma.ticket.findUnique({
    where: { id: Number(params.id) },
  });
  if (!ticket) {
    return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
  }

  await prisma.ticket.delete({ where: { id: Number(params.id) } });

  return NextResponse.json({ message: "Ticket deleted" }, { status: 200 });
}
