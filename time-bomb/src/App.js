import { ChakraProvider } from '@chakra-ui/react'
import PlayerList from './component/Player';

const PLAYERS = [
  {
    name: 'のび太',
    role: 'police',
    hasScissor: true,
    cards: ['スカ', '解除', 'ボム', '不明']
  },
  {
    name: 'ジャイアン',
    role: 'police',
    hasScissor: false,
    cards: ['スカ', '不明', '不明', '不明']
  },
  {
    name: 'しずかちゃん',
    role: 'bomber',
    hasScissor: false,
    cards: ['スカ', '不明', '不明', '不明']
  },
]

export default function App() {
  return (
    <ChakraProvider>
      <PlayerList players={PLAYERS} />
    </ChakraProvider>
  )
}
