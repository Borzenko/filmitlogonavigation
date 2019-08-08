<template>
  <div class="nav">
    <ul class="nav__list">
        <li v-for="item in menuItems" :key="item.title" class="nav__list-item">
          <router-link v-if="!item.outgoing" :to="item.link" class="nav__list-link">
            <template v-for="letter in item.title">
              <span :key="letter" v-if="letter === 'i'" class="nav__list-red-dot">i</span>
              <template v-else>{{ letter }}</template>
            </template>
          </router-link>
          <a v-else :href="item.link" target="_blank" class="nav__list-link">
            <template v-for="letter in item.title">
              <span :key="letter" v-if="letter === 'i'" class="nav__list-red-dot">i</span>
              <template v-else>{{ letter }}</template>
            </template>
          </a>
          <ul class="nav__sub-list" v-if="item.subItems && item.subItems.length">
            <li class="nav__sub-list-item" v-for="subItem in item.subItems" :key="subItem.title">
                <router-link v-if="!subItem.outgoing" :to="subItem.link" class="nav__sub-list-link">
                  {{ subItem.title }}
                </router-link>
                <a v-else :href="subItem.link" target="_blank" class="nav__sub-list-link">
                  {{ subItem.title }}
                </a>
              </li>
          </ul>
        </li>
      </ul>
    <div class="nav__logo">it</div>
  </div>
</template>

<script>
export default {
  props: {
    menuItems: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    $('.nav').mouseenter(() => {
      $('.nav__list').stop().animate({
        width: '750px',
      }, 1000, () => {
        $('.nav').addClass('nav--active');
      });
    });

    $('.nav').mouseleave(() => {
      $('.nav__list').stop().animate({
        width: '80px',
      }, 1000, () => {
        $('.nav').removeClass('nav--active');
      });
    });
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

*:after,
*:before {
    box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

.nav__logo {
    display: inline-block;
    vertical-align: top;
    height: 30px;
    width: 30px;
    text-align: center;
    line-height: 30px;
    font-weight: bold;
    border: 1px solid #ec3235;
    border-left: 0;
    text-transform: uppercase;
    font-size: 26px;
    letter-spacing: 0px;
    color: #ec3235;
    margin-left: -3px;
}

.nav__logo img {
  display: block;
  height: 100%;
  width: auto;
}

.nav__list {
  display: inline-flex;
  flex-wrap:wrap;
  white-space: nowrap;
  padding: 0;
  margin: 0;
  list-style: none;
  width: 80px;
  height: 30px;
  letter-spacing: 0px;
  overflow:hidden;
}

/* .nav:hover .nav__list:hover {
  width: 630px;
} */

.nav__list-item {
  padding-left: 10px;
  padding-right: 10px;
  border-left: 1px solid #ec3235;
  position:relative;
}

.nav__list-item:first-child {
  padding-left: 0;
  border-left:0;
}

.nav__list-item:last-child {
  padding-right: 0;
}

.nav__list-link {
  display: block;
  color: #606062;
  font-size: 26px;
  line-height: 30px;
  text-decoration: none;
  transition:0.3s all ease;
}

.nav__list-link:hover {
  color: #ec3235;
}

.nav__list-red-dot {
  position: relative;
  display: inline-block;
  vertical-align: top;
}

.nav__list-red-dot:before {
  position: absolute;
  top: 7px;
  left: 2.5px;
  display: block;
  content: "";
  background: #ec3235;
  width: 2px;
  height: 2px;
  border-radius: 100%;
  z-index: 10;
}

.nav__sub-list {
  background: white;
  min-width: calc(100% + 2px);
  position: absolute;
  top: 100%;
  left: -1px;
  list-style: none;
  padding: 2px 10px;
  border: 1px solid #ec3235;
  border-top: none;
  border-right: none;
  margin: 0;
  opacity:0;
  visibility: hidden;
  transition:0.3s all ease;
}

.nav__list-item:first-child .nav__sub-list {
  left:0;
}

.nav__sub-list-item {
  margin-bottom: 5px;
}

.nav__sub-list-link {
  font-size:16px;
  color: #606062;
  text-decoration: none;
  transition: 0.3s all ease;
}

.nav__sub-list-link:hover {
  color: #ec3235;
}

.nav--active .nav__list {
  overflow: visible;
}

.nav--active .nav__list-item:hover .nav__sub-list {
  opacity:1;
  visibility: visible;
}
</style>
