<template>
  <div id="app">
    <SharedMenu :menu-items="menuItems" />
  </div>
</template>

<script>
import SharedMenu from './components/SharedMenu.vue';

export default {
  name: 'app',
  components: {
    SharedMenu,
  },
  data() {
    return {
      menuItems: [{
        title: 'Film',
        link: '',
        subItems: [{
          title: 'About',
          link: '',
        }, {
          title: 'Portfolio',
          link: '',
        }, {
          title: 'Team',
          link: '',
        }, {
          title: 'Contact',
          link: '',
        }, {
          title: 'Follow',
          link: '',
        }],
      }, {
        title: 'Stream',
        link: '',
        subItems: [{
          title: 'About',
          link: '',
        }, {
          title: 'Portfolio',
          link: '',
        }, {
          title: 'Team',
          link: '',
        }, {
          title: 'Contact',
          link: '',
        }, {
          title: 'Follow',
          link: '',
        }],
      }, {
        title: 'Develop',
        link: '',
        subItems: [{
          title: 'About',
          link: '',
        }, {
          title: 'Portfolio',
          link: '',
        }, {
          title: 'Team',
          link: '',
        }, {
          title: 'Contact',
          link: '',
        }, {
          title: 'Follow',
          link: '',
        }],
      }, {
        title: 'Animate',
        link: '',
        subItems: [{
          title: 'About',
          link: '',
        }, {
          title: 'Portfolio',
          link: '',
        }, {
          title: 'Team',
          link: '',
        }, {
          title: 'Contact',
          link: '',
        }, {
          title: 'Follow',
          link: '',
        }],
      }, {
        title: 'Archive',
        link: '',
        subItems: [{
          title: 'About',
          link: '',
        }, {
          title: 'Portfolio',
          link: '',
        }, {
          title: 'Team',
          link: '',
        }, {
          title: 'Contact',
          link: '',
        }, {
          title: 'Follow',
          link: '',
        }],
      }, {
        title: 'Subtitle',
        link: '',
        subItems: [{
          title: 'About',
          link: '',
        }, {
          title: 'Portfolio',
          link: '',
        }, {
          title: 'Team',
          link: '',
        }, {
          title: 'Contact',
          link: '',
        }, {
          title: 'Follow',
          link: '',
        }],
      }],
    };
  },
};
</script>

<style>
#app {
  max-width: 1200px;
  margin: 10px auto;
  padding-left: 15px;
  padding-right: 15px;
  font-family: 'Campton';
  font-size: 16px;
}
</style>
