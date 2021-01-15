import { StyleSheet, TextStyle, ViewStyle } from "react-native";

type Style = {
    container: ViewStyle,
    containerLogin: ViewStyle,
    inputBox: ViewStyle,
    inputModal: ViewStyle,
    button: ViewStyle,
    buttonText: TextStyle,
    logoText: TextStyle,
    textHighlight: TextStyle,
    centeredView: ViewStyle,
    modalView: ViewStyle,
    modalBody: ViewStyle,
    modalFooter: ViewStyle,
    openButton: ViewStyle,
    modalText: TextStyle,
    textStyle: TextStyle,
    banner: ViewStyle,
    titleBanner: TextStyle,
    bodyItem: ViewStyle,
    bodyTittleText: TextStyle,
    bodyContentText: TextStyle,
    boderItem: ViewStyle
};

export default StyleSheet.create<Style>({
    //style Login
    container: {
        flex: 1,
        padding: 10,
    },
    containerLogin: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    inputBox: {
        width: '80%',
        aspectRatio: 100 / 15,
        backgroundColor: '#eeeeee',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#002f6c',
        marginVertical: 10
    },
    inputModal: {
        width: '80%',
        aspectRatio: 100 / 20,
        fontSize: 16,
        color: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        marginBottom: 10
    },
    button: {
        width: '40%',
        aspectRatio: 100 / 30,
        backgroundColor: '#4f83cc',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12,
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: "center"
    },
    logoText: {
        fontSize: 35,
        marginBottom: 30,
        textAlign: 'center',
    },
    textHighlight: {
        alignItems: "center",
        fontSize: 16,
        padding: 10,
        textDecorationLine: 'underline'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
    modalView: {
        padding: 35,
        backgroundColor: "grey",
        borderRadius: 5,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    modalBody: {
        marginBottom: 20,
        alignItems: "center",
    },
    modalFooter: {
        alignItems: 'flex-end',
        flexDirection: 'row-reverse',
    },
    openButton: {
        elevation: 2
    },
    textStyle: {
        fontSize: 20,
        color: "#002f6c",
        fontWeight: 'bold',
        textAlign: "center"
    },
    modalText: {
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 15,
        textAlign: "center",
        fontSize: 28
    },
    banner: {
        backgroundColor: '#58257b',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10
    },
    titleBanner: {
        color: '#fff',
        flex: 3,
        fontWeight: 'bold',
        fontSize: 18
    },
    boderItem: {
        borderWidth: 1,
        borderColor: '#1E90FF',
    },
    bodyItem: {
        padding: 10,
        flexDirection: 'row'
    },
    bodyTittleText: {
        flex: 1,
        color: '#e80980',
        fontSize: 12,
        marginBottom: 5
    },
    bodyContentText: {
        flex: 1,
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5
    }
})