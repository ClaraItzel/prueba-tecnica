import { IonCard, IonContent, IonInput, IonItem, IonLabel, IonList } from "@ionic/react";
import { useEffect, useState } from "react";
import { NumbersItem } from "./NumbersItem";
import type { NumberType } from "../types";
import { useMultiplos } from "../hooks";
import { Multiplos } from "./Multiplos";
import { Explicacion } from "./Explicacion";

interface ContainerProps {
  name: string;
}


export const BodyPrueba: React.FC<ContainerProps> = ({ name }) => {


    const {multiplos , getCantidad, error, subiendoBD} = useMultiplos();


  return (
    <IonContent   fullscreen={true} className="ion-padding">
        <h1 className="text-center text-2xl font-bold">{name}</h1>

        {error.message && <p className={`text-center ${error.classType} text-white py-2 font-bold my-0 ` }>{error.message}</p>}
        <IonCard className="ion-padding">
            <Explicacion />
           <form 
                className="flex justify-center items-center mt-5"
                onSubmit={subiendoBD}>
                <IonList>
                    <IonItem>
                        <IonInput 
                            label="Cantidad" 
                            placeholder="Ingresa Cantidad"
                            type="number"
                            onKeyUp={(e) => getCantidad(e.target as HTMLInputElement)}
                            >
                            
                            </IonInput>
                    </IonItem>
                </IonList>

                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
                    >
                    Guardar
                </button>
           </form>
           </IonCard>

       <Multiplos
            multiplos={multiplos}
        /> 
    </IonContent >
  );
};

