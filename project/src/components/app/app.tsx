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
function App({promoFilm}:{promoFilm: IPromo}): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<MainPage promoFilm={promoFilm}/>}/>
          <Route path='login' element={<SignInPage/>}/>
          <Route path='mylist' element={
            <PrivateRoute hasAccess={false}>
              <MyList />
            </PrivateRoute>
          }
          />

          <Route path='player/:id' element={<PlayerPage/>}/>
          <Route path='films/:id/'>
            <Route index element={<MoviePageDetails/>}/>
            <Route path='review' element={<AddReviewPage/>}/>
          </Route>
        </Route>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </ BrowserRouter>
  );
}


export default App;
