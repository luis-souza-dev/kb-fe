const SearchInput = (props) => {

    const search = (event) => {
        props.handleInput(event.target.value);
    }
    return (
        <input type="text" className="text-black bg-[#e2f1e7] rounded-xl focus-visible:border-2 focus-visible:border-main-borders transition-all ease-in-out duration-75  border-2 border-transparent outline-none px-3" placeholder="Search" onInput={search}/>
    )
}
export default SearchInput;