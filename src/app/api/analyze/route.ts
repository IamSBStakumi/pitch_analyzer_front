import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const url = process.env.NEXT_PUBLIC_REQUEST_URL as string;

export const GET = async (req: NextRequest) => {
  try {
    const formData = await req.formData();

    const response = await axios.post(`${url}/analyze/file`, formData);

    return new NextResponse(response.data, {
      status: 200,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};
