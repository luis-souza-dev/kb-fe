const CategoryPill = (props) => {
    return (
        <div className='rounded-full min-w-[60px] max-w-[130px] border border-secondary-borders px-2 text-xs flex items-center justify-center text-ellipsis'>
            {props.children}
        </div>
    )
}
export default CategoryPill;