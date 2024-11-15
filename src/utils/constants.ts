import { ISettings } from './interfaces';

export const OPENSEA_BASE = 'https://opensea.io/assets/ethereum/0x31385d3520bced94f77aae104b406994d8f2168c';
export const OPEANSEA_REFERRAL = 'ref=0xe126b3e5d052f1f575828f61feba4f4f2603652a';
export const BASTARDS_API_BASE = 'https://api.bastardganpunks.club';
export const HIGHEST_BASTARD_ID = 11304;
export const IMAGE_BASE = '/img/full/';
export const THUMBNAIL_BASE = '/img/thumb/';
export const METADATA_BASE = '/metadata';
export const PLACEHOLDER_IMAGE = '/img/loading.gif';

export const BASTARD_CONTRACT_ADDRESS = '0x31385d3520bCED94f77AaE104b406994D8F2168C';
export const NFT20_ADDRESS = '0xcCcBF11AC3030ee8CD7a04CFE15a3718df6dD030';
export const NFTX_ADDRESS = '0xc3B5284B2c0cfa1871a6ac63B6d6ee43c08BDC79';
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
export const DEAD_ADDRESS = '0x000000000000000000000000000000000000dEaD';

export const IMAGE_SIZE_SMALL = 100;
export const IMAGE_SIZE_LARGE = 480;

export const GENERAL_ATTRIBUTES = [
  'BASTARDNESS',
  'SONG WORD COUNT',
  'TRAIT COUNT',
];

export const HYPED_ATTRIBUTES = [
  'HYPE MASK',
  'SPEEDOMETER',
  'NUM OF FRAMES',
  'HEAD TURNS',
  'FLOATY HEAD',
  'BACKGROUND GLITCH LEVEL',
  'BACKGROUND MOOD',
];

export const CALM_ATTRIBUTES = [
  'TYPE',
  'BACKGROUND',
  'GLITCH PATTERN',
  'FACING DIRECTION',
  'BAD HABIT(S)',
  'HEAD',
  'EYES',
  'FACE',
  'NOSE',
  'MOUTH',
  'EAR',
  'NECK',
  'EXPERIMENTAL TRAITS',
];

export const NULLISH_ATTRIBUTES = [
  'NUTTIN\'',
  'NAH',
  'EDIBLES???',
  'REGULAR',
];

export const DEFAULT_SETTINGS: ISettings = {
  colourfulBackground: false,
  displayNumbers: false,
  showFiltersInUrl: true,
  enableExperimentalTraits: false,
};
