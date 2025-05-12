import Category from "./Category";
import Link from "next/link";

const Categories = () => {
    return (
        <div className="">
            <div className="mb-8 text-center space-y-2">
            <h2 className="text-lg md:text-xl font-bold mb-2">Find det rette materiale</h2>
            <p>Er du underviser, pædagog eller bibliotekar?</p>
            <p>Find det rette materiale til dig og dine elever - tilpasset</p>
            <p>klassetrin og faglige behov herunder.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/Category">
                <Category text="Førskole" bgColor="bg-pink"/>
                </Link>
                <Category text="Indskoling" bgColor="bg-lightblue"/>
                <Category text="Mellemtrin" bgColor="bg-orange"/>
                <Category text="Udskoling" bgColor="bg-green"/>
            </div>
        </div>
     );
}
 
export default Categories;