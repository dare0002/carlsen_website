
"use server";

import {getData, postData} from "@/lib/api";
import { revalidatePath } from "next/cache";

export async function actionSubmit(prevState, formData) {
    const data = {
        email: formData.get("email"), 
        name: formData.get("name"),
    }
    const errors = {};

    if(!data.name){
        errors.name = "Navn er påkrævet.";
    } else if (data.name.length === 1) {
        errors.name = "Har dit navn virkelig kun et bogstav?";
    }

    if(!data.email || !data.email.includes("@")) {
        errors.email = "Email adresse er påkrævet og skal være gyldig.";
    }

    if (Object.keys(errors).length > 0) {
        return { success: false, errors, ...data };
    }

    try{
    const result = await getData();
    const signups = result.data || [];

    const existingEmail = signups.find((signup) => signup.email === data.email);

    if (existingEmail){
        return{
            success: false,
            errors: {email: "Emailen eksisterer allerede."},
            name: data.name, 
            email: data.email,
        };
    }

    const res = await postData(data);
    

    if (res) {
        revalidatePath("/");
        return { success:true, message: "Tak for din tilmedling!" };
    } else {
        console.log("test", data);
        return { success: false, message: "Indsendelse mislykkedes, prøv igen."}
    }
}catch(err){
    console.error("Fejl i actionSubmit:", err);
        return {
            success: false,
            message: "Noget gik galt i indsendelsen: " + err.message,
        };
}

}