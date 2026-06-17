import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import HomeStudio from './components/HomeStudio.vue'
import PeerStudyMatrix from './components/PeerStudyMatrix.vue'
import SpineDemoLab from './components/SpineDemoLab.vue'
import './styles.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('HomeStudio', HomeStudio)
    app.component('SpineDemoLab', SpineDemoLab)
    app.component('PeerStudyMatrix', PeerStudyMatrix)
  },
} satisfies Theme
