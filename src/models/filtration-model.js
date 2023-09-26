import Observable from '../framework/observable.js';
import {DEFAULT_FILTRATION_OPTION, FILTRATION_OPTIONS} from '../const.js';

export default class FiltrationModel extends Observable {
  #currentOption = DEFAULT_FILTRATION_OPTION;

  get currentOption() {
    return this.#currentOption;
  }

  setOption(updateType, filtrationName) {
    this.#currentOption = FILTRATION_OPTIONS.find((option) => option.name === filtrationName);
    this._notify(updateType, filtrationName);
  }
}
