import { Heading, Card, CardBody } from '@chakra-ui/react'
import { Icon, ViewIcon } from '@chakra-ui/icons'
import { BsScissors } from 'react-icons/bs'
import PlayerCardList from './PlayerCardList';

function Player({ player }) {
    let scissor;
    if(player.hasScissor) {
        scissor = <Icon as={BsScissors} marginLeft={2} />
    }
    return (
        <Card maxW='xs' margin={4}>
            <CardBody>
                <Heading size='md' color={ player.role === 'bomber' ? 'red' : 'black'}>
                    {player.name}
                    {scissor}
                </Heading>
                <PlayerCardList items={player.cards} />
                <ViewIcon marginX={2} />
            </CardBody>
        </Card>
    )
}

function PlayerList({ players }) {
    const rows = [];

    players.forEach((player) => {
        rows.push(
            <Player player={player} />
        )
    });
    return (
        <>{rows}</>
    )
}

export default PlayerList;
