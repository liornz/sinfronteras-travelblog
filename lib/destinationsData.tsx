type videoData = {
  youtubeId: string;
  imagePath: string;
  imgAlt: string;
  text: { title: string; subtitle: string };
};

const DestinationsData = (userLang: string): videoData[] => {
  const textMyanmar =
    userLang === 'es-AR'
      ? {
          title: 'Myanmar, el país de las mil pagodas',
          subtitle: 'Una breve introducción visual',
        }
      : {
          title: 'Myanmar - The Land of a Thousend Pagodas',
          subtitle: 'A short visual introduction',
        };

  const textYangon1 =
    userLang === 'es-AR'
      ? {
          title: 'Yangon - Myanmar - Día 1',
          subtitle: 'Primera parte de la visita a Yangon',
        }
      : {
          title: 'Yangon - Myanmar - Day 1',
          subtitle: 'The first part of the visit to Yangon',
        };
  const textYangon2 =
    userLang === 'es-AR'
      ? {
          title: 'Yangon - Myanmar - Día 2',
          subtitle: 'Segunda parte de la visita a Yangon',
        }
      : {
          title: 'Yangon - Myanmar - Day 2',
          subtitle: 'The second part of the visit to Yangon',
        };
  const textYangon3 =
    userLang === 'es-AR'
      ? {
          title: 'Yangon - Myanmar - Día 3',
          subtitle: 'Tercer parte de la visita a Yangon',
        }
      : {
          title: 'Yangon - Myanmar - Day 3',
          subtitle: 'The third part of the visit to Yangon',
        };
  const textKyaiktiyo =
    userLang === 'es-AR'
      ? {
          title: 'Kyaiktiyo - Myanmar',
          subtitle: 'La famosa piedra dorada',
        }
      : {
          title: 'Kyaiktiyo - Myanmar',
          subtitle: 'The famous Golden-Rock',
        };
  const thankYou =
    userLang === 'es-AR'
      ? {
          title: 'Muchas Gracias!',
          subtitle: 'Gracias a mi 100 nuevos suscriptores',
        }
      : {
          title: 'Thank you!',
          subtitle: 'To my first 100 subscribers',
        };
  const textHpaan =
    userLang === 'es-AR'
      ? {
          title: 'Hpa-An - Myanmar',
          subtitle: 'Entre montañas y arrozales infinitos',
        }
      : {
          title: 'Hpa-An - Myanmar',
          subtitle: 'Amidst mountains and infinite rice fields',
        };
  const textInleLake =
    userLang === 'es-AR'
      ? {
          title: 'Inle-Lake - Myanmar',
          subtitle: 'Un lugar entre jardines y ancestrales culturas',
        }
      : {
          title: 'Inle-Lake - Myanmar',
          subtitle: 'A place within gardens and ancestral cultures',
        };
  const textHsipaw =
    userLang === 'es-AR'
      ? {
          title: 'Hsipaw - Myanmar',
          subtitle: 'Una travesía por el pasado y presente de Hsipaw',
        }
      : {
          title: 'Hsipaw - Myanmar',
          subtitle: 'A journey to the past and present of Hsipaw',
        };
  const textMandalay =
    userLang === 'es-AR'
      ? {
          title: 'Mandalay - Myanmar',
          subtitle: 'Una ciudad de tesoros incalculables',
        }
      : {
          title: 'Mandalay - Myanmar',
          subtitle: 'A city of incalculable treasures',
        };
  const textBagan =
    userLang === 'es-AR'
      ? {
          title: 'Bagan - Myanmar',
          subtitle: 'Un lugar para desplegar tus alas',
        }
      : {
          title: 'Bagan - Myanmar',
          subtitle: 'A place to spread your wings',
        };
  const textCambodia =
    userLang === 'es-AR'
      ? {
          title: 'Angkor - Cambodia',
          subtitle: 'Descubriendo los tesoros del imperio jemer',
        }
      : {
          title: 'Angkor - Cambodia',
          subtitle: 'Discovering the treasures of the Khmer Empire',
        };
  const textBangkok =
    userLang === 'es-AR'
      ? {
          title: 'Bangkok - Thailandia',
          subtitle: 'Bangkok y sus tesoros culturales',
        }
      : {
          title: 'Bangkok - Thailand',
          subtitle: 'Bangkok and its cultural treasures',
        };
  const textAyutthaya =
    userLang === 'es-AR'
      ? {
          title: 'Ayutthaya - Thailandia',
          subtitle: 'El antiguo reino de Siam',
        }
      : {
          title: 'Ayutthaya - Thailand',
          subtitle: 'The ancient kingdom of Siam',
        };
  const textEnp =
    userLang === 'es-AR'
      ? {
          title: 'Elefantes in Thailandia',
          subtitle: 'Una historia diferente',
        }
      : {
          title: 'Elephants in Thailand',
          subtitle: 'A different perspective',
        };
  const textUdonThani =
    userLang === 'es-AR'
      ? {
          title: 'Udon Thani - Thailandia',
          subtitle: 'El lago de lotos rosados',
        }
      : {
          title: 'Udon Thani - Thailand',
          subtitle: 'The red lotus lake',
        };
  return [
    {
      youtubeId: 'xVDOKC-luF4',
      imagePath: '/images/portada/portada-myanmar.jpg',
      imgAlt: 'Youtube Poster - Myanmar',
      text: textMyanmar,
    },
    {
      youtubeId: 'a0IlZf8AFuQ',
      imagePath: '/images/portada/portada-yangon-dia1.jpg',
      imgAlt: 'Youtube Poster - Yangon Day 1',
      text: textYangon1,
    },
    {
      youtubeId: 'aD3fMmGrJZM',
      imagePath: '/images/portada/portada-yangon-dia2.jpg',
      imgAlt: 'Youtube Poster - Yangon Day 2',
      text: textYangon2,
    },
    {
      youtubeId: 'gq6-7W4M2Ts',
      imagePath: '/images/portada/portada-yangon-dia3.jpg',
      imgAlt: 'Youtube Poster - Yangon Day 3',
      text: textYangon3,
    },
    {
      youtubeId: 'bb7f-k7qXC8',
      imagePath: '/images/portada/portada-kyaiktiyo.jpg',
      imgAlt: 'Youtube Poster - Kyaiktiyo',
      text: textKyaiktiyo,
    },
    {
      youtubeId: 'azhZaFevYlI',
      imagePath: '/images/portada/portada-100-suscriptores.jpg',
      imgAlt: 'Youtube Poster - 100 subscribers',
      text: thankYou,
    },
    {
      youtubeId: '15V5hY2FMWU',
      imagePath: '/images/portada/portada-hpa-an.jpg',
      imgAlt: 'Youtube Poster - Hpa-An - Myanmar',
      text: textHpaan,
    },
    {
      youtubeId: '-ZfPK_O46Is',
      imagePath: '/images/portada/portada-lago-inle.jpg',
      imgAlt: 'Youtube Poster - Inle Lake - Myanmar',
      text: textInleLake,
    },
    {
      youtubeId: 'kKmFf5JXYeU',
      imagePath: '/images/portada/portada-hsipaw.jpg',
      imgAlt: 'Youtube Poster - Hsipaw - Myanmar',
      text: textHsipaw,
    },
    {
      youtubeId: 'BOOfssePCl4',
      imagePath: '/images/portada/portada-mandalay.jpg',
      imgAlt: 'Youtube Poster - Mandalay - Myanmar',
      text: textMandalay,
    },
    {
      youtubeId: 'ZK5hcTCBBGY',
      imagePath: '/images/portada/portada-bagan.jpg',
      imgAlt: 'Youtube Poster - Bagan - Myanmar',
      text: textBagan,
    },
    {
      youtubeId: 'BY5fBm58F-4',
      imagePath: '/images/portada/portada-cambodia.jpg',
      imgAlt: 'Youtube Poster - Angkor - Cambodia',
      text: textCambodia,
    },
    {
      youtubeId: 'nWSQX3Gk7eQ',
      imagePath: '/images/portada/portada-bangkok.jpg',
      imgAlt: 'Youtube Poster - Bangkok - Thailand',
      text: textBangkok,
    },
    {
      youtubeId: 'fJa5yhFTWmY',
      imagePath: '/images/portada/portada-ayutthaya.jpg',
      imgAlt: 'Youtube Poster - Ayutthaya - Thailand',
      text: textAyutthaya,
    },
    {
      youtubeId: 'hmvSukajIes',
      imagePath: '/images/portada/portada-enp.jpg',
      imgAlt: 'Youtube Poster - Elephant Nature Park - Thailand',
      text: textEnp,
    },
    {
      youtubeId: 'qAqDTBgtfks',
      imagePath: '/images/portada/portada-udon-thani.jpg',
      imgAlt: 'Youtube Poster - Udon Thani - Thailand',
      text: textUdonThani,
    },
  ];
};

export default DestinationsData;
