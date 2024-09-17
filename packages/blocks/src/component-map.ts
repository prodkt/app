import TemplateTresLayout from './templates/tres/layouts/TresLayout.astro'
import AmpersandHero from './templates/unique/components/ampersand-hero.astro'
import LevelnHero from './templates/unique/components/leveln-hero.astro'
import WarpLandingPage from './templates/unique/components/warp-landing-page.astro'
import AmpersandLayout from './templates/unique/layouts/ampersand-hero-layout.astro'
import LevelnLayout from './templates/unique/layouts/leveln-hero-layout.astro'
import TemplateUnoAboutOne from './templates/uno/components/About_1.astro'
import TemplateUnoComponentTest from './templates/uno/components/ComponentTest.astro'
import TemplateTres404One from './templates/uno/components/Page404_1.astro'
import TemplateUnoLayout from './templates/uno/layouts/UnoLayout.astro'

// Define the type for your component map
type ComponentMap = {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  [key: string]: any
}

// Create the map of components
const componentMap: ComponentMap = {
  TemplateUnoLayout,
  TemplateTresLayout,
  TemplateUnoAboutOne,
  TemplateTres404One,
  WarpLandingPage,
  TemplateUnoComponentTest,
  LevelnLayout,
  AmpersandLayout,
  AmpersandHero,
  LevelnHero,
}

export { componentMap }
