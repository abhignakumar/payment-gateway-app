import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../../lib/auth";

export const GET = async () => {
  const session = await getServerSession(authOptions);

  return NextResponse.json({
    session,
  });
};
