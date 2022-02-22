// unidades de tiempo 
// - segundos
// - minutos 
// - horas 

import { _ } from "core-js"

// <!-- unidad base = 1mt -->
// unidades de distancia 
// - milimetro (mm) -> 0.001m 
// - centimentro (cm) -> 0.01m 
// - decimetro (dm) -> 0.1m
// - metro (mt) -> 1m 
// - decametro (dam) ->10m
// - hectometro (hm) -> 100m
// - kilometro (km) -> 1000m 



/* tiempo/distancia/aseleracion*/ 
function selectsParameters(type){
    switch (type){
        case 'time':
            return [
                {
                    abbreviation: 'seg',
                    description: 'Segundos'
                },
                {
                    abbreviation: 'min',
                    description: 'Minutos'
                },
                {
                    abbreviation: 'h',
                    description: 'Horas'
                },
            ]

        case 'distance':
            return [
                {
                    abbreviation: 'mm',
                    description: 'Milimetro'
                },
                {
                    abbreviation: 'cm',
                    description: 'Centimetro'
                },
                {
                    abbreviation: 'dm',
                    description: 'Decimetro'
                },
                {
                    abbreviation: 'mt',
                    description: 'metro'
                },
                {
                    abbreviation: 'dam',
                    description: 'Decametro'
                },
                {
                    abbreviation: 'hm',
                    description: 'Hectometro'
                },
                {
                    abbreviation: 'km',
                    description: 'Kilometro'
                },
            ]

        case 'acceleration':
            return [
                {
                    abbreviation: 'm/s^2',
                    description: 'Metros x segundo al cuadrado'
                },
                // {
                //     abbreviation: 'm/h^2',
                //     description: 'Metros x hora al cuadrado'
                // },
                {
                    abbreviation: 'km/h^2',
                    description: 'kilometros x hora al cuadrado'
                },
                // {
                //     abbreviation: 'km/s^2',
                //     description: 'kilometros x segundo al cuadrado'
                // },
                {
                    abbreviation: 'km/h^2',
                    description: 'kilometros x hora al cuadrado'
                },
            ]

        case 'speed':
            return [
                {
                    abbreviation: 'm/s',
                    description: 'Metros x segundo'
                },
                {
                    abbreviation: 'm/h',
                    description: 'Metros x hora'
                },
                {
                    abbreviation: 'km/s',
                    description: 'kilometros x segundo'
                },
                {
                    abbreviation: 'km/h',
                    description: 'kilometro x hora'
                },
            ]
    }
}

function conversions(data = null, type = null){
    console.log(data,type)
}



export default {conversions, selectsParameters}