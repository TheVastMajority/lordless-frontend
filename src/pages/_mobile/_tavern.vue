<template>
  <div class="mobile-tavern-detail">
    <mobile-nav-bar
      ref="mobile-nav-bar"
      v-bind="scrollOpt"
      :text="navbarText"
      @history="tCloseHandle"/>
    <ldb-detail
      ref="ldbDetail"
      theme="light"
      :detailInfo.sync="tavernInfo"
      @tClose="tCloseHandle"/>
  </div>
</template>

<script>
import LdbDetail from '@/components/content/ldb/detail'

// import { mutationTypes } from '@/store/types'
// import { mapMutations } from 'vuex'
export default {
  data: () => {
    return {
      rendered: false,
      tavernInfo: null,
      scrollOpt: {
        show: true,
        history: true,
        scroll: true,
        userAvatar: true,
        transparent: true,
        scrollMark: 100
      }
    }
  },
  computed: {
    navbarText () {
      const tavernInfo = this.tavernInfo
      if (!tavernInfo) return 'Tavern'
      return tavernInfo.name.zh
    }
  },
  components: {
    LdbDetail
  },
  methods: {
    // ...mapMutations('layout', [
    //   mutationTypes.LAYOUT_SET_POP_DIRECTION
    // ]),
    tCloseHandle () {
      // this[mutationTypes.LAYOUT_SET_POP_DIRECTION]('_reverse')
      sessionStorage.setItem('lordless_direction', '_reverse')

      const refer = this.$route.query.refer || '/taverns'
      this.$nextTick(() => this.$router.push(`${decodeURIComponent(refer)}`))
      // if (history.length) {
      //   history.go(-1)
      // } else {
      //   this.$router.push('/market')
      // }
    },
    initTavern () {
      const { tavernId } = this.$route.params
      this.$nextTick(() => this.$refs.ldbDetail.init(tavernId))
    }
  },
  activated () {
    if (!this.rendered) {
      this.rendered = true
      return
    }
    this.initTavern()
  },
  mounted () {
    this.initTavern()
  }
}
</script>

