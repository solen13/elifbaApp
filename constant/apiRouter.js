const apiRouter=[
  {
    name:'harfler',
    color:'red',
    route:'hafler',
    path:'/harfler/elifba',
    subTitle:[
      {
        name:'Harfler',
        path:'/harfler/elifba'
      },
      {
        name:'Harflerin yazımı',
        path: '/harfler/harfOkunus'
      }
    ]

  },
  {
    name:'Harflarin okunuşları',
    color:'pink',
    route:'harf-okunus',
    path:'/harf-okunus/ustun',
    subTitle: [
      {
        name:'Üstün',
        path:'/harf-okunus/ustun'
      },
      {
        name:'esre',
        path:'/harf-okunus/esre'
      },
      {
        name:'ötre',
        path:'/harf-okunus/otre'
      },
      {
        name:'cezim(sükün)',
        path:'/harf-okunus/cezim'
      },
      {
        name:'şedde',
        path:'/harf-okunus/sedde'
      },
      {
        name:'iki üstün',
        path:'/harf-okunus/ikiustun'
      },
      {
        name:'iki esre',
        path:'/harf-okunus/ikiesre'
      },
      {
        name:'iki ötre',
        path:'/harf-okunus/ikiotre'
      },
      {
        name:'med-elif',
        path:'/harf-okunus/medelif'
      },
      {
        name:'med-vav',
        path:'/harf-okunus/medvav'
      },
      {
        name:'med-ye',
        path:'/harf-okunus/medye'
      },
    ]

  },


  {
    name:'oyun',
    color:'blue',
    route:'game',
    path:'/game/quiz',
    subTitle: [
      {
        name:'quiz',
        path:'/game/quiz'
      }
      ]

  }
  /*
  {
    name:'Bazı durumlar',
    color: 'teal',
    path:'/durumlar/medye',
    subTitle:[
      {
        name:'Elf Lam  Takısını Okunuşu',
        path:'/durumlar/medye'
      },
      {
        name:'Zamir ve Okunşu',
        path:'/durumlar/medye'
      },
      {
        name:'Med-Kasır kelimler',
        path:'/durumlar/medye'
      },
      {
        name:'Okunmayan Elif',
        path:'/durumlar/medye'
      },
      {
        name:'huruf-u Mukttaa',
        path:'/durumlar/medye'
      },

    ]

  },
  {
    name:'Tecvid',
    color: 'deep-orange',
    path: '/tecvid/medye',
    subTitle: [
      {name:'Medler Kurallar',
        path:'/tecvid/medye'
      },
      {name:'Tenvin kurallar',
        path:'/tecvid/medye'
      },
      {name:'Sakin Mim Kurallar',
        path:'/tecvid/medye'
      },
      {name:'Diğer Konular',
        path:'/tecvid/medye'
      },
      {name:'Bazı İşaetler',
        path:'/tecvid/medye'
      },
      {name:'Secavend işaretler',
        path:'/tecvid/medye'
      }
    ]

  },

   */
]
export default apiRouter
