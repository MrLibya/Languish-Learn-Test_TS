import React from "react";
import {
    StyleSheet,
    View,
    Text,
    Modal,
    TouchableOpacity
} from "react-native";

const WrongAnswerModal = ({ visible, onPress, answer }: { visible: boolean, onPress: any, answer: String | undefined}) => {

    return (
        <Modal
            transparent
            animationType="slide"
            visible={visible}
        >
            <View style={styles.container}>
                <Text style={styles.title}>
                    <Text style={{fontSize:17, fontWeight:'bold'}}>Answer: </Text> 
                    <Text>{answer}</Text>
                </Text>

                <TouchableOpacity style={styles.fotter} onPress={onPress}>
                    <Text style={styles.fotterText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

export default WrongAnswerModal;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        padding: 25,
        borderRadius: 25,
        height: 150,
        marginTop: 'auto',
        backgroundColor: '#fe7d89',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    title: {
        color: 'white',
        fontSize: 16,
        marginBottom: 13,
        alignSelf: 'baseline'
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
        backgroundColor: 'white',
        borderRadius: 20,
    },
    fotterText: {
        color: '#fe7d89',
        fontSize: 18,
        fontWeight: 'bold'
    }
});