import NotificationStack from './notification_stack'
import SummaryBoardView from './summary_board_view'
import './css/app.scss'

const API_PREFIX = 'https://floating-garden-1441.herokuapp.com/api/v1';
const CONTENT_TYPE = 'application/x-www-form-urlencoded'

class GaAs {
  constructor() {
    throw Error('[GaAs] Please use GaAs.init() instead of newing an instance.')
    return false;
  }

  static init(options={}) {
    if (this._initialized) {
      throw Error('[GaAs] GaAs has already been initialized.');
    }
    if (!options.user_id) {
      throw Error('[GaAs] Unable to init without user_id.')
    }
    if (!options.api_token) {
      throw Error('[GaAs] Unable to init without api_token.')
    }

    this._user_id = options.user_id;
    this._api_token = options.api_token;
    this._notificationStatck = new NotificationStack;
    this._initialized = true;
  }

  static track(event_name, options={preventDefault: false}) {
    // 1. POST /events
    // 2. Check achivements in response
    // 3. Append notification to body

    let queryParams = this._getQueryParams();
    queryParams = queryParams + `&name=${ encodeURIComponent(event_name) }`;

    fetch(API_PREFIX + '/events', {
      method: 'POST',
      headers: {'Content-Type': CONTENT_TYPE},
      body: queryParams
    }).then( response => response.json() )
      .then( response => {
        if (!options.preventDefault) {
          response.achievements.forEach( (definition, index) => {
            this._notificationStatck.push(definition);
          });
        }
        if (options.callback && typeof options.callback == 'function') {
          options.callback(response.achievements);
        }
      });

  }

  static getAllAchievements() {
    const queryParams = this._getQueryParams();

    return fetch(API_PREFIX + `/achievements?${ queryParams }`)
      .then( response => response.json() );
  }

  static renderSummaryBoardInto(rootNodeOrSelector) {
    // 1. GET /achievements
    // 2. Render summary board
    // 3. Append to rootNode
    const boardView = new SummaryBoardView(rootNodeOrSelector, {autoRender: true});

    this.getAllAchievements()
      .then( achivementsArray => {
        achivementsArray.forEach(definition => {
          boardView.addCellFromDefinition(definition);
        });
        boardView.render();
      });
  }

  static _getQueryParams() {
    if ( !(this._user_id && this._api_token) ) {
      throw Error('[GaAs] Please init with proper data before use.');
      return null;
    }

    let params = `user_id=${ encodeURIComponent(this._user_id) }`;
    params = params + `&api_token=${ encodeURIComponent(this._api_token) }`;

    return params
  }
}

module.exports = GaAs
