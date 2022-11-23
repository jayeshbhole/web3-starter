import { Box, Grid } from '@chakra-ui/react';
import '@rainbow-me/rainbowkit/styles.css';
import FeatureList from '../../components/FeatureList';

const Home = () => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <FeatureList />
      </Grid>
    </Box>
  );
};
export default Home;
