# React + TypeScript + Vite
useReducer es similar a useState, solo que este nos sirve para ocasiones mas complejas
La funcion reducer toma 2 argumentos, el state actual y la accion, cuando se le asigna una accion ya en su funcion, reducer retornara el siguiente o nuevo valor.

El reducer siempre va a retornar un state nuevo con la informacion que recibe en sus parametros

La funcion reducer va a retornar un array con 2 elementos, el primero sera el state con el valor actual, el segundo una funcion 
dispatch que la podremos usar y asignandole los argumentos que recibira nuestra funcion en cuestion
El initialState solo nos servira para que en el primer renderizado sepa cual es el valor inicial y sobre el trabaje tambien la funcion reducer por primera vez.