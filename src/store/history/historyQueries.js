import firestore from '@react-native-firebase/firestore';

import {logger} from '@utility/helper/functionHelper';
import {stringHelper} from '@utility/helper/stringHelper';

class ResponseMessage {
  result: any;
  message: string;
  data: object;
}

class ExerciseQueries {
  constructor() {
    this.types = {
      exercise_id: 'string',
      updated_at: 'object',//min
      user_id: 'string',
      total_calories:'number'
    };

    this.db = firestore().collection('History');
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
          logger(err, 'ExerciseQueries, find()');
          reject(err);
        });
    });
  }
}
const exerciseQueries = new ExerciseQueries();

export default exerciseQueries;
