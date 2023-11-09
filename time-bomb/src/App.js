import { ChakraProvider } from '@chakra-ui/react'
import UserTable from './UserTable';
import MyCard from './Card';

const PLAYER = {
  name: 'のび太'
}

export default function App() {
  return (
    <ChakraProvider>
      <UserTable />
      <MyCard player={PLAYER}/>
    </ChakraProvider>
  )
}
