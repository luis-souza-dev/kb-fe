import { useState } from "react";
import SearchInput from "../../components/search-input";
import { PiArticleMediumBold } from 'react-icons/pi';
import ArticleModal from "../../components/article-modal";


const Header = () => {

    const [modalState, setModalState] = useState(false);

    const handleSearch = (searchedTerm) => {
        console.log('searched term', searchedTerm);
    }

    const openNewArticleModal = () => {
        setModalState(true);
    }

    const dismissModal = () => {
        setModalState(false);
    }

    return (
        <>
            <header className="col-span-full row-span-1 border-b border-t-0 border-main-borders flex items-center justify-center gap-x-2">
                <SearchInput handleInput={handleSearch}> </SearchInput>
                <button className='border border-main-borders rounded p-2' onClick={openNewArticleModal}>
                    <PiArticleMediumBold>
                    </PiArticleMediumBold>
                </button>
            </header>
            <ArticleModal shouldDisplay={modalState} onDismiss={dismissModal}></ArticleModal>
        </>
    )
}

export default Header;