import { showAll, showFuture, showPast, showPresent } from './utils/filtration-callbacks';
import { compareByDateFrom, compareByPrice, compareByDuration } from './utils/sorting-callbacks';

export const AUTHORIZATION = 'Basic id2317955';
export const END_POINT = 'https://21.objects.pages.academy/big-trip';

export const BLANK_POINT = {
  basePrice: 0,
  dateFrom: '',
  dateTo: '',
  destination: '',
  isFavorite: false,
  offers: [],
  type: 'flight'
};

// мы должны хранить типы точек в константе или можем брать их из данных сервера?
export const POINT_TYPES = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];

export const DEFAULT_NO_POINT_MESSAGE = 'Failed to load latest route information';

export const FILTRATION_OPTIONS = [
  {
    name: 'everything',
    filterCb: showAll,
    noPointsMessage: 'Click New Event to create your first point',
  },
  {
    name: 'future',
    filterCb: showFuture,
    noPointsMessage: 'There are no future events now',
  },
  {
    name: 'present',
    filterCb: showPresent,
    noPointsMessage: 'There are no present events now',
  },
  {
    name: 'past',
    filterCb: showPast,
    noPointsMessage: 'There are no past events now',
  },
];

export const DEFAULT_FILTRATION_OPTION = FILTRATION_OPTIONS[0];

export const SORTING_OPTIONS = [
  {
    name: 'day',
    sortCb: compareByDateFrom,
    isDisable: false,
  },
  {
    name: 'event',
    sortCb: null,
    isDisable: true,
  },
  {
    name: 'time',
    sortCb: compareByDuration,
    isDisable: false,
  },
  {
    name: 'price',
    sortCb: compareByPrice,
    isDisable: false,
  },
  {
    name: 'offers',
    sortCb: null,
    isDisable: true,
  },
];

export const DEFAULT_SORTING_OPTION = SORTING_OPTIONS[0];

export const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  ADD_POINT: 'ADD_POINT',
  DELETE_POINT: 'DELETE_POINT',
};

export const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  INIT: 'INIT',
};

export const Method = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};

export const ServerPaths = {
  POINTS: 'points',
  OFFERS: 'offers',
  DESTINATIONS: 'destinations',
};

export const TimeLimit = {
  LOWER_LIMIT: 350,
  UPPER_LIMIT: 1000,
};

export const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};
