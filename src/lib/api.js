const baseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const table= "Newsletter";
const endpoint = `${baseURL}/rest/v1/${table}`;

// Denne kode indholder logiken for at snakke sammen med Supabase(fetch/posts requests)

// async function apiFetch(url, options ={}) {
//     const response = await fetch(url, options);
//     return response.json();
// }

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

export async function getData() {
    return apiFetch(`${endpoint}?order=id.desc`, {
        method: "GET", 
        headers: {
            apikey: supabaseKey,
            Authorization: `Bearer ${supabaseKey}`,
        },
    });
}

// export async function postData(data) {
//     console.log("Sending data to supabase",data);
//     return apiFetch(endpoint, {
//         method: "POST",
//         headers: {
//             apikey: supabaseKey,
//             Authorization: `Bearer ${supabaseKey}`,
//             "Content-Type": "application/json",
//             Prefer: "return=representation",
//         },
//         body: JSON.stringify(data),
//         });  
// }

export async function postData(data) {
    console.log("Sending data to Supabase:", data);
    try {
        const result = await apiFetch(endpoint, {
            method: "POST",
            headers: {
                apikey: supabaseKey,
                Authorization: `Bearer ${supabaseKey}`,
                "Content-Type": "application/json",
                Prefer: "return=representation",
            },
            body: JSON.stringify(data),
        });
        console.log("Success:", result);
        return result;
    } catch (error) {
        console.error("POST error:", error.message);
        return null;
    }
}



