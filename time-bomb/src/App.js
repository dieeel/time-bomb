import { ChakraProvider } from '@chakra-ui/react'
import Player from './component/Player';

const PLAYER = {
  name: 'のび太',
  cards: ['スカ', '解除', 'ボム', '不明']
}

export default function App() {
  return (
    <ChakraProvider>
      <Player player={PLAYER}/>
    </ChakraProvider>
  )
}
