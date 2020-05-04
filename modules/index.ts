import _ from 'lodash'

export const getPrefectureTag = (prefectureData: { name: string, prefectureId: number }[], prefectureId: number) => {
  const prefecture: { name: string; prefectureId: number }[] = _.filter(
    prefectureData,
    {
      prefectureId: prefectureId
    }
  );
  return prefecture[0].name;
}