const CategoryCard = (props) => {
    return (
      <div className="border-main-borders border rounded-md w-36 h-36 shadow-md shadow-main-shadows cursor-pointer">
        { props.name }
        { props.icon }
      </div>
    );
  }
  
export default CategoryCard;
  