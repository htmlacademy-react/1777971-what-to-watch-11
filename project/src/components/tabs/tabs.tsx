import Overview from '../overview/overview';
import Details from '../details/details';
import Reviews from '../reviews/reviews';
import { IFilm } from '../../mocks/films';

type Props = {
  selectedTab: number;
  selectedFilm:IFilm;
};
function Tabs({selectedTab, selectedFilm}: Props): JSX.Element {

  const renderTab = ()=>{
    switch (selectedTab) {
      case 0:
        return <Overview selectedFilm={selectedFilm} />;
      case 1:
        return <Details selectedFilm={selectedFilm} />;
      case 2:
        return <Reviews reviews={selectedFilm.reviews}/>;
      default:
        return <Overview selectedFilm={selectedFilm}/>;
    }
  };
  return (
    <div>
      {renderTab()}
    </div>
  );
}

export default Tabs;
