import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

interface BotonProps {
    text: string;
    color?: string;
    ancho?: boolean;
    accion: (numeroTexto:string) => void;
}

export const BotonCalc = ({
    text,
    color = '#2D2D2D',
    ancho = false,
    accion,
}: BotonProps) => {
    return (
        <TouchableOpacity
            onPress={()=>accion(text)}
        >
            <View
                style={{
                    ...styles.boton,
                    backgroundColor: color,
                    width: ancho ? 180 : 80,
                }}>
                <Text
                    style={{
                        ...styles.botonTexto,
                        color: color === '#9B9B9B' ? 'black' : 'white',
                    }}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    boton: {
        width: 80,
        height: 80,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    botonTexto: {
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '300',
    },
});
