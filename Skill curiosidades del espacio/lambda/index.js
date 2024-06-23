const Alexa = require('ask-sdk-core');

const spaceFacts = {
    'en': [
        'A day on Venus is longer than a year on Venus.',
        'There are more stars in the universe than grains of sand on all the beaches on Earth.',
        'Neutron stars are so dense that a sugar-cube-sized amount of neutron-star material would weigh more than all of humanity.',
        'The Sun makes up 99.86% of the mass in the solar system.',
        'There may be a giant diamond in space named Lucy.',
        'Jupiter’s moon Europa has an ocean under its icy crust that might harbor life.',
        'A year on Mercury consists of less than 90 days.',
        'The Milky Way galaxy will collide with the Andromeda Galaxy in about 4.5 billion years.',
        'One million Earths could fit inside the Sun.',
        'Saturn’s rings are made of ice and rock.',
        'The temperature on the surface of Mars can drop to -125 degrees Celsius.',
        'A day on Mars is just over 24 hours long.',
        'There are more volcanoes on Venus than on any other planet in the solar system.',
        'The largest volcano in the solar system is on Mars. It’s called Olympus Mons.',
        'Venus is the hottest planet in our solar system.',
        'There is water ice on the Moon.',
        'The tallest mountain in the solar system is on Mars.',
        'The Great Red Spot on Jupiter is a giant storm that has been raging for hundreds of years.',
        'The closest star to Earth, Proxima Centauri, is 4.24 light-years away.',
        'Uranus rotates on its side.',
        'The universe is approximately 13.8 billion years old.',
        'Pluto is smaller than Earth’s Moon.',
        'Venus spins in the opposite direction to most planets.',
        'The Sun is about halfway through its life cycle.',
        'A full NASA space suit costs $12,000,000.',
        'The largest known asteroid is Ceres, which is also classified as a dwarf planet.',
        'Mars has the largest dust storms in the solar system.',
        'A day on Saturn is only about 10.7 hours long.',
        'There are more than 200 moons in our solar system.',
        'The Hubble Space Telescope has made over 1.4 million observations since its launch.',
        'The temperature in space is approximately -270.45 degrees Celsius.',
        'Black holes can slow down time due to their immense gravitational pull.',
        'The International Space Station orbits Earth approximately every 90 minutes.',
        'There is a planet called HD 189733b where it rains glass sideways.',
        'The surface area of Russia is larger than that of Pluto.'
    ],
    'es': [
        'Un día en Venus es más largo que un año en Venus.',
        'Hay más estrellas en el universo que granos de arena en todas las playas de la Tierra.',
        'Las estrellas de neutrones son tan densas que una cantidad del tamaño de un terrón de azúcar de material de estrella de neutrones pesaría más que toda la humanidad.',
        'El Sol constituye el 99,86% de la masa en el sistema solar.',
        'Puede haber un diamante gigante en el espacio llamado Lucy.',
        'La luna Europa de Júpiter tiene un océano bajo su corteza helada que podría albergar vida.',
        'Un año en Mercurio consiste en menos de 90 días.',
        'La galaxia Vía Láctea colisionará con la galaxia Andrómeda en unos 4.5 mil millones de años.',
        'Un millón de Tierras podrían caber dentro del Sol.',
        'Los anillos de Saturno están hechos de hielo y roca.',
        'La temperatura en la superficie de Marte puede bajar a -125 grados Celsius.',
        'Un día en Marte dura poco más de 24 horas.',
        'Hay más volcanes en Venus que en cualquier otro planeta del sistema solar.',
        'El volcán más grande del sistema solar está en Marte. Se llama Olympus Mons.',
        'Venus es el planeta más caliente de nuestro sistema solar.',
        'Hay hielo de agua en la Luna.',
        'La montaña más alta del sistema solar está en Marte.',
        'La Gran Mancha Roja en Júpiter es una tormenta gigante que ha estado en furia durante cientos de años.',
        'La estrella más cercana a la Tierra, Próxima Centauri, está a 4.24 años luz de distancia.',
        'Urano rota de lado.',
        'El universo tiene aproximadamente 13.8 mil millones de años.',
        'Plutón es más pequeño que la Luna de la Tierra.',
        'Venus gira en la dirección opuesta a la mayoría de los planetas.',
        'El Sol está aproximadamente a la mitad de su ciclo de vida.',
        'Un traje espacial completo de la NASA cuesta $12,000,000.',
        'El asteroide más grande conocido es Ceres, que también está clasificado como un planeta enano.',
        'Marte tiene las tormentas de polvo más grandes del sistema solar.',
        'Un día en Saturno dura solo unas 10.7 horas.',
        'Hay más de 200 lunas en nuestro sistema solar.',
        'El telescopio espacial Hubble ha realizado más de 1.4 millones de observaciones desde su lanzamiento.',
        'La temperatura en el espacio es de aproximadamente -270.45 grados Celsius.',
        'Los agujeros negros pueden ralentizar el tiempo debido a su inmensa atracción gravitacional.',
        'La Estación Espacial Internacional orbita la Tierra aproximadamente cada 90 minutos.',
        'Hay un planeta llamado HD 189733b donde llueve vidrio de lado.',
        'La superficie de Rusia es más grande que la de Plutón.'
    ]
};
const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const locale = handlerInput.requestEnvelope.request.locale;
        const speakOutput = locale.startsWith('es')
            ? '¡Bienvenido a Curiosidades del Espacio! Pide una curiosidad diciendo, "Dime una curiosidad del espacio".'
            : 'Welcome to Space Facts! Ask for a space fact by saying, "Tell me a space fact".';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const GetSpaceFactHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'GetSpaceFactIntent';
    },
    handle(handlerInput) {
        const locale = handlerInput.requestEnvelope.request.locale;
        const facts = spaceFacts[locale.startsWith('es') ? 'es' : 'en'];
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        
        const speakOutput = locale.startsWith('es')
            ? `Aquí tienes una curiosidad del espacio: ${randomFact}. ¿Quieres saber otra curiosidad?`
            : `Here's a space fact for you: ${randomFact}. Do you want to hear another fact?`;

        const repromptOutput = locale.startsWith('es')
            ? '¿Te gustaría escuchar otra curiosidad del espacio?'
            : 'Would you like to hear another space fact?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(repromptOutput)
            .getResponse();
    }
};

const YesIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.YesIntent';
    },
    handle(handlerInput) {
        return GetSpaceFactHandler.handle(handlerInput);
    }
};

const NoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.NoIntent';
    },
    handle(handlerInput) {
        const locale = handlerInput.requestEnvelope.request.locale;
        const speakOutput = locale.startsWith('es')
            ? '¡Adiós!'
            : 'Goodbye!';
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};


const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const locale = handlerInput.requestEnvelope.request.locale;
        const speakOutput = locale.startsWith('es')
            ? 'Puedes pedirme una curiosidad del espacio diciendo, "Dime una curiosidad del espacio".'
            : 'You can ask me for a space fact by saying, "Tell me a space fact".';
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
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
        const locale = handlerInput.requestEnvelope.request.locale;
        const speakOutput = locale.startsWith('es')
            ? '¡Adiós!'
            : 'Goodbye!';
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const locale = handlerInput.requestEnvelope.request.locale;
        const speakOutput = locale.startsWith('es')
            ? 'Lo siento, no sé eso. Puedes pedirme una curiosidad del espacio diciendo, "Dime una curiosidad del espacio".'
            : 'Sorry, I don\'t know that. You can ask me for a space fact by saying, "Tell me a space fact".';
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const locale = handlerInput.requestEnvelope.request.locale;
        const speakOutput = locale.startsWith('es')
            ? `Acabas de activar ${intentName}`
            : `You just triggered ${intentName}`;
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`Error handled: ${error.message}`);
        const locale = handlerInput.requestEnvelope.request.locale;
        const speakOutput = locale.startsWith('es')
            ? 'Lo siento, tuve problemas para hacer lo que pediste. Por favor, inténtalo de nuevo.'
            : 'Sorry, I had trouble doing what you asked. Please try again.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        GetSpaceFactHandler,
        YesIntentHandler,
        NoIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler
    )
    .addErrorHandlers(
        ErrorHandler
    )
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();
