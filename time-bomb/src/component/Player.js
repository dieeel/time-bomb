import { Heading, Card, CardBody} from '@chakra-ui/react'
import { Icon, ViewIcon } from '@chakra-ui/icons'
import { BsScissors } from 'react-icons/bs'
import PlayerCardList from './PlayerCardList';

function Player({ player }) {
    return (
        <Card maxW='xs'>
            <CardBody>
                <Heading size='md'>{player.name}<Icon as={BsScissors} /></Heading>
                <PlayerCardList items={player.cards} />
                <ViewIcon marginX={2} />
            </CardBody>
        </Card>
    )
}

export default Player;
