// components/CategoryCard.jsx

const CategoryCard = ({ category, onClick }) => {
  const { name, image, bgColor, id } = category;

  return (
    <div
      className={`flex flex-col items-center gap-2`}
      onClick={() => onClick(category)}
    >
      <div className="relative w-30 h-40  rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:border-2 hover:border-teal-600 cursor-pointer">
        <img
        className='w-full h-full object-contain'
          src={image}
          alt={name}
          
          layout="fill"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default CategoryCard;