import React from 'react';
import {Text, View, ActivityIndicator, StyleSheet} from 'react-native';

const BasicLoadingComponent = ({text, color}) => {
	return (
		<View style={styles.centerSplash}>
			<View>
				<ActivityIndicator size={40} color={color ? {color} : 'blue'} />
				<Text>{text ? text : 'Cargando'}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	centerSplash: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
	},
});

export default BasicLoadingComponent;
