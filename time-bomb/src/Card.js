import { Text, Heading, Badge, Button, ButtonGroup, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

function MyCard({ player }) {
    return (
        <Card maxW='sm'>
            <CardBody>
                <Heading size='md'>{player.name}</Heading>
                <Badge borderRadius='full' px='2' colorScheme='black'>スカ</Badge>
                <Badge borderRadius='full' px='2' colorScheme='blue'>解除</Badge>
                <Badge borderRadius='full' px='2' colorScheme='red'>ボム</Badge>
                <Badge borderRadius='full' px='2' colorScheme='gray' variant='outline'>不明</Badge>
                <Button variant='solid' colorScheme='blue'> ニッパー </Button>
            </CardBody>
        </Card>
    )
}

export default MyCard;
