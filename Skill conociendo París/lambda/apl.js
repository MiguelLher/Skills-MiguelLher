const datasource = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://th.bing.com/th/id/R.ce84d51225ca2117e9500b25f018896d?rik=LMYXJYx7W9owjQ&riu=http%3a%2f%2fdiarium.usal.es%2fvanesaalonso%2ffiles%2f2014%2f10%2ffotos-de-la-torre-de-paris-francia.jpg&ehk=T%2f8NYmY7JjLM7qIookUNPWjqe13m32aKF004jAiHmTg%3d&risl=&pid=ImgRaw&r=0",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "Bienvenido a conoce sobre Paris Francia skill"
                }
            },
            "logoUrl": "https://mx.hola.com/imagenes/viajes/20200325164049/torre-eiffel-paris-maravillas-del-mundo-desde-mi-pantalla/0-803-199/torre-eiffel-iliminada-paris-a.jpg",
            "hintText": "Prueba decir, \"Dame información de parís\""
        }
    }
};

const createDirectivePayload = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};


const datasource2 = {
    "videoPlayerTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://mx.hola.com/imagenes/viajes/20200325164049/torre-eiffel-paris-maravillas-del-mundo-desde-mi-pantalla/0-803-199/torre-eiffel-iliminada-paris-a.jpg",
            "displayFullscreen": false,
            "headerTitle": "PARÍS - FRANCIA",
            "headerSubtitle": "",
            "logoUrl": "https://mx.hola.com/imagenes/viajes/20200325164049/torre-eiffel-paris-maravillas-del-mundo-desde-mi-pantalla/0-803-199/torre-eiffel-iliminada-paris-a.jpg",
            "videoControlType": "skip",
            "videoSources": [
                "https://kidiqcepekflwjrvlhcy.supabase.co/storage/v1/object/public/imagen%20video/Paris__The_last_drone_aerials_(1).mp4"
            ],
            "sliderType": "determinate"
        }
    }
};

const createDirectivePayload2 = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};


const datasource3 = {
    "cardsLayoutTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://th.bing.com/th/id/R.972ff29c2a15472453aadf925da8ec6a?rik=o1pWnl%2fs3hBNTQ&pid=ImgRaw&r=0",
            "headerTitle": "Lugares turísticos - Sites touristiques",
            "headerSubtitle": "",
            "headerAttributionImage": "https://mx.hola.com/imagenes/viajes/20200325164049/torre-eiffel-paris-maravillas-del-mundo-desde-mi-pantalla/0-803-199/torre-eiffel-iliminada-paris-a.jpg",
            "primaryText": "Lugares famosos y turisticos de parís",
            "listItems": [
                {
                    "primaryText": "La Torre Eiffel",
                    "thumbnailImage": "https://th.bing.com/th/id/R.ce7ba55bc5add3304b02ff8c58e2dfb2?rik=pFikGB3hLw%2fSDw&pid=ImgRaw&r=0"
                },
                {
                    "primaryText": "El Museo del Louvre",
                    "thumbnailImage": "https://www.101viajes.com/sites/default/files/museo-louvre.jpg"
                },
                {
                    "primaryText": "La Catedral de Notre-Dame",
                    "thumbnailImage": "https://th.bing.com/th/id/R.a071511473593560c2971c0ada7623b7?rik=YiCnNNA89kEkEw&pid=ImgRaw&r=0"
                },
                {
                    "primaryText": "El Arco de Triunfo",
                    "thumbnailImage": "https://th.bing.com/th/id/R.4dfd9b5d86a0865647cd283be5c0170e?rik=fSUjobVGIydz1w&pid=ImgRaw&r=0"
                },
                {
                    "primaryText": "Los Campos Elíseos",
                    "thumbnailImage": "https://th.bing.com/th/id/R.57f7ba51b1334ec030b777676fcee299?rik=MqPPX3DBluA5ZQ&riu=http%3a%2f%2fblogs.publico.es%2felojopublico%2ffiles%2f2010%2f05%2fparis.jpg&ehk=JHBf6jgBX3qhLwKzEOgzVbmrpsCJAG6XIjxMpPnADRg%3d&risl=&pid=ImgRaw&r=0"
                },
                {
                    "primaryText": "El Museo de Orsay",
                    "thumbnailImage": "https://th.bing.com/th/id/R.e29ee18e3284c0c907620a01ed1fc4f6?rik=xdYyzgEJC9GVxw&pid=ImgRaw&r=0"
                }
            ]
        }
    }
};

