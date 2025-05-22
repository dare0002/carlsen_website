const baseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const table= "Materials";
const endpoint = `${baseURL}/rest/v1/${table}`;

async function apiFetch(url, options = {}) {
    const response = await fetch(url, options);
    const json = await response.json();
    console.log("Supabase response status:", response.status);
    console.log("Supabase response data:", json);
    if (!response.ok) {
        throw new Error(`Supabase error: ${response.status}`);
    }
    return json;
}

export async function getMaterials() {
    return apiFetch(`${endpoint}?order=id.desc`, {
        method: "GET", 
        headers: {
            apikey: supabaseKey,
            Authorization: `Bearer ${supabaseKey}`,
        },
    });
}