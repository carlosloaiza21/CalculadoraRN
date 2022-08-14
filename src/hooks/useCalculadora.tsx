import React, { useRef, useState } from 'react'

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {
    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('0');


    const ultimaOperacion=useRef<Operadores>()

    const limpiar =() =>{
        setNumero('0');
        setNumeroAnterior('0');
    }

    const armarNumero = (numeroTexto:string)=>{
        if(numero.includes('.') && numeroTexto ==='.') return;

        if(numero.startsWith('0') || numero.startsWith('-0')){
            if(numeroTexto==='.'){
                setNumero(numero+numeroTexto)
            }else if(numeroTexto ==='0' && numero.includes('.')){
                setNumero(numero+ numeroTexto)
            }else if(numeroTexto !== '0' && !numero.includes('.')){
                setNumero(numeroTexto)
            }else{
                setNumero(numero + numeroTexto)
            }
        }else{
            setNumero(numero + numeroTexto)
        }
    }

    const del=()=>{
        if(numero.length ===1 ){
            setNumero('0');
        }else if(numero.length===2 && (numero.startsWith('-') || numero.startsWith('.'))){
            setNumero('0');
        }else{
            setNumero(numero.substring(0,numero.length-1))
        }
    }

    const positivoNegativo = () =>{
        if(numero.includes('-')){
            setNumero(numero.replace('-',''));
        }else{
            setNumero(`-${numero}`)
        }
    }

    const numToMem = () => {
        if(numero.endsWith('.')){
            setNumeroAnterior(numero.slice(0,-1))
        }else{
            setNumeroAnterior(numero)
        }
        setNumero('0')
    }

    const btnDividir = ()=>{
        numToMem();
        ultimaOperacion.current = Operadores.dividir;
    }

    const btnMultiplicar = ()=>{
        numToMem();
        ultimaOperacion.current = Operadores.multiplicar;
    }

    const btnRestar = ()=>{
        numToMem();
        ultimaOperacion.current = Operadores.restar;
    }

    const btnSumar = ()=>{
        numToMem();
        ultimaOperacion.current = Operadores.sumar;
    }

    const calcular = () =>{
        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero(`${num1+num2}`);
                break;
            case Operadores.restar:
                setNumero(`${num2-num1}`);
                break;
            case Operadores.dividir:
                setNumero(`${num1/num2}`);
                break;
            case Operadores.multiplicar:
                setNumero(`${num1*num2}`);
                break;
            default:
                break;
        }
        setNumeroAnterior('0')
    }

    return {
        numero,
        numeroAnterior,
        armarNumero,
        limpiar,
        calcular,
        del,
        positivoNegativo,
        btnDividir,
        btnMultiplicar,
        btnSumar,
        btnRestar
    }
}
