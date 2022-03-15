import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, FlatList, TouchableOpacity, Modal } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '../navigation/MainStack';
import { IExercise } from '../types';
import CorrectAnswerModal from '../modals/CorrectAnswerModal';
import WrongAnswerModal from '../modals/WrongAnswerModal';

type Props = NativeStackScreenProps<MainStackParamList, 'Exercises'>;

const ExerciseScreen: React.FC<Props> = ({ route }) => {
    const [exercise, setExercise] = React.useState<Array<IExercise>>(route.params.exercise);
    const [selectedAnswer, setSelectedAnswer] = React.useState<String>("");
    const [correctModalOpen, setCorrectModalOpen] = React.useState(false);
    const [wrongAnswerModalOpen, setWrongAnswerModalOpen] = React.useState(false);

    // const currentExercise = exercise.length ? exercise[0] : {} as IExercise;
    const currentExercise = exercise.length ? exercise[0] : null;

    const englishRenderText = ({ item, index }: { item: String, index: number }) => (
        <Text style={[styles.englishText, index == currentExercise?.EnglishTrIndex && styles.englishTrText]}>{item} </Text>
    )

    const germanRenderText = ({ item, index }: { item: String, index: number }) => (
        item.length ? <Text style={[styles.germanText, index == currentExercise?.EnglishTrIndex && styles.englishTrText]}>{item} </Text>
            : selectedAnswer.length ?
                <TouchableOpacity style={[styles.optionsButton,
                correctModalOpen && { backgroundColor: '#00e0e7' },
                wrongAnswerModalOpen && { backgroundColor: '#fe7d89' }
                ]} onPress={() => setSelectedAnswer("")}>
                    <Text style={styles.optionText}>{selectedAnswer}</Text>
                </TouchableOpacity>
                : <View style={styles.germanEmptyText} />
    )

    const optionsRender = ({ item }: { item: String }) => (
        <TouchableOpacity style={styles.optionsButton} onPress={() => setSelectedAnswer(item)}>
            <Text style={styles.optionText}>{item}</Text>
        </TouchableOpacity>
    )

    const onSubmit = () => {
        if (currentExercise?.answer == selectedAnswer) {
            setCorrectModalOpen(true);
        } else {
            setWrongAnswerModalOpen(true);
        }
    }

    const nextExercis = () => {
        setCorrectModalOpen(false);
        setSelectedAnswer("");
        let data = exercise.slice(1);
        setExercise(data);
    }

    const tryAgain = () => {
        setWrongAnswerModalOpen(false);
        setSelectedAnswer("");
        let data = exercise.slice(1);
        setExercise(data);
    }

    return <SafeAreaView style={styles.container}>

        {
            !currentExercise ? <View style={styles.finishContainer}>
                <Text style={styles.finishText}>You finished all exercises</Text>
            </View>
                : <>
                    <CorrectAnswerModal
                        visible={correctModalOpen}
                        onPress={nextExercis}
                    />

                    <WrongAnswerModal
                        answer={currentExercise?.answer}
                        visible={wrongAnswerModalOpen}
                        onPress={tryAgain}
                    />

                    <View style={styles.content}>
                        <Text style={ styles.headerText}>Fill in the missing word</Text>
                        <FlatList<String>
                            data={currentExercise?.English}
                            renderItem={englishRenderText}
                            contentContainerStyle={{ alignItems: 'center' }}

                            horizontal
                            scrollEnabled={false}

                        />

                        <FlatList<String>
                            data={currentExercise?.German}
                            renderItem={germanRenderText}
                            horizontal
                            style={{ marginTop: 30 }}
                            contentContainerStyle={selectedAnswer.length ? { alignItems: 'center' } : undefined}
                            scrollEnabled={false}

                        />

                        <FlatList<String >
                            data={currentExercise?.options}
                            renderItem={optionsRender}
                            ItemSeparatorComponent={() => <View style={{ marginVertical: 10 }} />}
                            columnWrapperStyle={{ justifyContent: 'space-around' }}
                            // columnWrapperStyle={{marginHorizontal:10}}
                            numColumns={2}
                            style={{ marginTop: 30 }}
                            scrollEnabled={false}
                        />

                    </View>
                    <TouchableOpacity style={styles.fotter} onPress={onSubmit} disabled={!selectedAnswer.length}>
                        <Text style={styles.fotterText}>CHECK ANSWER</Text>
                        {/* <Text style={styles.fotterText}>Continue</Text> */}
                    </TouchableOpacity>
                </>
        }
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3c6c82',
        justifyContent: 'space-between'
        // alignItems: 'center'
    },
    finishContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    content: {
        paddingTop: 35,
        alignItems: 'center'
    },
    finishText:{
        color:'white',
        fontSize:26,
        fontWeight:'bold'
    },
    headerText: {
        color:'white',
        fontSize: 19,
        marginBottom: 33
    },
    englishText: {
        color: 'white',
        fontSize: 24
    },
    englishTrText: {
        fontSize: 26,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    germanText: {
        color: 'white',
        fontSize: 24,
        textDecorationLine: 'underline',
        textDecorationStyle: 'dotted',
        // textDecorationColor:'white'
    },
    germanEmptyText: {
        width: 40,
        borderBottomWidth: 1,
        borderColor: 'white',
        marginHorizontal: 12
    },
    optionsButton: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,

        // width:'40%',
        padding: 13,
        marginHorizontal: 5,
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center'
    },
    optionText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#3c6c82'
    },
    selectedAnswerView: {

    },
    fotter: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,

        width: '80%',
        alignSelf: 'center',
        alignItems: 'center',
        padding: 16,
        marginHorizontal: 5,
        backgroundColor: '#6392a6',
        borderRadius: 20,
    },
    fotterText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default ExerciseScreen;