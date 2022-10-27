import { Link } from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }}
    >
      <p style={{
        color: '#c9b37e',
        fontSize: '30px',
        margin: '0 20px',
      }}
      >Страница не найдена
      </p>
      <Link style={{
        color: '#c9b37e',
        fontSize: '30px',
        textDecoration: 'none',
        border: '1px solid rgba(223,207,119,.36)',
        borderRadius: '8px',
        padding: '10px'
      }} to='/'
      >На главную
      </Link>
    </div>
  );
}

export default NotFoundPage;
