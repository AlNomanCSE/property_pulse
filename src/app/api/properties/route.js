import connectedDB from "@/config/database";
import Property from "@/models/Property";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connectedDB();
    const properties = await Property.find({});
    return new Response(JSON.stringify(properties), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ message: "Something went wrong ..." },
      { status: 500 })
    );
  }
};
