import ListItem from "../../components/list-item";

const ArticlesList = (props = { articles: [] }) => (
    <section className="row-start-3 row-span-8 col-span-6 pr-4 py-2">
        <div className="w-full h-full border border-main-borders rounded-md overflow-y-auto no-scroll shadow-sm shadow-main-shadows">
            {props.articles.map((article, i) => (
                <ListItem isFirst={i === 0} key={i}></ListItem>
            ))}
        </div>
    </section>
)

export default ArticlesList;