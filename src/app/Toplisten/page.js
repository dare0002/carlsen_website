"use client";

import React, { useState, useEffect } from "react";
import Card from "../../app/Category/[slug]/components/Card";
import Modal from "../../app/Category/[slug]/components/Modal";
import { getMaterials } from "@/lib/apiCards";
import { LuDownload } from "react-icons/lu";

const Toplisten = () => {
    const [materials, setMaterials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedMaterial, setSelectedMaterial] = useState(null);

    useEffect(() => {
    async function fetchMaterials() {
      try {
        const allMaterials = await getMaterials();
        const top3 = allMaterials.filter(m => [1, 8, 12].includes(m.id));
        setMaterials(top3);
      } catch (error) {
        console.error("Failed to fetch materials:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchMaterials();
  }, []);

  const handleOpenModal = (material) => {
        setSelectedMaterial(material);
    };

    const handleCloseModal = () => {
        setSelectedMaterial(null);
    };

    if(loading) return <p className="text-center">Loading...</p>;
    if (materials.length===0) return <p className="text-center my-40 text-2xl">Intet materiale for "{grade}" blev fundet.</p>;

    return (
        <main className="max-w-4xl mt-20 mx-auto">
            <div className="mb-16 text-center max-w-md mx-auto">
                <h2 className="text-lg md:text-xl font-bold mb-2">Toplisten</h2>
                <p>Se det undervisningsmateriale der hitter hos andre litteraturformidlere lige nu.</p>
            </div>
            <div className="max-w-xl space-y-2 flex-col justify-center mx-auto">
            {materials.map((material) => (
                <Card
                    key={material.id}
                    data={material}
                    onReadMore={() => handleOpenModal(material)}
                    
                />
            ))}
            </div>
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
        </main>
      );
}
 
export default Toplisten;