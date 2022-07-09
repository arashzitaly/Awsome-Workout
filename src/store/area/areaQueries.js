import firestore from '@react-native-firebase/firestore';

import store from '@store/store';

import {logger} from '@utility/helper/functionHelper';

import {stringHelper} from '@utility/helper/stringHelper';

class ResponseMessage {
  result: any;
  message: string;
  data: object;
}

class AreaQueries {
  constructor() {
    this.types = {
      name: 'string',
    };

    this.db = firestore().collection('Area');
  }

  /**
   * @param {Object} documentObj
   * @param {String} typeOfUse > Should Be 'create' OR 'update'
   */
  checkDataTypes(documentObj, typeOfUse) {
    return new Promise((resolve, reject) => {
      if (typeOfUse === 'create') {
        const { email, first_name, last_name, id } = documentObj;
        if (
          typeof email === 'string' &&
          typeof first_name === 'string' &&
          typeof last_name === 'string' &&
          typeof id === 'string'
        ) {
          return resolve({
            id,
            email,
            first_name,
            last_name,
            is_deleted: false,
            created_at: new Date(),
            updated_at: new Date(),
          });
        } else {
          reject('"documentObj" properties did not have valid types.');
        }
      } else if (typeOfUse === 'update') {
        const errors = [];
        Object.keys(documentObj).forEach((property) => {
          if (typeof documentObj[property] !== this.types[property]) {
            errors.push(
              `Type of "${property}" must be "${this.types[property]}".`,
            );
          }
        });
        if (errors.length > 0) {
          reject(errors.join(' '));
        } else {
          resolve({
            ...documentObj,
            updated_at: new Date(),
          });
        }
      }
    });
  }

  /**
   * @param {Array} conditions
   * [{
   *  type: 'where', (Type can be: where, orderBy)
   *  params: {field: 'email', conditionType: '==', value: 'info@ifsguide.com'},
   * }]
   */
  find(conditions = []) {
    return new Promise((resolve, reject) => {
      const responseMessage = new ResponseMessage();
      let queryRef = this.db;

      queryRef
        .get()
        .then((result) => {
          responseMessage.result = true;
          if (result.size > 0) {
            responseMessage.message = stringHelper.queryMessages.get.found;
            const docs = result.docs.map((document) => {
              return { id: document.id, ...document.data() };
            });
            responseMessage.data = docs;
            resolve(responseMessage);
          } else {
            responseMessage.message = stringHelper.queryMessages.get.notFound;
            responseMessage.data = [];

            resolve(responseMessage);
          }
        })
        .catch((err) => {
          logger(err, 'SessionQueries, find()');
          reject(err);
        });
    });
  }
}
const areaQueries = new AreaQueries();

export default areaQueries;
