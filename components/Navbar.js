import { useRouter } from 'next/router';

const Navbar = () => {

  const router = useRouter();

  return (
    <div className='navbar'>

      <div className='homebtn' onClick={() => router.push('/', '', {shallow: true})} >
        <h1 style={{fontWeight: 'bold'}}>UpNext</h1>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;500;700;900&display=swap');
        *{
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          font-size: 20px;
          transition: all 0s;
        }
        h1 {
          color: #edf2f7;
          border-radius: 8px;
          padding: 8px;
        }
        .homebtn{
          display: flex;
          width: 12.5%;
          color: #edf2f7;
          padding: 8px;
        }
        .homebtn :hover{
          cursor: default;
        }
        .navbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            overflow: hidden;
            background-color: #005bea;
            position: fixed;
            top: 0;
            width: 100%;
            height: 50px;
            padding: 8px;
            z-index: 9999999999999999999999999;
            // box-shadow: 0 4px 5px -1px rgba(0,0,0,0.1), 0 2px 3px -1px rgba(0,0,0,0.06);
        }
      `}</style>
    </div>
  );
}

export default Navbar;