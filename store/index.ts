import _ from "lodash";
import { itemData } from "@/constants/index.ts"

interface searchParamsType {
  region: number
  prefectures: number[]
  categoryIds: number[]
  featureIds: number[]
}

type searchParamsKey = ('region' | 'prefectures' | 'categoryIds' | 'featureIds')

interface itemDataType {
  name: string
  price: number
  url: string
  image_url: string
  region: number
  prefectureId: number
  categoryIds: number
  featureIds: number[]
}

interface areaDataType {
  [key: number]: {
    name: string
    id?: number
    prefectures?: prefectureDataType[]
  }
}

interface prefectureDataType {
  name: string
  prefectureId: number
}

interface featureDataType {
  featureId: number
  name: string
}

interface categoryDataType {
  categoryId: number
  name: string
}

interface State {
  itemData: itemDataType[]
  areaDate: areaDataType
  prefectureData: prefectureDataType[]
  featureData: featureDataType[]
  categoryData: categoryDataType[]
  searchParams: searchParamsType
}

export const state = () => ({
  itemData: itemData,

  areaData: {
    0: {
      name: '地域'
    },
    1: {
      name: '全国',
    },
    2: {
      name: '北海道',
      id: 1,
      prefectures: [
        {
          name: '北海道',
          prefectureId: 1
        }
      ]
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
    }
  },
  prefectureData: [
    {
      name: '北海道',
      prefectureId: 1
    },
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
      name: "大人数向け"
    },
    {
      featureId: 4,
      name: "個人向け"
    },
    {
      featureId: 5,
      name: "家族向け"
    },
    {
      featureId: 6,
      name: "おしゃれ"
    },
    {
      featureId: 7,
      name: "おもしろ"
    },
  ],
  categoryData: [
    {
      categoryId: 1,
      name: "食べ物"
    },
    {
      categoryId: 2,
      name: "おつまみ"
    },
    {
      categoryId: 3,
      name: "お菓子"
    },
    {
      categoryId: 4,
      name: "デザート"
    },
    {
      categoryId: 5,
      name: "調味料"
    },
    {
      categoryId: 6,
      name: "ドリンク"
    },
    {
      categoryId: 7,
      name: "お酒"
    },
  ],
  searchParams: {
    region: 0,
    prefectures: [],
    categoryIds: [],
    featureIds: [],
  }
})

export const mutations = {
  setRegionParams(state: State, regionId: number) {
    state.searchParams.region = regionId
  },

  setPrefectureParams(state: State, prefectureId: number) {
    const newPrefectureParams = state.searchParams.prefectures.concat()
    newPrefectureParams.push(prefectureId)
    const sortedPrefectureParams = _.sortBy(newPrefectureParams)
    state.searchParams.prefectures = sortedPrefectureParams
  },
  deletePrefectureParams(state: State, prefectureId: number) {
    const newPrefectureParams = _.pull(state.searchParams.prefectures.concat(), prefectureId)
    state.searchParams.prefectures = newPrefectureParams
  },
  setCategoryParams(state: State, categoryId: number) {
    const newCategoryParams = state.searchParams.categoryIds.concat()
    newCategoryParams.push(categoryId)
    const sortedCategoryParams = _.sortBy(newCategoryParams)
    state.searchParams.categoryIds = sortedCategoryParams
  },
  deleteCategoryParams(state: State, categoryId: number) {
    const newCategoryParams = _.pull(state.searchParams.categoryIds.concat(), categoryId)
    state.searchParams.categoryIds = newCategoryParams
  },
  setFeatureParams(state: State, featureId: number) {
    const newFeatureParams = state.searchParams.featureIds.concat()
    newFeatureParams.push(featureId)
    const sortedFeatureParams = _.sortBy(newFeatureParams)
    state.searchParams.featureIds = sortedFeatureParams
  },
  deleteFeatureParams(state: State, featureId: number) {
    const newFeatureParams = _.pull(state.searchParams.featureIds.concat(), featureId)
    state.searchParams.featureIds = newFeatureParams
  },
  clearSearchParams(state: State, keyName: searchParamsKey) {
    if (keyName === 'region') {
      state.searchParams[keyName] = 0
    } else {
      state.searchParams[keyName] = []
    }
  },
  clearPrefectureParams(state: State) {
    state.searchParams.prefectures = []
  }
}

export const actions = {
  updateRegionParams({ state, commit }: { state: State, commit: any }, regionId: number) {
    commit('setRegionParams', regionId)
  },
  updatePrefectureParams({ state, commit }: { state: State, commit: any }, prefectureId: number) {
    if (state.searchParams.prefectures.includes(prefectureId)) {
      commit('deletePrefectureParams', prefectureId)
    } else {
      commit('setPrefectureParams', prefectureId)
    }
  },
  updateCategoryParams({ state, commit }: { state: State, commit: any }, categoryId: number) {
    if (state.searchParams.categoryIds.includes(categoryId)) {
      commit('deleteCategoryParams', categoryId)
    } else {
      commit('setCategoryParams', categoryId)
    }
  },
  updateFeatureParams({ state, commit }: { state: any, commit: any }, featureId: number) {
    if (state.searchParams.featureIds.includes(featureId)) {
      commit('deleteFeatureParams', featureId)
    } else {
      commit('setFeatureParams', featureId)
    }
  },
}
