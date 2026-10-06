import { appendFile } from "fs/promises";
import { execFile } from "child_process";
import path from "path";
import { NextResponse } from "next/server";

const logPath = path.join(process.cwd(), "contact-pings.txt");

function isEmail(value: string) {
  return value.length <= 200 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function notify(message: string) {
  execFile("osascript", [
    "-e",
    "on run argv",
    "-e",
    'display notification (item 1 of argv) with title "Pre-Brand ping"',
    "-e",
    "end run",
    "--",
    message,
  ]);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const topic = typeof body?.topic === "string" ? body.topic.trim().slice(0, 140) : "Pre-Brand";
  const page = typeof body?.page === "string" ? body.page.trim().slice(0, 200) : "";
  const company = typeof body?.company === "string" ? body.company.trim() : "";

  if (company) return NextResponse.json({ ok: true });
  if (!isEmail(email) || !topic) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const when = new Date().toLocaleString("en-US", { timeZone: "America/New_York", hour12: true });
  const line = `${when}\t${email}\t${topic}\t${page}\n`;

  try {
    await appendFile(logPath, line, "utf8");
  } catch (error) {
    console.error("Could not save contact ping", error);
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  notify(`${email} — ${topic}`);
  return NextResponse.json({ ok: true });
}
