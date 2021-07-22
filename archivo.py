import numpy as np
import pandas as pd

#inicializacion de programa
Ramas=[[205, 201], [205, 202], [206, 203], [206, 204], [207, 205], [207, 206], [208, 207]]

import numpy as np
#Inicializamos el programa, con la variables de entrada..... podemos generar el vector de voltajes.
#cada posicion del vector esta relacionado con su valor en el nodo:

variable = 7620+0j

variables = np.array([variable, variable, variable, variable, variable, variable, variable, variable, variable, variable])

#las potencias activas y reactivas del sistemas tambien son variables de entrada.
potenciaN = np.array([0,300*1000,400*1000,450*1000,600*1000,320*1000,400*1000,650*1000,300*1000,500*1000])
potenciaR = np.array([0,100*1000,80*1000,180*1000,200*1000,100*1000,80*1000,200*1000,80*1000,150*1000])
division = np.array([variables/variable])

#calculamos las varibles que se generan en el sistema.
potencia1 = potenciaN*(0.2+0.8*((np.abs(division))**2))
potencia2 = potenciaR*(0.2+0.8*((np.abs(division))**2))
sumaPotencias = potencia1 + (potencia2*1j)
divisionPotencias = np.conj(sumaPotencias)/variable

print(potencia1)
print(potencia2)
print(sumaPotencias)
print(divisionPotencias)