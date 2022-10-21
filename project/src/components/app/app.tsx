import MainPage from '../../pages/main-page/main-page';
import { IPromo } from '../../index';

function App({promoFilm}:{promoFilm: IPromo}): JSX.Element {
  return <MainPage promoFilm={promoFilm} />;
}

export default App;
