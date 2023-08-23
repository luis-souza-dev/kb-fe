const Main = (props) => (
    <main className="h-screen w-screen grid grid-rows-10 grid-cols-12 gap-x-2 overflow-hidden bg-[#232a2f] text-white">
        { props.children }
    </main>
);

export default Main;