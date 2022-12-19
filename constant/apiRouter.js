const apiRouter=[
  {
    name:'harfler',
    color:'red',
    path:'/hafler',
    subTitle:[
      {
        name:'Harfler',
        path:'/hafler/elifba'
      },
      {
        name:'Harflerin yazımı',
        path: '/hafler/harfOkunus'

      }
    ]

  },
  {
    name:'Haflarin okunuşları',
    color:'pink',
    path:'/harf-okunus',
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
    name:'Bazı durumlar',
    color: 'teal',
    path:'/durumlar',
    subTitle:[
      {
        name:'Elf Lam  Takısını Okunuşu',
        path:'/durumlar/letters'
      },
      {
        name:'Zamir ve Okunşu',
        path:'/durumlar/letters'
      },
      {
        name:'Med-Kasır kelimler',
        path:'/durumlar/letters'
      },
      {
        name:'Okunmayan Elif',
        path:'/durumlar/letters'
      },
      {
        name:'huruf-u Mukttaa',
        path:'/durumlar/letters'
      },

    ]

  },
  {
    name:'Tecvid',
    color: 'deep-orange',
    path: '/tecvid',
    subTitle: [
      {name:'Medler Kurallar',
        path:'/durumlar/letters'
      },
      {name:'Tenvin kurallar',
        path:'/durumlar/letters'
      },
      {name:'Sakin Mim Kurallar',
        path:'/durumlar/letters'
      },
      {name:'Diğer Konular',
        path:'/durumlar/letters'
      },
      {name:'Bazı İşaetler',
        path:'/durumlar/letters'
      },
      {name:'Secavend işaretler',
        path:'/durumlar/letters'}
    ]

  },
]
export default apiRouter
