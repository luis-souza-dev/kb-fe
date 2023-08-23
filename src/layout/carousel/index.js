import CategoryCard from "../../components/category-card";

const Carousel = (props) => {
    return (
        <section className="row-start-3 row-span-8 col-span-6">
            <div className="w-full max-h-full flex flex-row flex-wrap gap-x-4 gap-y-2 pl-4 overflow-y-auto no-scroll">
                {props.categories.map((cat) => (
                    <CategoryCard>
                    Oii
                    </CategoryCard>
                ))}
            </div>
        </section>
    )
}

export default Carousel