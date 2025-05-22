import Category from "./Category";
import Link from "next/link";
import { gradeStyles } from "@/lib/gradeStyles";

const Categories = () => {
    console.log('gradeStyles:', gradeStyles);

    return (
        <div id="materiale">
            <div className="mb-8 text-center space-y-2">
            <h2 className="text-lg md:text-xl font-bold mb-2">Find det rette materiale</h2>
            <p>Er du underviser, pædagog eller bibliotekar?</p>
            <p>Find det rette materiale til dig og dine elever - tilpasset</p>
            <p>klassetrin og faglige behov herunder.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(gradeStyles).map(([key,{label, color}]) => (
                    <Link
                    key={key}
                    href={{pathname: `/Category/${key}`, query: { grade: key }}}
                    >
                        <Category text={label} bgColor={color}/>

                    </Link>
                ))}
            </div>
        </div>
     );
}
 
export default Categories;