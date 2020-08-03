/*Desarrollar una función que convierta 
de minutos a segundos. Pasar minutos por 
parámetro y devolver los segundos. 
Hacer tests con numeros fijos 
(Siempre el mismo numero deberia dar 
el mismo resultado). 
Recordar tirar errores y testearlos.*/

const minToSeg = minute => {
    if(typeof minute !== "number") throw new Error('No es un número!')
    if(minute < 0) throw new Error('No es un valor que pueda convertirse a segundos');
    
    return `Son ${minute*60} segundos`;
}

test('multiplica 60 al número 1, devolviendo 60', () => {
    expect(minToSeg(1)).toBe('Son 60 segundos');
});

test('multiplica 60 al número 90, devolviendo 5400', () => {
    expect(minToSeg(90)).toBe('Son 5400 segundos');
});

test('multiplica 60 al número 150, devolviendo 9000', () => {
    expect(minToSeg(150)).toBe('Son 9000 segundos');
});

test('Tirar Error', () => {
    expect(() => minToSeg("1")).toThrow('No es un número!');
});