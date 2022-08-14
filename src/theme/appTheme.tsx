import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    fondo:{
        flex: 1,
        backgroundColor:'black'
    },
    calculadoraContainer:{
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end'
    },
    resultado: {
        color:'white',
        fontSize: 60,
        textAlign:'right',
        paddingHorizontal: 20,
        marginBottom:10
    },
    resultadoPequeno:{
        color:'white',
        fontSize: 30,
        textAlign:'right',
        paddingHorizontal: 20
    },
    fila:{
        flexDirection: 'row',
        justifyContent:'center',
        marginBottom: 18,
        paddingHorizontal: 10
    },

})