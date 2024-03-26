import connectedDB from "@/config/database";
import Property from "@/models/Property";

export const GET = async (req, { params }) => {
  try {
    await connectedDB();
    const property = await Property.findById(params.id);
    if (!property) return new Property("Property not found", { status: 404 });
    return new Response(JSON.stringify(property), { status: 200 });
  } catch (error) {
    return new Response("Something went wrong", { status: 200 });
  }
};
