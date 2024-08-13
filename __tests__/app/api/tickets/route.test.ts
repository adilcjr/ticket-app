import { POST } from "@/app/api/tickets/route";
import { ticketSchema } from "@/ValidationSchemas/tickets";
import prisma from "@/prisma/db";

// Mocking dependencies
jest.mock("@/ValidationSchemas/tickets", () => ({
  ticketSchema: {
    safeParse: jest.fn(),
  },
}));
jest.mock("@/prisma/db", () => ({
  ticket: {
    create: jest.fn(),
  },
}));

describe("POST ticket route", () => {
  it("should create a ticket successfully", async () => {
    const mockRequest = {
      json: jest.fn().mockResolvedValue({ title: "Test Ticket", price: 20 }),
    };
    const mockResponse = { json: jest.fn() };
    ticketSchema.safeParse.mockReturnValue({ success: true });
    prisma.ticket.create.mockResolvedValue({
      id: 1,
      title: "Test Ticket",
      price: 20,
    });

    const response = await POST(mockRequest as any);

    expect(response.status).toBe(201);
    expect(response.body).toEqual({ id: 1, title: "Test Ticket", price: 20 });
  });

  it("should return a 400 status on validation failure", async () => {
    const mockRequest = {
      json: jest.fn().mockResolvedValue({ title: "", price: -10 }),
    };
    const mockResponse = { json: jest.fn() };
    ticketSchema.safeParse.mockReturnValue({
      success: false,
      error: { format: () => "Validation Error" },
    });

    const response = await POST(mockRequest as any);

    expect(response.status).toBe(400);
    expect(response.body).toBe("Validation Error");
  });
});
