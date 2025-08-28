import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      phone,
      date,
      time,
      partySize,
      note,
    }: {
      name?: string;
      phone?: string;
      date?: string;
      time?: string;
      partySize?: string | number;
      note?: string;
    } = body || {};

    if (!name || !phone || !date || !time || !partySize) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const webhookUrl = process.env.MAKE_WEBHOOK_URL;
    if (!webhookUrl) {
      return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
    }

    const payload = {
      type: "reservation_request",
      source: "website",
      timestamp: new Date().toISOString(),
      data: { name, phone, date, time, partySize, note },
    };

    const resp = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      // Make should accept anonymous POSTs; if not, add auth header here.
    });

    if (!resp.ok) {
      const text = await resp.text();
      return NextResponse.json({ error: `Webhook failed: ${text}` }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    const message =
      typeof e === "object" && e !== null && "message" in e
        ? String((e as { message?: unknown }).message)
        : "Server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

