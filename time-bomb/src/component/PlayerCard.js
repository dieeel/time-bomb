import { Badge } from '@chakra-ui/react'

function PlayerCard({ item }){
    let margin_x = 1;
    if(item === 'スカ'){
        return <Badge marginX={margin_x} borderRadius='full' px='2' colorScheme='gray' variant='outline'>スカ</Badge>
    } else if(item === 'ボム'){
        return <Badge marginX={margin_x} borderRadius='full' px='2' colorScheme='red' variant='subtle'>ボム</Badge>
    } else if(item === '解除'){
        return <Badge marginX={margin_x} borderRadius='full' px='2' colorScheme='blue' variant='subtle'>解除</Badge>
    } else {
        return <Badge marginX={margin_x} borderRadius='full' px='2' colorScheme='gray' variant='solid'>？</Badge>
    }
}

export default PlayerCard;
