"use client";

import Card from "./components/Card";
import Modal from "./components/Modal";
import FilterMenu from "./components/FilterMenu";
import { useState, useEffect } from "react"; 
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

    // side menu, filtrering!

    const [allMaterials, setAllMaterials] = useState([]);
    const [durationFilter, setDurationFilter] = useState([]);
    const [typeFilter, setTypeFilter] = useState([]);

    const applyFilters = () => {
        let filtered = allMaterials;

        if (durationFilter.length > 0) {
            filtered = filtered.filter(mat =>
                durationFilter.some(([min, max]) => mat.forberedelsestid >= min && mat.forberedelsestid <= max));
        }

        if (typeFilter.length > 0){
            filtered= filtered.filter(mat => typeFilter.includes(mat.type));
        }

        filtered = filtered.filter(mat => mat.grade.includes(grade));
        setMaterials(filtered);
    };

    useEffect(() => {
        if (!grade) return;

        async function fetchData() {
            try {
                const fetchedMaterials = await getMaterials();
                const byGrade = fetchedMaterials.filter(mat => mat.grade.includes(grade));
                setAllMaterials(byGrade);
                setMaterials(byGrade);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [grade]);

    // useEffect(() => {
    //     if(!grade) return;

    //     async function fetchData(){
    //         try{
    //             const allMaterials = await getMaterials();
    //             const filtered = allMaterials.filter((mat)=>
    //                 mat.grade.includes(grade)
    //             );
    //             setMaterials(filtered);
    //         } catch (error){
    //             console.error(error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     }

    //     fetchData();
    // }, [grade]);

    useEffect(() => {
        applyFilters();
    }, [durationFilter, typeFilter]);

    const handleOpenModal = (material) => {
        setSelectedMaterial(material);
    };

    const handleCloseModal = () => {
        setSelectedMaterial(null);
    };

    if(loading) return <p className="text-center">Loading...</p>;
    if (materials.length===0) return <p className="text-center my-40 text-2xl">Intet materiale for "{grade}" blev fundet.</p>;



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
            <h2 className="text-lg md:text-xl font-bold text-center mb-8">Materiale</h2>

            <div className="flex flex-col lg:flex-row w-full mx-auto px-4 md:px-8 gap-8">
                <FilterMenu
                    durationFilter={durationFilter}
                    setDurationFilter={setDurationFilter}
                    typeFilter={typeFilter}
                    setTypeFilter={setTypeFilter}
                />
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {materials.map((mat) => (
                <Card key={mat.id} data={mat} onReadMore={()=> handleOpenModal(mat)}/>

            ))}
            </div>
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