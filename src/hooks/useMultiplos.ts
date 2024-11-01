import { useEffect, useState } from "react";
import type {  NumberType, MessageType } from "../types"
import { CloudFirestore } from "../firebase/config";
import { collection,  getDocs, query, where, addDoc } from "firebase/firestore/lite";

export const useMultiplos = () => {
    //tambien se puede hacer con un null
    const [cantidad, setCantidad] = useState<number | null>(null);
    const [numbers, setNumbers] = useState<number[]>([]);
    const [multiplos, setMultiplos] = useState<NumberType[]>([]);
    const [error, setError] = useState <MessageType> ({error: false, message: '', classType: ''});

    const colors = {
      3: 'green',
      5: 'red',
      7: 'blue',
      0: 'transparent'
  }

  useEffect(() => {
      getMultiplos();
      
  }, [numbers]);

  useEffect(() => {
    }, [multiplos]);
      
  const getMultiplos = () => {
    if(!numbers.length) return;
      const multi = numbers.map((n) => {
          let color = colors[0];
          let multiplo = 0;
          switch (true) {
              case n===0:
                  color = colors[0];
                  multiplo = 0;
                  break;
              case n % 3 === 0:
                  color = colors[3];
                  multiplo = 3;
                  break;
              case n % 5 === 0:
                  color = colors[5];
                  multiplo = 5;
                  break;
              case n % 7 === 0:
                  color = colors[7];
                  multiplo = 7;
                  break;
              default:
                  color = colors[0];
                  multiplo = 0;
                  break;
          }
          return {
              number: n,
              color,
              multiplo
          }
      });

      setMultiplos(multi);
  }
  const getCantidad= ( detail :HTMLInputElement) => {

    //validar que sea un numero positivo
    const n = Number(detail.value || null);
    setCantidad(n);

    setNumbers([]);
    if(!n) return;
    //buscando los valores de 0 al numero ingresado
        for (let i = 0; i <= n; i++) {
            
            setNumbers((numbers) => [...numbers, i]);
            
        }
    }

    const subiendoBD = async(e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!cantidad || !multiplos.length) return;

        try {
            //buscando si ya existe el registro
            const coleccionRef = collection(CloudFirestore, 'multiplos');

            const q = query(coleccionRef, where('cantidad', '==', cantidad));

            const querySnapshot = await getDocs(q);

            if(!querySnapshot.empty) return;


            //guardando en la base de datos
            const docRef = collection(CloudFirestore, 'multiplos');

            const doc = {
                cantidad,
                multiplos
            }

           let resp= await addDoc(docRef, doc);
           console.log('resp', resp);
            console.log('Document written with ID: ', resp.id);
            setError({error: false, message: 'Guardado con exito', classType: 'bg-green-500'});
            

        } catch (error) {
            console.log('error', error);
            setError({error: true, message: 'Error al subir a la base de datos', classType: 'bg-red-500'});
        }
    }



  return{

    multiplos,
    error,
    subiendoBD,
    getCantidad,
  }
}
