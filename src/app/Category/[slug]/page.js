"use client";

import Card from "./components/Card";
import { useState, useEffect, use } from "react"; 
import { useSearchParams } from "next/navigation";
import { getMaterials } from "@/lib/apiCards";
import { gradeStyles } from "@/lib/gradeStyles";

const Materials = () => {
    const searchParams = useSearchParams();
    const grade = searchParams.get("grade");
    const [materials, setMaterials]= useState([]);
    const [loading, setLoading]= useState(true);

    useEffect(() => {
        if(!grade) return;

        async function fetchData(){
            try{
                const allMaterials = await getMaterials();
                const filtered = allMaterials.filter((mat)=>
                    mat.grade.includes(grade)
                );
                setMaterials(filtered);
            } catch (error){
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [grade]);

    if(loading) return <p>Loading...</p>;
    if (materials.length===0) return <p>Intet materiale for "{grade}" blev fundet.</p>;



    return (
        <>
            <div className={`${gradeStyles[grade]?.color || "bg-offwhite"} w-full md:h-[200] p-4 font-bold text-offwhite text-lg mb-10 flex flex-col justify-center items-center text-center`}>
                <h2 className="text-2xl md:text-3xl font-bold">
                    {gradeStyles[grade]?.label || "Materialer"}
                </h2>
                {gradeStyles[grade]?.subtitle && (
                    <p className="text-sm md:text-base mt-2">{gradeStyles[grade].subtitle}</p>
                )}
            </div>
            <h2 className="text-lg md:text-xl font-bold text-center mb-8">Undervisningsmateriale</h2>
            <div className="px-4 md:px-8 max-w-6xl mx-auto space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {materials.map((mat) => (
                <Card key={mat.id} data={mat}/>

            ))}
            </div>
        </>
      );
};
 
export default Materials;