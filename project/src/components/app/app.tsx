import MainPage from '../../pages/main-page/main-page';
import { IPromo } from '../../index';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import MyList from '../../pages/my-list/my-list';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import PlayerPage from '../../pages/player-page/player-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import MoviePageDetails from '../../pages/movie-page-details/movie-page-details';
import PrivateRoute from '../private-route/private-route';
import { AppRoute } from '../../const';

function App({promoFilm}:{promoFilm: IPromo}): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root}>
          <Route index element={<MainPage promoFilm={promoFilm}/>}/>
          <Route path={AppRoute.Login} element={<SignInPage/>}/>
          <Route path={AppRoute.MyList} element={
            <PrivateRoute hasAccess={false}>
              <MyList />
            </PrivateRoute>
          }
          />

          <Route path={AppRoute.PlayerId} element={<PlayerPage/>}/>
          <Route path={AppRoute.FilmsId}>
            <Route index element={<MoviePageDetails/>}/>
            <Route path={AppRoute.Review} element={<AddReviewPage/>}/>
          </Route>
        </Route>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </ BrowserRouter>
  );
}


export default App;
