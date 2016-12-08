import { createRouter } from '@exponent/ex-navigation'

// Routes
import Home from './components/Home'
import ScaleDemo from './demos/Scale'
import DraggableDemo from './demos/Draggable'
import ColorDemo from './demos/Colors'
import SequenceDemo from './demos/Sequence'
import StaggerDemo from './demos/Stagger'
import ParallelDemo from './demos/Parallel'
import FlipCardDemo from './demos/FlipCard'
import MultiStateCardDemo from './demos/MultiStateCard'
import DownloadDemo from './demos/Download'
import LikeDemo from './demos/Like'

const Router = createRouter(() => ({
  Home: () => Home,
  Scale: () => ScaleDemo,
  Draggable: () => DraggableDemo,
  Colors: () => ColorDemo,
  Sequence: () => SequenceDemo,
  Parallel: () => ParallelDemo,
  Stagger: () => StaggerDemo,
  FlipCard: () => FlipCardDemo,
  'MultiState Card': () => MultiStateCardDemo,
  Download: () => DownloadDemo,
  Like: () => LikeDemo,
}))

export default Router
