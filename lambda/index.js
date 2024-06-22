/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Bienvenido a la Calculadora UTHH de Vite.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('Por favor, dime qué operación te gustaría hacer.')
            .getResponse();
    }
};

const SumaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SumaIntent';
    },
    handle(handlerInput) {
        const cantidad1 = handlerInput.requestEnvelope.request.intent.slots.uno.value;
        const cantidad2 = handlerInput.requestEnvelope.request.intent.slots.dos.value;
        const numero1 = Number(cantidad1);
        const numero2 = Number(cantidad2);

        if (isNaN(numero1) || isNaN(numero2)) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
                .reprompt('Dime dos números que te gustaría sumar.')
                .getResponse();
        }

        const resultado = numero1 + numero2;
        const speakOutput = `UTHH dice, el resultado de la suma de ${numero1} más ${numero2} es igual a ${resultado}.`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const RestaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'RestaIntent';
    },
    handle(handlerInput) {
        const cantidad1 = handlerInput.requestEnvelope.request.intent.slots.uno.value;
        const cantidad2 = handlerInput.requestEnvelope.request.intent.slots.dos.value;
        const numero1 = Number(cantidad1);
        const numero2 = Number(cantidad2);

        if (isNaN(numero1) || isNaN(numero2)) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
                .reprompt('Dime dos números que te gustaría restar.')
                .getResponse();
        }

        const resultado = numero1 - numero2;
        const speakOutput = `UTHH dice, el resultado de la resta de ${numero1} menos ${numero2} es igual a ${resultado}.`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const MultiplicacionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MultiplicacionIntent';
    },
    handle(handlerInput) {
        const cantidad1 = handlerInput.requestEnvelope.request.intent.slots.uno.value;
        const cantidad2 = handlerInput.requestEnvelope.request.intent.slots.dos.value;
        const numero1 = Number(cantidad1);
        const numero2 = Number(cantidad2);

        if (isNaN(numero1) || isNaN(numero2)) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
                .reprompt('Dime dos números que te gustaría multiplicar.')
                .getResponse();
        }

        const resultado = numero1 * numero2;
        const speakOutput = `UTHH dice, el resultado de la multiplicación de ${numero1} por ${numero2} es igual a ${resultado}.`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const DivisionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'DivisionIntent';
    },
    handle(handlerInput) {
        const cantidad1 = handlerInput.requestEnvelope.request.intent.slots.uno.value;
        const cantidad2 = handlerInput.requestEnvelope.request.intent.slots.dos.value;
        const numero1 = Number(cantidad1);
        const numero2 = Number(cantidad2);

        if (isNaN(numero1) || isNaN(numero2)) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
                .reprompt('Dime dos números que te gustaría dividir.')
                .getResponse();
        }

        if (numero2 === 0) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no se puede dividir por cero. Por favor, inténtalo de nuevo.')
                .reprompt('Dime dos números que te gustaría dividir.')
                .getResponse();
        }

        const resultado = numero1 / numero2;
        const speakOutput = `UTHH dice, el resultado de la división de ${numero1} entre ${numero2} es igual a ${resultado}.`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};


const PorcentajeIntentHandler = {
    canHandle(handlerInput) {
        return (
            Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
            Alexa.getIntentName(handlerInput.requestEnvelope) === 'PorcentajeIntent'
        );
    },
    handle(handlerInput) {
        const cantidad = handlerInput.requestEnvelope.request.intent.slots.numero.value;
        const porcentaje = handlerInput.requestEnvelope.request.intent.slots.porcentaje.value;

        // Convertir los valores de texto a números
        const numero = parseFloat(cantidad);
        const porcentajeNum = parseFloat(porcentaje);

        // Verificar si los valores son números válidos
        if (isNaN(numero) || isNaN(porcentajeNum)) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
                .reprompt('Dime un número y el porcentaje que deseas calcular.')
                .getResponse();
        }

        // Calcular el porcentaje
        const resultado = (numero * porcentajeNum) / 100;

        // Construir la respuesta hablada
        const speakOutput = `UTHH dice, ${porcentajeNum}% de ${numero} es igual a ${resultado}.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};



const PotenciaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PotenciaIntent';
    },
    handle(handlerInput) {
        const base = handlerInput.requestEnvelope.request.intent.slots.base.value;
        const exponente = handlerInput.requestEnvelope.request.intent.slots.exponente.value;
        const baseNumero = Number(base);
        const exponenteNumero = Number(exponente);

        if (isNaN(baseNumero) || isNaN(exponenteNumero)) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
                .reprompt('Dime la base y el exponente para calcular la potencia.')
                .getResponse();
        }

        const resultado = Math.pow(baseNumero, exponenteNumero);
        const speakOutput = `UTHH dice, ${baseNumero} elevado a la potencia de ${exponenteNumero} es igual a ${resultado}.`;
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
        const speakOutput = 'You can say hello to me! How can I help?';

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
        const speakOutput = 'Goodbye!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Sorry, I don\'t know about that. Please try again.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
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
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
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
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
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
      
        SumaIntentHandler,
        RestaIntentHandler,
        MultiplicacionIntentHandler,
        DivisionIntentHandler,
        PorcentajeIntentHandler,
        PotenciaIntentHandler,
        
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();
