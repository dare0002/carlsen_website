"use client";

import { useFormStatus } from "react-dom";

function NewsletterSubmitButton () {
    const { pending } = useFormStatus();
    return (
        <button
        type="submit"
        disabled={pending}
        className={`bg-lightgreen text-green font-semibold text-base px-4 py-2 rounded hover:bg-offwhite transition ${pending ? "opacity-50 cursor-not-allowed": "" 

        }`}
        >
            {pending ? "Sender..." : "Tilmeld"}
        </button>
      );
}
 
export default NewsletterSubmitButton;