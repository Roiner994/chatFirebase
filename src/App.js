import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import configureStore from './Store';
import {StatusBar} from 'react-native';
import Navigator from './Navigator.js';
import BasicLoadingComponent from './components/load/BasicLoadingComponent';

const {store, persistor} = configureStore();

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<PersistGate loading={<BasicLoadingComponent />} persistor={persistor}>
					<StatusBar barStyle="light-content" />
					<Navigator />
				</PersistGate>
			</Provider>
		);
	}
}
