const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;
async function fetchProperties() {
  try {
    if (!apiDomain) return [];
    const res = await fetch(`${apiDomain}/properties`);
    const result = await res.json();
    if (!res.ok) throw new Error("Failed to Fetch data");
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function fetchProperty(id) {
  try {
    if (!apiDomain) return null;
    const res = await fetch(`${apiDomain}/properties/${id}`);
    const result = await res.json();
    if (!res.ok) throw new Error("Failed to Fetch data");
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}




export { fetchProperties, fetchProperty };