const createDirectivePayload3 = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

const datasource4 = {
    "cardsLayoutTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://4.bp.blogspot.com/-BOljT-tqgaQ/Vq_9amTN9NI/AAAAAAAASH8/m7KRsJOWEsk/s1600/Paris%2B3.gif",
            "headerTitle": "",
            "headerSubtitle": "",
            "headerAttributionImage": "https://mx.hola.com/imagenes/viajes/20200325164049/torre-eiffel-paris-maravillas-del-mundo-desde-mi-pantalla/0-803-199/torre-eiffel-iliminada-paris-a.jpg",
            "primaryText": "Comidas tipicas de parís - spécialités culinaires parisiennes",
            "listItems": [
                {
                    "primaryText": "Croissant",
                    "secondaryText": "Un famoso bollo de masa hojaldrada, a menudo consumido en el desayuno.",
                    "thumbnailImage": "data:image/jpeg;base64,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"
                },
                {
                    "primaryText": "Baguette",
                    "secondaryText": "El icónico pan largo y delgado, ideal para acompañar comidas o como base de bocadillos.",
                    "thumbnailImage": "https://fthmb.tqn.com/rsla6Q8gz21EZl7__jch27bbWcI=/2550x1694/filters:fill(auto,1)/baguette-2500-56a20ec75f9b58b7d0c61ca9.JPG"
                },
                {
                    "primaryText": "Soupe à l'oignon",
                    "secondaryText": "Sopa de cebolla gratinada con queso y pan crujiente, popular en las brasseries parisinas.",
                    "thumbnailImage": "https://cdn.tasteatlas.com/Images/Dishes/6de2fb59207b4e54958663833c313b20.jpg"
                },
                {
                    "primaryText": "Coq au vin",
                    "secondaryText": "Estofado de pollo cocinado lentamente en vino tinto con champiñones, cebollas y ajo.",
                    "thumbnailImage": "https://th.bing.com/th/id/OIP.YiHShJ70WRWahq5PNEki3gHaE8?rs=1&pid=ImgDetMain"
                },
                {
                    "primaryText": "Escargots de Bourgogne",
                    "secondaryText": "Caracoles de Borgoña preparados con mantequilla, ajo y perejil, un plato clásico de la cocina francesa.",
                    "thumbnailImage": "https://th.bing.com/th/id/OIP.nqa8exCFnExtCCV0q0C7CQHaE8?rs=1&pid=ImgDetMain"
                },
                {
                    "primaryText": "Crêpes",
                    "secondaryText": "Delgadas y suaves crepes, que pueden ser dulces (con Nutella, frutas, etc.) o saladas (con queso, jamón, etc.).",
                    "thumbnailImage": "https://th.bing.com/th/id/OIP.GL3W6PpLVtlWGErZ2zy1CQHaE7?rs=1&pid=ImgDetMain"
                }
            ]
        }
    }
};

const createDirectivePayload4 = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

