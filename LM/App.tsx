import 'react-native-gesture-handler';
import Routes from './src/routes/StackRoutes';

import {StatusBar} from 'react-native';

const App = () => {
  return (
    
      <StatusBar backgroundColor="#f4511e" />
      <Routes />
  );
};

export default App;