import { LuDownload } from "react-icons/lu";

const Card = ({ data, onReadMore }) => {
    const themesArray = Array.isArray(data.themes) ? data.themes : [];
    const gradeArray = Array.isArray(data.grade) ? data.grade : [];

    const capitalize = (str) =>str.charAt(0).toUpperCase() + str.slice(1);

    const capitalizedGrades = gradeArray.map(capitalize);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border p-4 rounded shadow-sm bg-white min-h-[300px] cursor-pointer" onClick={onReadMore}>
            <img 
            src={data.img} 
            alt={data.title} 
            className="w-full h-auto max-h-[200px] md:max-h-[300px] aspect-[4/3] md:aspect-auto object-cover rounded"
            />
            <div className="flex flex-col justify-center items-center text-center space-y-2">
                <h3 className="font-semibold text-[0.95rem]">{capitalizedGrades.join(" og ")}</h3>
                <h2 className="font-semibold text-lg">{data.type}</h2>
                <h2 className="italic text-[0.95rem]">{data.title} af {data.author}</h2>
                <button 
                onClick={onReadMore}
                className="underline text-green transition duration-200 ease-in-out font-bold hover:text-green-800 text-[0.95rem]">Læs mere</button>
            </div>
             <div className="col-span-1 md:col-span-3 border-t border-green my-2" />
            <div>
                <p>
                    <span className="font-semibold">Temaer: </span>
                    <span>{themesArray.join(", ")}</span>
                </p>
            </div>
            <div>
                <p>
                    <span className="font-semibold">Forberedelsestid: </span> 
                    <span>{data.forberedelsestid} minutter</span>
                    </p>
            </div>
            <div>
                <a
                    href="/dummyfile.pdf"
                    download
                    onClick={(e) => e.stopPropagation()}
                      className=" text-green font-semibold text-lg mt-4 hover:text-green-700 transition"
                    >
                    <LuDownload className="h-6 w-6" />
                </a>
            </div>
        </div>
      );
}
 
export default Card;