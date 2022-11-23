import { Flex, Heading, Text } from '@chakra-ui/react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error: any = useRouteError();

  return (
    <Flex flexDirection="column" h="100vh" w="full" justify="center" align="center">
      <Heading>Ooops!!!</Heading>
      <Text>You've wandered off the path. Please go back to the home page.</Text>
      <i>{error.statusText || error.message}</i>
    </Flex>
  );
};

export default ErrorPage;
