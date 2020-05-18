import _ from 'lodash'
// import { itemData } from '~/constants';

export const getPrefectureTag = (prefectureData: { name: string, prefectureId: number }[], prefectureId: number) => {
  const prefecture: { name: string; prefectureId: number }[] = _.filter(
    prefectureData,
    {
      prefectureId: prefectureId
    }
  );
  return prefecture[0].name;
}

export const getCategoryTag = (categoryData: { name: string, categoryId: number }[], categoryId: number) => {
  const category: { name: string; categoryId: number }[] = _.filter(
    categoryData,
    {
      categoryId: categoryId
    }
  );
  return category[0].name;
}

export const getFeatureTag = (featureData: { name: string, featureId: number }[], featureId: number) => {
  const feature: { name: string; featureId: number }[] = _.filter(
    featureData,
    {
      featureId: featureId
    }
  );
  return feature[0].name;
}