const datasource5 = {
    "gridListData": {
        "type": "object",
        "objectId": "gridListSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/gridlist/GridListBackground_Dark.png",
                    "size": "small",
                    "widthPixels": 0,
                    "heightPixels": 0
                },
                {
                    "url": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/gridlist/GridListBackground_Dark.png",
                    "size": "large",
                    "widthPixels": 0,
                    "heightPixels": 0
                }
            ]
        },
        "title": "Plant Stores Near Me",
        "listItems": [
            {
                "primaryText": "La marinière",
                "imageSource": "https://th.bing.com/th/id/OIP.23m7ELnmswyfJa4Hjj7IHwHaLp?rs=1&pid=ImgDetMain"
            },
            {
                "primaryText": "Boina",
                "imageSource": "https://th.bing.com/th/id/R.11f9f513c1756081cc5de497c9685ac5?rik=Il6a5jsnMHiB6g&pid=ImgRaw&r=0"
            },
            {
                "primaryText": "Trench coat",
                "imageSource": "https://th.bing.com/th/id/OIP.ul5EGwtffW-84dnCQta0MgHaJ3?rs=1&pid=ImgDetMain"
            },
            {
                "primaryText": "Chic parisino",
                "imageSource": "https://i.blogs.es/810c41/look-parisino-verano-8-/1366_2000.jpg"
            },
            {
                "primaryText": "Petit Robe Noire",
                "imageSource": "https://th.bing.com/th/id/R.481af9a760653755a6980fa818a6ce9f?rik=HU1iRsKgegiEqA&riu=http%3a%2f%2frobenoire.net%2fwp-content%2fuploads%2f2015%2f02%2fguerlain-la-petite-robe-noir.jpg&ehk=1DfzLakeYhGpGBofa9aBROLq7jH6s53dHj76A6iwq6g%3d&risl=&pid=ImgRaw&r=0"
            },
            {
                "primaryText": "Ropa Deportiva Elegante (Athleisure)",
                "imageSource": "https://bellezaparamujeres.com/wp-content/uploads/2022/07/athleisure.jpg"
            }
        ],
        "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/logo/logo-modern-botanical-white.png"
    }
};

const createDirectivePayload5 = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

const datasource6 = {
    "imageListData": {
        "type": "object",
        "objectId": "imageListSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "data:image/jpeg;base64,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",
                    "size": "large"
                }
            ]
        },
        "title": "Personajes sobresalientes",
        "listItems": [
            {
                "primaryText": "Victor Hugo",
                "imageSource": "https://th.bing.com/th/id/R.6491902bcedf5b69cb693616823f49d9?rik=HCfq3%2f1EbIczRQ&riu=http%3a%2f%2fwww.guiapracticaparis.com%2fimagenes%2fcasa-victor-hugo.jpg&ehk=yFEPHi66z2%2f6212JPiW01BAjmU6ytdzIZ1NfHkBNqUE%3d&risl=&pid=ImgRaw&r=0"
            },
            {
                "primaryText": "Édith Piaf",
                "imageSource": "data:image/jpeg;base64,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"
            },
            {
                "primaryText": "Coco Chanel",
                "imageSource": "https://s3.amazonaws.com/iomedia-s3/media/celebrities/12797/products/wide1__L.jpg"
            },
            {
                "primaryText": "Claude Monet",
                "imageSource": "https://i.pinimg.com/736x/1f/f7/01/1ff7013e837bd8cedcb34bfc43960ebc--claude-monet.jpg"
            },
            {
                "primaryText": "Napoleón Bonaparte",
                "imageSource": "https://th.bing.com/th/id/OIP.O34T9QcBP9zD3ZrAiJSwjwHaJ4?rs=1&pid=ImgDetMain"
            },
            {
                "primaryText": "Marie Curie",
                "imageSource": "https://gosciencegirls.com/wp-content/uploads/2020/12/Marie_Curie.jpg"
            }
        ],
        "logoUrl": "https://mx.hola.com/imagenes/viajes/20200325164049/torre-eiffel-paris-maravillas-del-mundo-desde-mi-pantalla/0-803-199/torre-eiffel-iliminada-paris-a.jpg",
        "hintText": ""
    }
};

const createDirectivePayload6 = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};


