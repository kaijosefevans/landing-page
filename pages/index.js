import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import { useRouter } from 'next/router';
import { useState, useEffect, useContext } from 'react';

import Navbar from '../components/Navbar.js';

export default function Home() {
  const router = useRouter();

  const [scrollTop, setScrollTop] = useState(0);
  const [scrollOpacity, setOpacity] = useState(1);
  const [logoOpacity, setLogoOpacity] = useState(1);

  const [s1, triggers1] = useState(false);
  const [s2, triggers2] = useState(false);
  const [s3, triggers3] = useState(false);
  const [s4, triggers4] = useState(false);
  const [s5, triggers5] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setOpacity(1 - scrollTop / 300);
      setLogoOpacity(1 - scrollTop / 400);
    };
    window.addEventListener('scroll', onScroll);

    if (scrollTop > 300) triggers1(true);

    if (scrollTop > 800) triggers2(true);

    if (scrollTop > 1400) triggers3(true);

    if (scrollTop > 1800) triggers4(true);

    if (scrollTop > 2300) triggers5(true);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  return (
    <div id='home'>
      {<Navbar />}

      <Head>
        <title>UpNext</title>
        <link rel='shortcut icon' href='/android-chrome-192x192.png' />
      </Head>

      <section id='header'>
        <div className='inner'>
          <div style={{ opacity: logoOpacity }}>
            <div id='logo'>
              <Image src={'/Jes56-RA.png'} width={200} height={100} />
            </div>

            <div id='btncontainer'></div>
          </div>
        </div>
      </section>

      <div className={styles.container}>
        <Head>
          <title>UpNext</title>
          <meta name='UpNext Website' content='UpNext Landing Page' />
          <link rel='icon' href='/Jes56-RA.png' />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to{' '}
            <a href='https://github.com/oslabs-beta/UpNext'>UpNext!</a>
          </h1>

          <p className={styles.description}>
            Create your modern full-stack SAAS application through a Visual
            Studio Code Extension
          </p>

          <div className={styles.grid}>
            <a
              href='https://github.com/oslabs-beta/UpNext'
              className={styles.card}
            >
              <h2>Github Repository</h2>
              <p>View Our Open Source Code Repository on Github</p>
            </a>

            <a href='https://marketplace.visualstudio.com/items?itemName=UpNext.upnext' className={styles.card}>
              <h2>VSCode Marketplace</h2>
              <p>Download Our Extension through the VSCode Marketplace</p>
            </a>
          </div>
          <section id='one' className='box'>
            <div className={`content ${s1 ? 'fade' : ''}`}>
              <div className='text'>
                <h2>
                  The <span style={{ color: '#041286' }}>UpNext</span>{' '}
                  extension doing what it does best.
                </h2>
                <br></br>
                <h2>Less setup, faster to work</h2>
                <h3>
                  A comprehensive, open-source Visual Studio Code extension
                  offering an all in one command for creating Next.js
                  application with SaaS functionality.
                </h3>
                <h3>
                  UpNext delivers all of the features needed to jumpstart your application including end to end CRUD functionality, authentication, payments/billing and more.
                </h3>
              </div>

              <div className='images'>
                <Image src={'/W43gnNAsGE.gif'} width={950} height={600} />
              </div>
            </div>
          </section>
          <section id='two' className='diagonal-box'>
          <div className={`content ${s2 ? 'fade' : ''}`} >

            <div className='images' style={{marginLeft: '5%'}} >
              <Image src={'/UpNextTechStack.png'} width={1448} height={795} />
            </div>

            <div className='text'>
              <h2>Our boilerplate uses the industry tech stack, making your application scalable and secure.</h2>
              <h3>In order to remedy the delay of creating a SaaS application, we've included for developers a full tech stack so a engineer can kickstart the project with little to no setup! The frameworks/libraries that are included: </h3>
              <h3>Next, React, GraphQL, Apollo, Prisma, OAuth, Stripe, and TypeScript.</h3>
            </div>

          </div>
        </section>

        <section id='three' className='box'>
          <div className={`content ${s3 ? 'fade' : ''}`} >

            <div className='text'>
              <h2>Stripe Integration</h2>
              <h3>The UpNext team believes that the Stripe library is the perfect solution for online transactions.</h3>
              <h3>The lifeblood of any SaaS application is the payment process. The UpNext extension has already preconfigured stripe integration into your application so that you can immediately get started working on your business logic. </h3>
            </div>

            <div className='images' style={{marginTop: '7%', border: 'none'}}>
              <Image src={'/tyW3dkdOPD.gif'} width={1770} height={926} />
            </div>

          </div>
        </section>

        <section id='four' className='box'>
          <div className={`content ${s4 ? 'fade' : ''}`} >

            <div className='images' style={{marginLeft: '5%'}} >
              <Image src={'/1GTUDWsJxu.gif'} width={1770} height={1000} />
            </div>

            <div className='text'>
              <h2>OAuth Authentication</h2>
              <h3>Using the library provided by NextAuth, we have provided the ability to login through different providers such as Gmail, Facebook, Twitter, and many others.</h3>
              <h3>
                Setting up NextAuth is easy as users only need to create new providers within the provided auth API endpoint, as well as providing the API keys in the .env file for OAuth to run the verification. To learn more about this process, please refer to the NextAuth docs here:
                <br></br>
                <br></br>
                <a href="https://next-auth.js.org/configuration/providers" id="next-auth-link">https://next-auth.js.org/configuration/providers</a>
              </h3>
            </div>

          </div>
        </section>
        <section id='us' className='end-box'>

          <h4>Connect with us</h4>

          <div id='aboutus'>

            <div className='profile'>
              <div className='githubpic'><Image src={'https://github.com/andrewkimq.png'} width={160} height={160} /></div>
              Andrew Kim
              <div className='socials'>
                <div className='sclbtn'><a href=' https://www.linkedin.com/in/andrewkimq/' target='_blank'><Image src={'/linkedin.svg'} width={24} height={24} /></a></div>
                <div className='sclbtn'><a href='https://github.com/andrewkimq' target='_blank'> <Image src={'/github.svg'} width={24} height={24} /></a></div>
              </div>
            </div>

            <div className='profile'>
              <div className='githubpic'><Image src={'https://github.com/peterhyesung.png'} width={160} height={160} /></div>
              Hyesung Peter Lee
              <div className='socials'>
                <div className='sclbtn'><a href='https://www.linkedin.com/in/peterhyesung/' target='_blank'><Image src={'/linkedin.svg'} width={24} height={24} /></a></div>
                <div className='sclbtn'><a href='https://github.com/peterhyesung' target='_blank'> <Image src={'/github.svg'} width={24} height={24} /></a></div>
              </div>
            </div>

            <div className='profile'>
              <div className='githubpic'><Image src={'https://github.com/jason-d-lee.png'} width={160} height={160} /></div>
              Jason Lee
              <div className='socials'>
                <div className='sclbtn'><a href='https://www.linkedin.com/in/jason-dongyul-lee' target='_blank'><Image src={'/linkedin.svg'} width={24} height={24} /></a></div>
                <div className='sclbtn'><a href='https://github.com/jason-d-lee' target='_blank'> <Image src={'/github.svg'} width={24} height={24} /></a></div>
              </div>
            </div>

            <div className='profile'>
              <div className='githubpic'><Image src={'https://github.com/jorgecarlosfernandez.png'} width={160} height={160} /></div>
              Jorge Carlos 'JC' Fernandez
              <div className='socials'>
                <div className='sclbtn'><a href='https://www.linkedin.com/in/jorge-carlos-fernandez/' target='_blank'><Image src={'/linkedin.svg'} width={24} height={24} /></a></div>
                <div className='sclbtn'><a href='https://github.com/jorgecarlosfernandez' target='_blank'><Image src={'/github.svg'} width={24} height={24} /></a></div>
              </div>
            </div>

            <div className='profile'>
              <div className='githubpic'><Image src={'https://github.com/kaijosefevans.png'} width={160} height={160} /></div>
              Kai Evans
              <div className='socials'>
                <div className='sclbtn'><a href='https://www.linkedin.com/in/kaijosefevans/' target='_blank'><Image src={'/linkedin.svg'} width={24} height={24} /></a></div>
                <div className='sclbtn'><a href='https://github.com/kaijosefevans' target='_blank'><Image src={'/github.svg'} width={24} height={24} /></a></div>
              </div>
            </div>
          </div>
        </section>

        </main>

        {/* <footer className={styles.footer}>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{' '}
              <span className={styles.logo}>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
              </span>
            </a>
          </footer> */}
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;500;700&display=swap');
        * {
          font-family: 'Inter', sans-serif;
          transition: all 0.3s ease;
          font-weight: 300;
        }
        #home {
          width: 100%;
          background: linear-gradient(to top, #edf2f7 30%, white);
        }
        #scroll {
          text-align: center;
          position: fixed;
          z-index: 5;
          color: white;
          margin-left: 1%;
          margin-top: 42%;
          user-select: none;
          opacity: 0;
          animation: scrollfadein 1s forwards;
          animation-delay: 3s;
        }
        #scroll.scrollfade {
          animation: scrollfadeout 1s forwards;
        }
        @keyframes scrollfadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scrollfadeout {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
        section {
          width: 100%;
        }
        #header {
          height: 90vh;
          background-size: auto, cover, cover;
          background-color: #5661b3;
          overflow: hidden;
          animation: gradient 6s ease;
          // transform: skewY(2deg);
        }
        #one {
          height: 75vh;
        }
        #two {
          height: 75vh;
        }
        #three {
          height: 75vh;
        }
        #four {
          height: 75vh;
          margin: -10% 0 0 0;
        }
        #five {
          height: 25vh;
        }
        #us {
          height: 75vh;
        }
        #next-auth-link {
          color: #0070f3;
          text-decoration: underline;
        }
        .inner {
          transition: transform 1.5s ease, opacity 2s ease;
          transition-delay: 0.25s;
          opacity: 1;
          position: relative;
          z-index: 0;
          animation: fadein 2s ease;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
          text-align: center;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          #logo {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row;
            h1 {
              width: 100%;

              font-size: 72px;
              font-family: 'Comfortaa', cursive;
              font-weight: 700;
              color: white;
              line-height: 1.5;
              margin: 0;
              span {
                font-size: 72px;
                font-family: 'Comfortaa', cursive;
                font-weight: 700;
                color: #12b3ab;
              }
            }
          }
          p {
            color: white;
            margin: 0;
            position: absolute;
            top: 55%;
            left: 35%;
          }
          #btncontainer {
            margin: 0;
            position: absolute;
            top: 100%;
            left: 44%;
            animation: reveal 1s forwards;
            animation-delay: 1s;
            #line {
              border-left: 1px solid white;
              height: 300px;
              margin-left: 50%;
            }
          }
          #mainbtn {
            transition: 0.2s;
            color: white;
            background-color: transparent;
            font-size: 24px;
            padding: 8px 16px;
            outline: none;
            border: 1px solid white;
            border-radius: 4px;
            &:hover {
              background-color: rgba(255, 255, 255, 0.15);
              cursor: pointer;
            }
          }
          @keyframes reveal {
            from {
              top: 100%;
            }
            to {
              top: 75%;
            }
          }
        }
        @keyframes fadein {
          from {
            opacity: 0;
            transform: scale(1.1);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .box {
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }
        .end-box {
          background-image: linear-gradient(to top, #005bea 0%, #00c6fb 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          background-color: #555;
          color: #fff !important;
          box-shadow: inset 0px 8px 16px -2px rgba(0, 0, 0, 0.15);
          z-index: 5;
          h4 {
            font-size: 32px;
            font-weight: 500;
          }
        }
        .diagonal-box {
          position: relative;
          background-color: transparent;
          transition: 0;
          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #00c6fb;
            transform: skewY(-2deg);
            z-index: 10;
            box-shadow: inset 0px 8px 16px -2px rgba(0, 0, 0, 0.15);
          }
          .content {
            .text {
              h2 {
                color: white;
              }
              h3 {
                color: white;
              }
            }
            .images {
              border: none;
            }
          }
        }
        .content {
          position: relative;
          z-index: 25;
          height: 100%;
          opacity: 0;
          &::after {
            content: '';
            display: table;
            clear: both;
          }
          .text {
            float: left;
            width: 40%;
            margin: 10% 5%;
            h2 {
              color: #2c3747;
              font-size: 36px;
              font-weight: 500;
              margin: 0;
            }
            h3 {
              overflow-wrap: break-word;
              font-size: 18px;
              color: #444444;
            }
            span {
              color: #12b3ab;
              font-weight: bold;
            }
          }
          .images {
            float: left;
            width: 40%;
            margin: 9% 0%;
            padding-left: 5%;
            // border: 4px solid #b2becc;
            // border-radius: 4px;
            // filter: saturate(.5);
            // &:hover{
            //   filter: saturate(1);
            // }
          }
        }
        .content.fade {
          animation: fadeIn 1s ease forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        #aboutus {
          display: flex;
        }
        .githubpic {
          clip-path: circle(80px at center);
          margin: 8px;
        }
        .profile {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 36px;
          font-size: 24px;
          font-weight: 700;
        }
        .socials {
          margin: 8px;
          display: flex;
        }
        .sclbtn {
          transition: all 0.2s;
          margin: 8px;
          &:hover {
            transform: scale(1.1);
          }
        }
        @media screen and (max-width: 700px), (max-height: 600px) {
          * {
            margin-right: 0 !important;
          }
          #header {
            width: 100%;
          }
          home {
            overflowx: hidden !important;
            margin-right: 0 !important;
          }
          #logo {
            transform: scale(0.75) !important;
          }
          #btncontainer {
            left: 33% !important;
          }
          #line {
            opacity: 0 !important;
          }
          .text {
            width: 80% !important;
            text-align: center !important;
            margin: 0% !important;
            margin-top: 10% !important;
            margin-left: 10% !important;
          }
          .text h3 {
            font-size: 12px !important;
          }
          .text h2 {
            font-size: 24px !important;
          }
          .images {
            display: none;
          }
          #two .content .images {
            margin-top: 10% !important;
          }
          #aboutus {
            transform: scale(0.75) !important;
          }
          .githubpic {
            clip-path: circle(32px at center) !important;
          }
          .end-box{
            display: none;
          }

        }
      `}</style>
    </div>
  );
}
