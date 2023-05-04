import { StyleSheet } from 'react-native';
import COLORS from '../src/const/colors';
export const gStyle = StyleSheet.create({
    non: {
        flex: 1,
        //padding: 20,
        //paddingTop: 100,
        backgroundColor: COLORS.white
    },
    title:{
        fontSize: 40,
        fontWeight: 'bold',
        color: COLORS.black,
        //textAlign: 'center'
    }, 
    text: {
        color: COLORS.grey,
        fontSize: 18,
        marginVertical: 5

    },
    conteiner: {
        paddingTop: 50,
        paddingHorizontal: 20
    },
    space: {
        marginBottom:20
    },
    label:{
        marginVertical:5,
        fontSize: 14,
        color: COLORS.grey,
    },
    inputContainer:{
        height: 55,
        backgroundColor: COLORS.light, 
        flexDirection:'row',
        paddingHorizontal: 15,
        borderWidth: 0.5,
        alignItems:'center',
    }

})
