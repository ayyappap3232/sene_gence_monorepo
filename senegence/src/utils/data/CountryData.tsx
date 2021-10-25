import {images} from '../../constants';
import {
  canada_English,
  canada_French,
  chinese_Hongkong,
  english_Hongkong,
  mexico_Spanish,
  switzerland_Deutsch,
  switzerland_English,
  switzerland_French,
  usa_English,
  usa_Espanol,
} from './links';

export interface ICountriesData {
  id: string;
  name: string;
  flag: any;
  data: IData[];
}

export interface IData {
  countryName: string;
  flag: any;
  languages?: Array<{name: string; onPress: {}}>;
}

export const countriesData: ICountriesData[] = [
  {
    id: 'C1',
    name: 'United States',
    flag: images.americamap,
    data: [
      {
        countryName: 'United States',
        flag: images.america,
        languages: [
          {name: 'English', onPress: usa_English},
          {name: ' | ', onPress: {}},
          {name: 'Español', onPress: usa_Espanol},
        ],
      },
      {
        countryName: 'Canada',
        flag: images.canada,
        languages: [
          {name: 'English', onPress: canada_English},
          {name: ' | ', onPress: {}},
          {name: 'Français', onPress: canada_French},
        ],
      },
      {
        countryName: 'Mexico',
        flag: images.mexico,
        languages: [{name: 'Español', onPress: mexico_Spanish}],
      },
    ],
  },
  {
    id: 'C2',
    name: 'Asia Specific',
    flag: images.americamap,
    data: [
      {
        countryName: 'Australia',
        flag: images.australia,
      },
      {
        countryName: 'Indonesia',
        flag: images.indonesia,
      },
      {
        countryName: 'New Zealand',
        flag: images.newzealand,
      },
      {
        countryName: 'Hong Kong',
        flag: images.hongkong,
        languages: [
          {name: 'English', onPress: english_Hongkong},
          {name: ' | ', onPress: {}},
          {name: '繁體中文', onPress: chinese_Hongkong},
        ],
      },
    ],
  },
  {
    id: 'C3',
    name: 'Europe',
    flag: images.europemap,
    data: [
      {
        countryName: 'Poland',
        flag: images.poland,
      },
      {
        countryName: 'Switzerland',
        flag: images.switzerland,
        languages: [
          {name: 'Deutsch', onPress: switzerland_Deutsch},
          {name: ' | ', onPress: {}},
          {name: 'Français', onPress: switzerland_French},
          {name: ' | ', onPress: {}},
          {name: 'English', onPress: switzerland_English},
        ],
      },
      {
        countryName: 'United Kingdom',
        flag: images.unitedkingdom,
      },
    ],
  },
];
