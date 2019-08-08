<template>
  <div id="app">
    <header>
      <nav class="navbar">
        <SharedMenu :menu-items="menuItems" />
        <ThreeDotsMenu />
      </nav>
    </header>
    <main>
      <div class="container">
        <div class="paragraph">
          <h1>FILM CREW DATABASE</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever. <span class="link">see more</span></p>
          <p>Create your <a class="link" href="#">Film Crew Account</a> and have a presence in film crew database ,where all the producers look for staff</p>
        </div>
        <div class="images paragraph">
          <img src="./assets/apple-store.png">
          <img src="./assets/play-store.png">
        </div>
        <div class="paragraph">
          <h2>FILM ADMINISTRATION</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever. <span class="link">see more</span></p>
          <p>Create your <a class="link" href="#">Producer Account</a> and manage your production efficiently</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import SharedMenu from './components/SharedMenu.vue';
import ThreeDotsMenu from './components/ThreeDotsMenu'

export default {
  name: 'app',
  components: {
    SharedMenu,
    ThreeDotsMenu,
  },
  data() {
    return {
      menuItems: [{
        title: 'Xplore',
        link: 'https://explore-it.no/',
        outgoing: true,
        subItems: [],
      }, {
        title: 'Film',
        link: 'film-it.no',
        outgoing: true,
        subItems: [{
          title: 'Demo',
          link: 'https://genesisfilm.no/demo',
          outgoing: true,
        },
        {
          title: 'Dominicans',
          link: 'http://genesisfilm.no/dominicans/',
          outgoing: true,
        },
        {
          title: 'Room',
          link: 'http://genesisfilm.no/etromutenutsikt',
          outgoing: true,
        },
        {
          title: 'Gratulerer',
          link: 'http://genesisfilm.no/gratulerer/',
          outgoing: true,
        },
        {
          title: 'Landbruk',
          link: 'http://genesisfilm.no/landbruk/',
          outgoing: true,
        },
        {
          title: 'Magic Touch',
          link: 'http://genesisfilm.no/magictouch/',
          outgoing: true,
        },
        {
          title: 'Norway Chess',
          link: 'http://genesisfilm.no/norwaychess/',
          outgoing: true,
        },
        {
          title: 'Odd Hansen',
          link: 'http://genesisfilm.no/oddhansen/',
          outgoing: true,
        },
        {
          title: 'pwc',
          link: 'http://genesisfilm.no/pwc/',
          outgoing: true,
        },
        {
          title: 'Referanser',
          link: 'http://genesisfilm.no/referanser/',
          outgoing: true,
        },
        {
          title: 'SEVU',
          link: 'http://genesisfilm.no/sevu/',
          outgoing: true,
        },
        {
          title: 'B:&B',
          link: 'http://genesisfilm.no/skjonnhetenoguhyret/',
          outgoing: true,
        },
        {
          title: 'Sort Melk',
          link: 'http://genesisfilm.no/sortmelk/',
          outgoing: true,
        },
        {
          title: 'Space Walk',
          link: 'http://genesisfilm.no/spacewalk/',
          outgoing: true,
        },
        {
          title: 'Syng Med Oss',
          link: 'http://genesisfilm.no/syngmedoss/',
          outgoing: true,
        },
        {
          title: 'TBR',
          link: 'http://genesisfilm.no/tbr/',
          outgoing: true,
        },
        {
          title: 'Tuffy',
          link: 'http://genesisfilm.no/tuffy/',
          outgoing: true,
        },
        {
          title: 'Twin Sisters',
          link: 'http://genesisfilm.no/twinsisters/',
          outgoing: true,
        },
        {
          title: 'Vennskapet',
          link: 'http://genesisfilm.no/vennskapet/',
          outgoing: true,
        },
        ],
      }, {
        title: 'Stream',
        link: 'http://stream-it.no',
        subItems: [{
          title: 'Biotour',
          link: 'https://biotour.stream-it.no/',
          outgoing: true,
        }, {
          title: 'Myrseminaret',
          link: 'http://myr.stream-it.no/',
          outgoing: true,
        }],
      }, {
        title: 'Develop',
        link: 'http://develop-it.no',
        subItems: [{
          title: 'Film Admin',
          link: 'https://docs.google.com/document/d/1sjECTao9QvUZnvpER7_6OOVZ8yqooushNZjhAMMNmqk/edit?usp=sharing',
          outgoing: true,
        },
        {
          title: 'Xplore App',
          link: 'https://docs.google.com/document/d/1H1q1X44kGN1pPZ6ades1xCP1IOCxatVu09GP4RoIryU/edit?usp=sharing',
          outgoing: true,
        },
        {
          title: 'Grow App',
          link: 'https://docs.google.com/document/d/1jjpIF9yWqb8Xx49jgd48BFG66PlURvYMHq2ZC0IU6dI/edit?usp=sharing',
          outgoing: true,
        },
        {
          title: 'Phenology App',
          link: 'https://docs.google.com/document/d/1cDii1oh21Bv3ySW7bLsd515zns5dZoirAhg6N9bAN34/edit?usp=sharing',
          outgoing: true,
        },
        {
          title: 'Swarm App',
          link: 'https://docs.google.com/document/d/1oMFBB0gERb2pD3SSPQD25fUufJyowCfs6l9o5iv10T4/edit?usp=sharing',
          outgoing: true,
        },
        ],
      }, {
        title: 'Animate',
        link: 'http://animate-it.no',
        outgoing: true,
        subItems: [{
          title: 'Livet i Jorda',
          link: 'https://vimeo.com/350279534',
          outgoing: true,
        }],
      }, {
        title: 'Archive',
        link: 'http://archive-it.no',
        outgoing: true,
        subItems: [{
          title: 'Ski',
          link: 'http://ski.archive-it.no/',
          outgoing: true,
        }],
      }, {
        title: 'Subtitle',
        link: 'http://subtitle.film-it.no/',
        outgoing: true,
        subItems: [],
      }],
    };
  },
};
</script>

<style>
  #app {
    font-family: 'Campton';
    font-size: 20px;
  }

  .navbar {
    justify-content: space-between;
    display: flex;
    max-width: 1000px;
    margin: 0 auto;
    padding-bottom: 15px;
    padding-top: 10px;
  }

  main {
    min-height: calc(100vh - 55px);
    background: white;
    background-position: 100% 90%;
    color: #414141;
  }

  .container {
    padding: 40px 0;
    margin: 0 auto;
    width: 100%;
    max-width: 500px;
  }

  .paragraph {
    margin-bottom: 40px;
  }

  .paragraph h1, .paragraph h2 {
    margin-bottom: 40px;
    margin-top: 0;
    color: #1f64a9;
    text-transform: uppercase;
    font-size: 22px;
  }

  .images img {
    display: inline-block;
    height: 50px;
    margin-right: 10px;
  }

  .link {
    font-weight: bold;
    color: #1f64a9;
    text-decoration: none;
  }

  .link:hover {
    text-decoration: underline;
    cursor: pointer;
  }

</style>
