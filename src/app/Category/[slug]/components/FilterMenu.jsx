import React from "react";

const Filtermenu = ({ durationFilter, setDurationFilter, typeFilter, setTypeFilter}) => {

    const types = [
        "Dialogisk læseguide",
        "Undervisningsforløb",
        "Diskussionsguide"
    ];

    //tidsestimering
    const handleDurationChange = (e, range) => {
        if (e.target.checked) {
            setDurationFilter([...durationFilter,range]);
        } else {
            setDurationFilter(durationFilter.filter(r => r[0] !== range[0] || r[1] !== range[1]));
        }
    };

    //hantera val av materialtyp
    const handleMaterialType = (e,type) => {
        if (e.target.checked) {
            setTypeFilter([...typeFilter, type]);
        } else {
            setTypeFilter(typeFilter.filter(t => t !==type ));
        }
    };

    return (
        <aside className="sticky top-44 w-full lg:w-1/5 xl:w-1/6 space-y-4 p-4 border rounded shadow-sm bg-white max-h-[300px] overflow-y-auto">
            <div className="flex flex-col sm:flex-row lg:flex-col sm:gap-8 lg:gap-2">
                <div className="flex-1">
            <h3 className="font-bold mb-2">Filtrere efter tidsestimering</h3>
            <label className="block mb-1">
                 <input 
                    type="checkbox" 
                    onChange={(e) => handleDurationChange(e, [10, 30])} 
                    checked={durationFilter.some(r => r[0] === 10 && r[1] === 30)} 
                    /> 10–30 min
            </label>
            <label className="block mb-1">
                <input 
                type="checkbox" 
                onChange={(e) => handleDurationChange(e, [30, 60])} 
                checked={durationFilter.some(r => r[0] === 30 && r[1] === 60)} 
                /> 30–60 min
            </label>
            </div>
            <div className="flex-1 mt-6 sm:mt-0">

            <h3 className="font-bold mt-6 mb-2">Filtrere efter type</h3>
            {types.map(type =>(
                <label key={type} className="block mb-1">
                    <input
                        type="checkbox"
                        onChange={(e) => handleMaterialType(e, type)}
                        checked={typeFilter.includes(type)}
                    /> {type}
                </label>
               
            ))}
            </div>
            </div>
        </aside>
      );
}
 
export default Filtermenu;