const datasource7 = {
    "audioPlayerTemplateData": {
        "type": "object",
        "properties": {
            "audioControlType": "jump30",
            "audioSources": [
                "https://kidiqcepekflwjrvlhcy.supabase.co/storage/v1/object/public/imagen%20video/ytmp3free.cc_la_vie_en_rose_youtubemp3free.org.mp3"
            ],
            "backgroundImage": "https://th.bing.com/th/id/R.9d8132ffa9ab9479ded8c6333db1f7a1?rik=jRv0E%2bC21K5OlQ&riu=http%3a%2f%2fwww.viajeraexpress.es%2fwp-content%2fuploads%2f2020%2f02%2fIMG_20200125_202348-scaled.jpg&ehk=Ms50uaRhswJ%2bcQSfV2twIpeNLFgJ2%2bkh1XdoyP6MOgg%3d&risl=&pid=ImgRaw&r=0",
            "coverImageSource": "https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/2760739/5821260/PDX10542AA__46462.1625558071.jpg?c=2",
            "headerTitle": "Musica en parís",
            "logoUrl": "https://mx.hola.com/imagenes/viajes/20200325164049/torre-eiffel-paris-maravillas-del-mundo-desde-mi-pantalla/0-803-199/torre-eiffel-iliminada-paris-a.jpg",
            "primaryText": "La vie en rose",
            "secondaryText": "Edith piaf",
            "sliderType": "determinate"
        }
    }
};

const createDirectivePayload7 = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

const datasource8 = {
    "textListData": {
        "type": "object",
        "objectId": "textListSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://th.bing.com/th/id/R.2c4c078f6df8a12cecde3bbfbfe2bef5?rik=t4R4XdiYpbEFlg&riu=http%3a%2f%2felboqueronviajero.com%2fwp-content%2fuploads%2f2015%2f07%2fTorre-Eiffel-de-Par%c3%ads-de-noche-en-panor%c3%a1mica.jpg&ehk=HdcOveGSamAX5wF12LvYzp1QuO4akFYEPAp8q6aZlLI%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
                    "size": "large"
                }
            ]
        },
        "title": "Ayuda",
        "listItems": [
            {
                "primaryText": "para cancelar dí \"Cancelar\""
            },
            {
                "primaryText": "para pedir ayuda dí \"necesito ayuda\""
            },
            {
                "primaryText": "para salir dí \"salir\""
            },
            {
                "primaryText": "Para ver un video de París dí \"cual es la descripcion de esta ciudad\""
            },
            {
                "primaryText": "para ver lugares de parís dí \"lugares turísticos\""
            },
            {
                "primaryText": "para conocer las comidas típicas dí \"dime las comidas tipicas\""
            },
            {
                "primaryText": "Para conocer vestimenta de parís dí \"dime los trajes típicos de parís\""
            },
            {
                "primaryText": "Para conocer personajes reconocidos de parís dí \"personajes sobresalientes de parís\""
            },
            {
                "primaryText": "Para escuchar música de parís dí \"música de parís\""
            }
        ],
        "logoUrl": "https://mx.hola.com/imagenes/viajes/20200325164049/torre-eiffel-paris-maravillas-del-mundo-desde-mi-pantalla/0-803-199/torre-eiffel-iliminada-paris-a.jpg"
    }
};

const createDirectivePayload8 = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
   return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

const datasource9 = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://wallpaperaccess.com/full/1721411.jpg",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "Hasta pronto - À bientôt"
                }
            },
            "logoUrl": "https://mx.hola.com/imagenes/viajes/20200325164049/torre-eiffel-paris-maravillas-del-mundo-desde-mi-pantalla/0-803-199/torre-eiffel-iliminada-paris-a.jpg",
            "hintText": ""
        }
    }
};

const createDirectivePayload9 = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
   return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

const datasource10 = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://wallpaperset.com/w/full/2/2/9/207342.jpg",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "Lo siento, ha ocurrido un problema en la pronunciación. Por favor, intentalo de nuevo."
                }
            },
            "logoUrl": "https://mx.hola.com/imagenes/viajes/20200325164049/torre-eiffel-paris-maravillas-del-mundo-desde-mi-pantalla/0-803-199/torre-eiffel-iliminada-paris-a.jpg",
            "hintText": ""
        }
    }
};

const createDirectivePayload10 = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

module.exports = {datasource,createDirectivePayload,  datasource2, createDirectivePayload2, datasource3 ,createDirectivePayload3, datasource4 ,createDirectivePayload4, datasource5, createDirectivePayload5, datasource6, createDirectivePayload6, datasource7, createDirectivePayload7, datasource8, createDirectivePayload8, datasource9, createDirectivePayload9, datasource10, createDirectivePayload10};