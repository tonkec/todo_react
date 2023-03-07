import { Card, CardBody, Divider, Stack, Heading } from '@chakra-ui/react';

const CardComponent = ({ todo }) => {
  return (
    <Card maxW="sm" variant={'filled'}>
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="md" textAlign={'center'}>
            {todo.title}
          </Heading>
        </Stack>
      </CardBody>
      <Divider />
    </Card>
  );
};

export default CardComponent;
