const Main = (props) => (
    <main className="h-screen w-screen pb-4 grid grid-rows-10 grid-cols-12 gap-x-2 overflow-hidden">
        { props.children }
    </main>
);

export default Main;