import MainPage from '../../pages/main-page/MainPage';

type Props = {
    title: string; //The Grand Budapest Hotel
    genre: string; //Drama
    releaseDate: number; //2014
}
function App({title, genre, releaseDate}: Props): JSX.Element {
  return <MainPage title={title} genre={genre} releaseDate={releaseDate} />;
}

export default App;
