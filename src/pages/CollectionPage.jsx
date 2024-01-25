import Search from "../components/Search";
import TrendingAll from "../components/TrendingAll";
import SectionContainer from "../ui/SectionContainer";

const CollectionPage = () => {
    return (
        <SectionContainer>
            <Search />
            <TrendingAll />
            {/* 
        <TrendngMovies/>
        <TrendingSeries/> */}
        </SectionContainer>
    );
};

export default CollectionPage;
