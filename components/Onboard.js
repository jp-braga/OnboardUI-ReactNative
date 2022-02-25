import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import colors from '../assets/colors/colors';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';


const data = [
    {
      title: 'Save time by tracking your studies',
      text: 'Schedule your classes, assignments, quizzes and more',
      image: require('../assets/images/Onboard1.png'),
      bg: '#59b2ab',
    },
    {
      title: 'Stay on top of your education',
      text: 'Reduce your stress, increase your productivity',
      image: require('../assets/images/Onboard2.png'),
      bg: '#febe29',
    },
    {
      title: 'Spend more time doing the things you love',
      text: "Get started within five minutes",
      image: require('../assets/images/Onboard3.png'),
      bg: '#22bcb5',
    },
];


export default function Onboard(props) {

    let [fontsLoaded] = useFonts({
        'OpenSans-Bold': require('../assets/fonts/OpenSans-Bold.ttf'),
        'OpenSans-SemiBold': require('../assets/fonts/OpenSans-SemiBold.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    const renderItem = ({item}) => {
        return(
            <View style={styles.slide}>
                <Image source={item.image} style={styles.image}/>
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.text}>{item.text}</Text>
                </View>
            </View>
        )
    }

    const renderDoneButton = () => {
        return (
            <View style={styles.rightTextWrapper}>
                <Text style={styles.rightText} >Done</Text>
            </View>
        )
    }
    
    const renderNextButton = () => {
        return (
            <View style={styles.rightTextWrapper}>
                <Text style={styles.rightText}>Next</Text>
            </View>
        )
    }
    
    const renderPrevButton = () => {
        return (
            <View style={styles.leftTextWrapper}>
                <Text style={styles.leftText}>Prev</Text>
            </View>
        )
    }

    const keyExtractor = (item) => item.title;

    const handleDone = () => {
        props.handleDone();
    }

    return (
        <View style={{flex: 1}}>
            <StatusBar translucent backgroundColor="transparent" />
            <AppIntroSlider
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            renderDoneButton={renderDoneButton}
            renderNextButton={renderNextButton}
            renderPrevButton={renderPrevButton}
            showPrevButton
            dotStyle={styles.dotStyle}
            activeDotStyle={styles.activeDotStyle}
            data={data}
            onDone={handleDone}
            />
        </View>
    );
}

const styles = StyleSheet.create({

    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white
    },

    image: {
        marginVertical: 60,
    },

    title: {
        fontSize: 24,
        color: colors.black,
        textAlign: 'center',
        fontFamily: 'OpenSans-Bold',
        marginHorizontal: 60,
    },

    text: {
        fontSize: 14,
        color: colors.gray,
        textAlign: 'center',
        fontFamily: 'OpenSans-SemiBold',
        marginHorizontal: 60,
        marginTop: 20,
    },

    rightTextWrapper: {
        width: 40,
        height: 40,
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    leftTextWrapper: {
        width: 40,
        height: 40,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    rightText: {
        color: colors.blue,
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 14,
    },

    leftText: {
        color: colors.blue,
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 14,
    },

    dotStyle: {
        backgroundColor: colors.blueFaded,
    },

    activeDotStyle: {
        backgroundColor: colors.blue,
    }
});
