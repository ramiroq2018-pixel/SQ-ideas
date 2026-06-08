// ============================================================
//  NOTAS.JS — SQ Ideas
//  Ramiro Quinteros & Leonel Salvo
// ============================================================
//
//  CÓMO AGREGAR UNA NOTA:
//  1. Copiar el bloque { ... } de ejemplo al INICIO del array
//  2. Pegarlo justo después del primer [
//  3. Poner coma al final del bloque }
//  4. Completar los campos y guardar
//  5. Push a GitHub → la web se actualiza sola
//
//  CAMPO autores: puede ser un string o un array.
//    Un autor:    autores: "Ramiro Quinteros"
//    Dos autores: autores: ["Ramiro Quinteros", "Leonel Salvo"]
//
//  FORMATO del cuerpo (campo `cuerpo`):
//    Párrafos     → separar con línea en blanco (\n\n)
//    ## Subtítulo → encabezado de sección
//    > Cita       → cita destacada con línea roja
//    El primer párrafo siempre tiene letra capital automática.
//
// ============================================================

const NOTAS = [

  {
    titulo: "El desagio silencioso y el cepo que conviene mantener",
    bajada: "Argentina atraviesa un segundo ciclo de desinflación sin mecanismo explícito de compensación. Esta vez, el crédito en dólares hace el trabajo que antes hizo el desagio. Y el cepo parcial, curiosamente, es parte del diseño.",
    autores: "Ramiro Quinteros",
    fecha: "2026-06-01",
    tiempo_lectura: 8,
    cuerpo: `En 1985, el Plan Austral de Alfonsín fue acompañado de un mecanismo formal y explícito: el desagio. Frente a la brusca caída de la inflación que el plan imponía, el gobierno reconoció que deudores endeudados a tasas nominales altísimas quedarían aplastados si se les exigía pagar esos contratos a valor nominal. La solución fue intervenir en los contratos y reducir las obligaciones de manera proporcional a la desinflación esperada.

El gobierno de Javier Milei, ideológica y doctrinalmente opuesto a cualquier interferencia en los contratos privados, no implementó nada similar cuando encaró su propio proceso de desinflación a partir de diciembre de 2023. Sin embargo, el sistema encontró su propio equilibrio. Comprender cómo lo hizo —y cómo ese equilibrio se fracturó en 2025— es clave para entender el estado actual del crédito en Argentina, y por qué el cepo cambiario parcial para empresas aún tiene una lógica que va más allá de la política.

## El año del licuado silencioso

Cuando Milei asumió, la inflación heredada era de cuatro dígitos anualizados. La estrategia monetaria y fiscal del nuevo gobierno combinó tres elementos: una fuerte devaluación inicial del tipo de cambio oficial, el desarme acelerado de las Leliqs —los pasivos remunerados del BCRA que acumulaban un riesgo sistémico creciente— y una política fiscal que comenzó a generar superávit primario desde el primer mes, reduciendo la demanda de financiamiento del Tesoro y abriendo espacio para el crowding in del sector privado.

El resultado fue que los pesos liberados por el desarme de Leliqs encontraron destino en refinanciaciones bancarias. Los bancos, obligados a prestar en un entorno donde los pasivos remunerados desaparecían como alternativa rentable, absorbieron a su manera el shock de desinflación: renegociando contratos, extendiendo plazos, aceptando quitas implícitas de tasa real. No hubo decreto de desagio. Pero hubo un proceso de absorción silenciosa que evitó una crisis crediticia masiva.

La lógica funcionó también porque el Estado "licuaba" su propia deuda en pesos pagando tasas por debajo de la inflación —a costa del ahorrista en pesos, pero aliviando la presión sobre el sistema—. El tipo de cambio fijo aportó el ancla nominal que el sistema necesitaba para que la desinflación fuera creíble y ordenada.

## El año en que la desinflación llegó tarde para algunos

En 2025, el guion se repitió pero con variaciones peligrosas. La inflación no cedió tan rápido como el programa prometía, y las tasas reales en pesos se mantuvieron extraordinariamente elevadas durante la mayor parte del año. Los agentes económicos que tenían una visión pesimista sobre la sostenibilidad del programa —y no eran pocos— habían tomado créditos en pesos a tasas estratosféricas esperando que la inflación licuara esa deuda. Cuando la desinflación llegó de todas formas, aunque con rezago, esos deudores quedaron atrapados.

El resultado está en los números: Argentina cerró 2025 con una mora bancaria del 5,3%, la más alta de América Latina, superando ampliamente a Brasil (3,9%), Colombia (3%) y Chile (2,4%). En créditos familiares, el deterioro llegó al 11%. En el conurbano bonaerense, la mora en préstamos personales trepó al 18,4% en diciembre, cuadruplicándose en doce meses. Para marzo de 2026, el indicador general alcanzó el 7%, su nivel más alto en veintiún años.

> "La variabilidad de la morosidad está explicada principalmente por la dinámica de las tasas de interés reales y la evolución del salario real." — Deloitte / Econosignal

El modelo econométrico de Deloitte es elocuente: un aumento de diez puntos porcentuales en la tasa de interés real se asocia con un incremento de 3,4 puntos en la mora. Argentina experimentó tasas reales excepcionalmente elevadas durante casi todo el año pasado. La aritmética es implacable.

## El giro hacia el dólar: una solución de mercado con cepo incorporado

Frente al deterioro del crédito en pesos, el sistema financiero encontró una válvula de escape: el crédito en dólares. Entre noviembre de 2023 y junio de 2025, los depósitos en dólares del sector privado crecieron 98%, impulsados inicialmente por el blanqueo de capitales y luego por una combinación de estabilidad cambiaria, bancarización creciente y decisiones de ahorro de los argentinos. A principios de 2025, los préstamos en dólares al sector privado superaban los USD 12.300 millones, casi USD 9.000 millones más que a fines de 2023.

Este dinamismo del crédito en moneda extranjera —que beneficia principalmente a la industria, el agro y el sector energético— no sería posible sin un elemento estructural que suele presentarse como un defecto del programa: el cepo cambiario parcial que persiste para empresas.

La abundancia de depósitos en dólares dentro del sistema, combinada con un cepo que limita la salida de esos fondos y un ahorrista argentino que —por razones históricas más que por rentabilidad— valora enormemente tener sus ahorros en moneda extranjera dentro del sistema bancario, genera una represión financiera atípica: las tasas en dólares son notoriamente más bajas que las que el mercado fijaría con libre movilidad de capitales.

Con plena apertura, una estimación razonable ubicaría la tasa mínima en dólares en torno al 9% anual: cuatro puntos de tasa libre de riesgo más cinco puntos de riesgo país. El cepo permite operar por debajo de ese nivel, reduciendo el costo del financiamiento para las empresas que acceden al crédito en moneda extranjera, y facilitando así la transición de un sistema que todavía digiere el daño patrimonial acumulado en los contratos en pesos.

## ¿Por qué mantener el cepo? Una lectura de incentivos

La economía argentina exhibe un desequilibrio estructural que la teoría económica reconoce perfectamente: un exceso relativo de ahorro en dólares convive con una oferta ínfima de ahorro en pesos a tasa fija y a plazos largos. En ese contexto, es racional que la tasa en dólares sea notoriamente inferior a la tasa en pesos. No se trata de una anomalía: es el precio de la dolarización cultural del ahorro argentino.

El sesgo contractivo del equipo económico —visible en los altos encajes que los bancos deben mantener en el BCRA y en la política de esterilización que absorbe buena parte de las reservas compradas (más de USD 10.000 millones en lo que va del año, gran parte de los cuales terminaron en el Tesoro)— hace inconveniente el crédito en pesos para muchos agentes. No porque el crédito en pesos sea imposible, sino porque su costo real sigue siendo alto en relación a las alternativas disponibles.

En ese escenario, el cepo parcial opera como un mecanismo implícito de gestión del ciclo crediticio: permite que el crédito en dólares fluya a tasas accesibles, alivia la presión sobre un sistema bancario que todavía está saneando su cartera en pesos, y da tiempo para que la nueva desinflación —que desde marzo de 2026 muestra señales más claras— haga su trabajo sin provocar una segunda ola de impagos.

No es una política declarada. No tiene nombre. Pero tiene lógica.`
  }

];
