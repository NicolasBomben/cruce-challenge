import { useState, useEffect } from "react";
import styles from './Timer.module.css';

export const Timer = () => {
  //estados para manejera las horas, minutos y seg.
  const [horas, setHoras] = useState(23);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    //uso setInterval que se ejecuta cada segundo.
    const intervalo = setInterval(() => {
      //si hay segundos resto uno.
      if (segundos > 0) {
        setSegundos(segundos - 1);
      } else {
        //si no tengo segs pero si minutos resto un minuto y reinicio segundos.
        if (minutos > 0) {
          setMinutos(minutos - 1);
          setSegundos(59);
        } else {
          //si no teng minutos pero si horas, resto hora y reinicio minuto.
          if (horas > 0) {
            setHoras(horas - 1);
            setMinutos(59);
            setSegundos(59);
          } else {
            //detengo el intervalo cuando no tengo ni horas, minutos y segundos.
            clearInterval(intervalo);
          }
        }
      }
    }, 1000);

    //limpio el intervalo cuando el componente se desmonta o se cambian los valores.
    return () => clearInterval(intervalo);
  }, [horas, minutos, segundos]);

  //funcion para formatear el valor. asi puedo mostrar dos digitos. en formato HH:MM:SS
  function formatNumber(value) {
    if (value < 10) {
      return "0" + value;
    } else {
      return String(value);
    }
  }

  return (
    <div className={styles.timerContainer}>
      <div className={styles.timer}>
        <span>{formatNumber(horas)}</span>:
        <span>{formatNumber(minutos)}</span>:
        <span>{formatNumber(segundos)}</span>
      </div>
      <div className={styles.horas}>
        <span>HS</span>
        <span>min</span>
        <span>seg</span>
      </div>
    </div>
  );
};
