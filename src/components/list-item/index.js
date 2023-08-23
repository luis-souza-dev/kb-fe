const ListItem = (props = { isFirst: false }) => {
    const borderClasses = 'border-t border-main-borders'
    return (
        <div className={`w-full h-16 ${props.isFirst ? "" : borderClasses}`}>
            Title
            Categoriessssss
            Keywords
        </div>
    )
}
export default ListItem;