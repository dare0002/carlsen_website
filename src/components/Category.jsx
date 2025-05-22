import Image from "next/image";

//importere billede, brug props

const Category = ({ text, bgColor }) => {
    return (
        <div className={`
        ${bgColor}
        text-offwhite
        flex items-center justify-center
        h-24
        md:h-64
        w-full
        rounded-xl
        shadow-md
        transition-all duration-300
        transform hover:scale-105
        cursor-pointer
        `}
        >
            <span className="text-lg md:text-xl font-semibold">{text}</span>
        </div>
      );
};
 
export default Category;