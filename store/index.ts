export const state = () => ({
  itemData: [
    {
      name: "さぬきうどんの亀城庵 讃岐うどん",
      price: 1980,
      url: "https://www.amazon.co.jp/dp/B001KOEEJ8/ref=cm_sw_r_tw_dp_U_x_l7uREb6NQ7F2Z",
      image_url: "https://images-na.ssl-images-amazon.com/images/I/71uH48NZiML._AC_SL1500_.jpg",
      prefectureId: 37,
      categoryIds: [1],
      featureIds: [1, 3],
    },
    {
      name: "てくてく和三盆クッキー",
      price: 1080,
      url: "https://www.amazon.co.jp/dp/B07RYJY2N9/ref=cm_sw_em_r_mt_dp_U_jhvREbXAQRA49",
      image_url: "https://m.media-amazon.com/images/I/51ccXxKM6fL._AC_UL640_FMwebp_QL65_.jpg",
      prefectureId: 34,
      categoryIds: [],
      featureIds: [2],
    },
    {
      name: "もみじまんじゅう3種詰め合わせ",
      price: 1790,
      url: "https://www.amazon.co.jp/dp/B06XK745MC/ref=cm_sw_em_r_mt_dp_U_qnvREbYJVN2PX",
      image_url: "https://images-na.ssl-images-amazon.com/images/I/61VK%2BAVKQhL._AC_.jpg",
      prefectureId: 34,
      categoryIds: [1, 3],
      featureIds: [3],
    }
  ],
  areaData: {
    0: {
      name: '地域を選択してください'
    },
    1: {
      name: '全国',
      check: false,
    },
    2: {
      name: '北海道',
      id: 1,
      check: false,
    },
    3: {
      name: '東北',
      prefectures: [
        {
          name: '青森',
          prefectureId: 2
        },
        {
          name: '岩手',
          prefectureId: 3
        },
        {
          name: '秋田',
          prefectureId: 4
        },
        {
          name: '宮城',
          prefectureId: 5
        },
        {
          name: '山形',
          prefectureId: 6
        },
        {
          name: '福島',
          prefectureId: 7
        },
      ],
      check: false
    },
    4: {
      name: '関東',
      id: 4,
      prefectures: [
        {
          name: '茨城',
          prefectureId: 8
        },
        {
          name: '栃木',
          prefectureId: 9
        },
        {
          name: '群馬',
          prefectureId: 10
        },
        {
          name: '埼玉',
          prefectureId: 11
        },
        {
          name: '千葉',
          prefectureId: 12
        },
        {
          name: '東京',
          prefectureId: 13
        },
        {
          name: '神奈川',
          prefectureId: 14
        },
      ],
      check: false
    },
    5: {
      name: '中部',
      id: 5,
      prefectures: [
        {
          name: '山梨',
          prefectureId: 15
        },
        {
          name: '長野',
          prefectureId: 16
        },
        {
          name: '新潟',
          prefectureId: 17
        },
        {
          name: '富山',
          prefectureId: 18
        },
        {
          name: '石川',
          prefectureId: 19
        },
        {
          name: '福井',
          prefectureId: 20
        },
        {
          name: '静岡',
          prefectureId: 21
        },
        {
          name: '愛知',
          prefectureId: 22
        },
        {
          name: '岐阜',
          prefectureId: 23
        },
      ],
      check: false
    },
    6: {
      name: '近畿',
      id: 6,
      prefectures: [
        {
          name: '三重',
          prefectureId: 24
        },
        {
          name: '滋賀',
          prefectureId: 25
        },
        {
          name: '京都',
          prefectureId: 26
        },
        {
          name: '大阪',
          prefectureId: 27
        },
        {
          name: '兵庫',
          prefectureId: 28
        },
        {
          name: '奈良',
          prefectureId: 29
        },
        {
          name: '和歌山',
          prefectureId: 30
        },
      ],
      check: false
    },
    7: {
      name: '中国',
      id: 7,
      prefectures: [
        {
          name: '鳥取',
          prefectureId: 31
        },
        {
          name: '島根',
          prefectureId: 32
        },
        {
          name: '岡山',
          prefectureId: 33
        },
        {
          name: '広島',
          prefectureId: 34
        },
        {
          name: '山口',
          prefectureId: 35
        },
      ],
      check: false
    },
    8: {
      name: '四国',
      id: 8,
      prefectures: [
        {
          name: '香川',
          prefectureId: 36
        },
        {
          name: '愛媛',
          prefectureId: 37
        },
        {
          name: '徳島',
          prefectureId: 38
        },
        {
          name: '高知',
          prefectureId: 39
        },
      ],
      check: false
    },
    9: {
      name: '九州・沖縄',
      id: 9,
      prefectures: [
        {
          name: '福岡',
          prefectureId: 40
        },
        {
          name: '佐賀',
          prefectureId: 41
        },
        {
          name: '長崎',
          prefectureId: 42
        },
        {
          name: '熊本',
          prefectureId: 43
        },
        {
          name: '大分',
          prefectureId: 44
        },
        {
          name: '宮崎',
          prefectureId: 45
        },
        {
          name: '鹿児島',
          prefectureId: 46
        },
        {
          name: '沖縄',
          prefectureId: 47
        },
      ],
      check: false
    }
  },
  featureData: [
    {
      featureId: 1,
      name: "定番"
    },
    {
      featureId: 2,
      name: "ユニーク"
    },
    {
      featureId: 3,
      name: "大人数にオススメ"
    },
    {
      featureId: 4,
      name: "おしゃれ"
    },
  ],
  categoryData: [
    {
      categoryId: 1,
      name: "食べ物"
    },
    {
      categoryId: 2,
      name: "デザート"
    },
    {
      categoryId: 3,
      name: "お菓子"
    },
    {
      categoryId: 4,
      name: "調味料"
    },
  ]
})