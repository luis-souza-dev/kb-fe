const CategoryCard = (props) => {
    return (
      <div className="border-main-borders border rounded-md w-36 h-36 cursor-pointer">
        { props.name }
        { props.icon }
      </div>
    );
  }
  
export default CategoryCard;
  