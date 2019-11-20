import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Homescreen from './Homescreen.js';
import Addscreen from './Addscreen.js';
import Editscreen from './Editscreen.js';
const RootStack = createStackNavigator(
    {
        Home : Homescreen,
        Add : Addscreen,
        Edit : Editscreen
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
        headerStyle: {
        backgroundColor: '#1e88e5',
    },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold',
    },
    },
    }
)
export default createAppContainer (RootStack);