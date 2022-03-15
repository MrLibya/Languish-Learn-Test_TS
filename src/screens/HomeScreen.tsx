import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';
import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '../navigation/MainStack';
import { IExercise } from '../types';

type Props = NativeStackScreenProps<MainStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: Props) => {
    const [loading, setLoading] = useState(true);
    const [exercise, setExercise] = useState<IExercise[]>([]);

    React.useEffect(() => {
        const loadData = async () => {
            try {
                const exercises = await firestore().collection('exercises').get();
                // var data: FirebaseFirestoreTypes.DocumentData[] = [];
                var data: IExercise[] = [];
                exercises.forEach(element => {
                    // console.log("id: ",element.id, element.data())
                    data.push(element.data() as IExercise);
                });
                // console.log(data)
                setExercise(data);
            } catch (err) {
                console.log("error: ", err)
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, [])

    const onStartExercises = () => {
        if (!exercise || !exercise.length)
            return;
        navigation.navigate('Exercises', { exercise });
    }

    return <SafeAreaView style={styles.container}>
        <Text style={styles.startText}>Start yout exercises</Text>
        <Button title='Start' onPress={onStartExercises} disabled={loading} />
        {!exercise.length && !loading && <Text style={styles.errorText}>Faild to load data from server</Text>}
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    startText: {
        fontSize: 16
    },
    errorText: {
        color: 'red',
        fontSize: 14
    }
});

export default HomeScreen;