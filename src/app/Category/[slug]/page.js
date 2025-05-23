"use client";

import Card from "./components/Card";
import Modal from "./components/Modal";
import { useState, useEffect, use } from "react"; 
import { useSearchParams } from "next/navigation";
import { getMaterials } from "@/lib/apiCards";
import { gradeStyles } from "@/lib/gradeStyles";
import { LuDownload } from "react-icons/lu";

const Materials = () => {
    const searchParams = useSearchParams();
    const grade = searchParams.get("grade");
    const [materials, setMaterials]= useState([]);
    const [loading, setLoading]= useState(true);

    const [selectedMaterial, setSelectedMaterial] = useState(null);

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

    const handleOpenModal = (material) => {
        setSelectedMaterial(material);
    };

    const handleCloseModal = () => {
        setSelectedMaterial(null);
    };

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
                <Card key={mat.id} data={mat} onReadMore={()=> handleOpenModal(mat)}/>

            ))}
            </div>

            {/* Modal starter */}

            <Modal isOpen={!!selectedMaterial} onClose={handleCloseModal}>
                {selectedMaterial && (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <img src={selectedMaterial.img} alt={selectedMaterial.title} className="mt-4 rounded " />
                            </div>
                            <div className="mt-2">
                                <h2 className="text-lg md:text-xl font-bold mb-2">{selectedMaterial.type}</h2>
                                <p className="mb-2"><strong>{selectedMaterial.title} </strong>af {selectedMaterial.author}</p>
                                <p className="mb-4">Udarbejdet af {selectedMaterial.credit}</p>
                                <p className="mb-4">{selectedMaterial.summary}</p>
                                <p><strong>Bedst egnet til:</strong> {selectedMaterial.grade?.join(" og ")}</p>
                                <p><strong>Forberedelsestid:</strong> {selectedMaterial.forberedelsestid} minutter</p>
                                <p><strong>Temaer:</strong> {selectedMaterial.themes?.join(", ")}</p>
                                <a
                                    href="/dummyfile.pdf"
                                    download
                                    className="flex items-center gap-2 text-green font-semibold text-lg mt-4 hover:text-green-700 transition"
                                    >
                                    Download materiale <LuDownload className="h-6 w-6" />
                                </a>
                                {/* <h3 className="flex items-center gap-4 text-lg font-semibold mt-4">Download materiale <LuDownload className="h-6 w-6 text-green"/></h3> */}
                            </div>
                        </div>
                        <div>
                            <p className="italic text-center mt-8">Alt materiale på Carlsen Ekstra´s hjemmeside er gratis</p>
                        </div>
                    </>
                )}

            </Modal>



        </>
      );
};
 
export default Materials;