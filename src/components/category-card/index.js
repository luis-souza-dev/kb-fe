const CategoryCard = (props) => {
    return (
      <div className="border-main-borders border rounded-md w-36 h-36 shadow-sm shadow-main-shadows">
        { props.name }
        { props.icon }
      </div>
    );
  }
  
export default CategoryCard;
  