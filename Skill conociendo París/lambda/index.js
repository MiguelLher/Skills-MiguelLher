/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');


const { datasource, createDirectivePayload, datasource2,createDirectivePayload2, datasource3, createDirectivePayload3, datasource4 ,createDirectivePayload4, datasource5, createDirectivePayload5, datasource6, createDirectivePayload6, datasource7, createDirectivePayload7, datasource8, createDirectivePayload8, datasource9, createDirectivePayload9, datasource10, createDirectivePayload10} = require('./apl');

const DOCUMENT_ID = "bienvenidaApl";
const DOCUMENT_ID2 = "infovideoparis";
const DOCUMENT_ID3 = "lugaresturisticosparis";
const DOCUMENT_ID4 = "comidatipicaparis";
const DOCUMENT_ID5 = "vestimentatipicaparis";
const DOCUMENT_ID6 = "personajessobresalientes";
const DOCUMENT_ID7 = "audiomusicaparis";
const DOCUMENT_ID8 = "ayudaparis";
const DOCUMENT_ID9 = "adiosparis";
const DOCUMENT_ID10 = "errorparis";



const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
const WelcomeMessage = '¡Bienvenido a la Guía de París! Descubre la capital de Francia con nosotros. Desde la icónica Torre Eiffel hasta la deliciosa gastronomía y la música, aquí encontrarás mucha información sobre París. ¿Cómo puedo ayudarte hoy?';

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload(DOCUMENT_ID, datasource);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(WelcomeMessage)
            .reprompt(WelcomeMessage)
            .getResponse();
    }
};

const Descripcion = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'descripcionintent';
    },
    handle(handlerInput) {
        const speakOutputdescripcion = 'París, la capital de Francia y conocida como la Ciudad del Amor, es un destino emblemático que cautiva a visitantes de todo el mundo con su encanto inigualable. Conocida por su arquitectura impresionante, desde la imponente Torre Eiffel hasta los majestuosos bulevares adornados con históricos edificios y jardines pintorescos, París ofrece una mezcla perfecta de historia, cultura y sofisticación. Además de ser un epicentro artístico con museos de renombre como el Louvre y el Centre Pompidou, París también deleita a los paladares con su exquisita gastronomía, que va desde croissants y baguettes hasta platos tradicionales como el boeuf bourguignon. Descubre la magia de París en cada rincón, donde la belleza y la historia se entrelazan en una experiencia inolvidable.';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload2(DOCUMENT_ID2, datasource2);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutputdescripcion)
            .reprompt(speakOutputdescripcion)
            .getResponse();
    }
};

const lugaresturisticosparis= {
        canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'lugaresturisticosintent';
    },
    handle(handlerInput) {
        const speakOutput = 'Estos son algunos lugares turisticos de París';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload3(DOCUMENT_ID3, datasource3);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
}

const comidatipicaparis= {
        canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'comidatipicaintent';
    },
    handle(handlerInput) {
        const speakOutputcomida = 'Descubre las delicias culinarias de París. Desde el famoso croissant, un bollo de masa hojaldrada ideal para el desayuno, hasta el exquisito Boeuf Bourguignon, un plato tradicional lleno de sabor. Sumérgete en la gastronomía parisina que combina tradición e innovación.';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload4(DOCUMENT_ID4, datasource4);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutputcomida)
            .reprompt(speakOutputcomida)
            .getResponse();
    }
}

const trajetipicointentparis= {
        canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'trajetipicointent';
    },
    handle(handlerInput) {
        const speakOutputtraje = 'Explora el estilo elegante y sofisticado del traje típico parisino. Con una mezcla de moda clásica y moderna, París es un ícono de la moda mundial. Descubre cómo la elegancia parisina ha influido en el mundo de la moda a lo largo de los años.';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload5(DOCUMENT_ID5, datasource5);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutputtraje)
            .reprompt(speakOutputtraje)
            .getResponse();
    }
}


const personajesobresalientesparisintent= {
        canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'personajesintent';
            
    },
    handle(handlerInput) {
        const speakOutputpersonajes = 'París, cuna de artistas y visionarios, ha sido el hogar de figuras como Claude Monet, Marie Curie, Coco Chanel, Napoleón Bonaparte, Victor Hugo y Édith Piaf. Estos nombres emblemáticos han dejado una huella indeleble en la historia, cada uno aportando su talento único que ha enriquecido el legado cultural y artístico de esta ciudad única en el mundo.';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload6(DOCUMENT_ID6, datasource6);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutputpersonajes)
            .reprompt(speakOutputpersonajes)
            .getResponse();
    }
}


const musicaparis= {
        canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'musicaintent';
            
    },
    handle(handlerInput) {
        const speakOutputmusica = 'La música de París resuena con la melódica voz de Edith Piaf y su icónica canción "La Vie en Rose". Esta pieza atemporal captura la esencia romántica y bohemia de la ciudad, llevando a los oyentes a un viaje por los callejones empedrados y los cafés llenos de historia. Con su voz única y emotiva, Piaf ha inmortalizado el espíritu vibrante y apasionado de París, convirtiendo esta canción en un himno de amor y esperanza.';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload7(DOCUMENT_ID7, datasource7);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutputmusica)
            .reprompt(speakOutputmusica)
            .getResponse();
    }
}

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutputayuda = 'Estás en el lugar indicado para obtener asistencia. Aquí tienes algunas opciones útiles: Para cancelar, simplemente di Cancelar, Si necesitas ayuda, solo di Necesito ayuda, Para salir, di Salir, ';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload8(DOCUMENT_ID8, datasource8);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutputayuda)
            .reprompt(speakOutputayuda)
            .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutputadios = 'Adiós, vuelva pronto a conocer mas de París';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload9(DOCUMENT_ID9, datasource9);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutputadios)
            .reprompt(speakOutputadios)
            .getResponse();
    }
};

const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutputerror = 'Ha ocurrido un error en la pronunciación, vuelve a intentarlo';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload10(DOCUMENT_ID10, datasource10);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutputerror)
            .reprompt(speakOutputerror)
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};

const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        Descripcion,
        lugaresturisticosparis,
        trajetipicointentparis,
        comidatipicaparis,
        personajesobresalientesparisintent,
        musicaparis,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();