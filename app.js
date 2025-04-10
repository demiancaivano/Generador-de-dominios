let pronombre = ['el', 'la', 'los', 'las'];
let adjetivo = ['enorme', 'gigante', 'pequeñx', 'diminutx'];
let sustantivo = ['paranoia', 'platypus', 'visitante', 'saltarín'];
let dominio = ['.com', '.gob', '.net', '.edu']

for (let i = 0; i < pronombre.length; i++) {
    for (let j = 0; j < adjetivo.length; j++) {
        for (let k = 0; k < sustantivo.length; k++) {
            for (let l = 0; l < dominio.length; l++) {
                console.log(pronombre[i] + adjetivo[j] + sustantivo[k] + dominio[l]);
            }
        }
    }
}