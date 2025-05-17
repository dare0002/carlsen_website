"use client"

import { useState } from "react";
import { useActionState } from "react";
import { actionSubmit } from "@/utils/actions";
import NewsletterSubmitButton from "@/components/NewsletterSubmitBtn"

function Newsletter () {
    // const [state, formAction] = useActionState(actionSubmit);
    const [state, formAction] = useActionState(actionSubmit, {
  name: "",
  email: "",
  success: false,
  errors: {},
  message: "",
});
    const [showForm, setShowForm] = useState(false);

    return (
        <div id="newsletter" className="bg-green py-10 mt-10">
        <form action={formAction} noValidate  className="text-offwhite px-4 md:px-8 max-w-4xl mx-auto space-y-4"
            >
            <div className="text-center space-y-4">
                <h2 className="text-lg md:text-xl font-bold mb-2">Tilmeld dig vores nyhedsbreve!</h2>
                <p>Få inspiration til din undervisning - gratis materialer & populære top-ressourcer direkte i din inbox.</p>
                    <div>
                        <button type="button" onClick={()=> setShowForm(!showForm)}
                        className="bg-lightgreen text-green font-semibold px-4 py-2 rounded hover:bg-offwhite transition"
                        >
                            {showForm ? "Luk" : "Tilmeld dig her"}
                        </button>
                    </div>
            </div>
            {/* Formularen vises kun hvis button er blevet klikket*/}
            {showForm && (
                <div className="space-y-6">
                    <div className="mb-4 max-w-md mx-auto">
                        <label htmlFor="name" className="block font-bold mb-1">
                            Navn
                        </label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        defaultValue={state?.name}
                        className="w-full rounded-md px-3 py-2 border border-offwhite bg-green text-offwhite"
                        required
                        />
                        {state?.errors?.name && <p className="text-red-200">{state.errors.name}</p>}
                    </div>
                    <div className="mb-4 max-w-md mx-auto">
                        <label htmlFor="email" className="block font-bold mb-1">
                            Email
                        </label>
                        <input 
                        type="text"
                        id="email"
                        name="email"
                        defaultValue={state?.email}
                        className="w-full rounded-md px-3 py-2 border border-offwhite bg-green text-offwhite"
                        required
                        />
                        {state?.errors?.email && <p className="text-red-200">{state.errors.email}</p>}
                    </div>
                    <div className="text-center">
                        <NewsletterSubmitButton/>
                    </div>
                    {state?.message && <p className="pt-2">{state.message}</p>}
                </div>
            )}
        </form>
        </div>
      );
}
 
export default Newsletter;