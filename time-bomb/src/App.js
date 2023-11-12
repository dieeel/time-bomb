import { ChakraProvider, Box, } from '@chakra-ui/react'
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
    name: 'スネ夫',
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
  {
    name: '出来杉',
    role: 'police',
    hasScissor: false,
    cards: ['スカ', '不明', '不明', '不明']
  },
  {
    name: 'サザエ',
    role: 'bomber',
    hasScissor: false,
    cards: ['スカ', '不明', '不明', '不明']
  },
  {
    name: 'たらちゃん',
    role: 'police',
    hasScissor: false,
    cards: ['スカ', '不明', '不明', '不明']
  },
  {
    name: 'ドラえもん',
    role: 'bomber',
    hasScissor: false,
    cards: ['スカ', '不明', '不明', '不明']
  },
];

const CardContainer = ({ children }) => (
  <Box
    maxW="xl" // 最大幅を設定
    mx="auto" // 左右の余白を自動で設定して中央に寄せる
    mt="0" // 上の余白を設定
    p="4" // 内側の余白を設定
    bg="gray.100" // カード領域の背景色を設定
    borderRadius="md" // カード領域の角丸を設定
    boxShadow="md" // カード領域に影をつける
  >
    {children}
  </Box>
);

export default function App() {
  return (
    <ChakraProvider>
      <CardContainer>
        <PlayerList players={PLAYERS} />
      </CardContainer>
    </ChakraProvider>
  )
}
