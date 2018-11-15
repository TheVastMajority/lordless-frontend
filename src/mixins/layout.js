
import { addClass, removeClass } from 'utils/tool'
export default {
  watch: {
    value (val) {
      if (val) this.prohibitScroll()
      else this.freeScroll()
    }
  },
  methods: {
    prohibitScroll () {
      addClass('overflow-hidden', document.getElementById('lordless'))
    },
    freeScroll () {
      removeClass('overflow-hidden', document.getElementById('lordless'))
    }
  }
}