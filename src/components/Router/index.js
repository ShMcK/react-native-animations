import { createRouter } from '@exponent/ex-navigation'

// Routes
import Home from '../Home'
import TransitionDemo from '../../demos/Transition'
import ScaleDemo from '../../demos/Scale'
import DraggableDemo from '../../demos/Draggable'
import ColorDemo from '../../demos/Colors'
import RotateDemo from '../../demos/Rotate'
import SequenceDemo from '../../demos/Sequence'
import StaggerDemo from '../../demos/Stagger'
import ParallelDemo from '../../demos/Parallel'
import FlipCardDemo from '../../demos/FlipCard'
import CardUpDemo from '../../demos/CardUp'
import GestureDemo from '../../demos/Gesture'
import MultiStateCardDemo from '../../demos/MultipleStateCard'

const Router = createRouter(() => ({
  Home: () => Home,
  Transition: () => TransitionDemo,
  Scale: () => ScaleDemo,
  Draggable: () => DraggableDemo,
  Colors: () => ColorDemo,
  Rotate: () => RotateDemo,
  Sequence: () => SequenceDemo,
  Parallel: () => ParallelDemo,
  Stagger: () => StaggerDemo,
  FlipCard: () => FlipCardDemo,
  CardMove: () => CardUpDemo,
  Gesture: () => GestureDemo,
  'MultiState Card': () => MultiStateCardDemo,
}))

export default Router
