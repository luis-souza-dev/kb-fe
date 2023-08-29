import CategoryPill from "../category-pill";

const ListItem = (props = { isFirst: false }) => {
    const borderClasses = 'border-t border-main-borders'
    return (
        <div className={`w-full h-20 flex flex-wrap cursor-pointer p-2 ${props.isFirst ? "" : borderClasses}`}>
            <div className="w-full text-xl flex gap-x-4 items-start">
                <span> Title </span>
                <div className="flex gap-x-1 h-[60%] my-1">
                    <CategoryPill>
                        GO
                    </CategoryPill>
                    <CategoryPill>
                        BackEnd
                    </CategoryPill>
                    <CategoryPill>
                        Automation
                    </CategoryPill>
                </div>
            </div>
            <span className="w-full text-sm text-[#808992]">
                Keywords
            </span>
        </div>
    )
}
export default ListItem;