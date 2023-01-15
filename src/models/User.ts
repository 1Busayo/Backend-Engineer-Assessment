import { Model } from 'objection'

export class User extends Model {
  static get tableName() {
    return 'user';
  }

  static get jsonSchema() {
    return {
      type: 'object',
     

      properties: {
        id: { type: 'integer' },
        username: { type: 'string' },
        password: { type: 'string' }
      }
    };
  }


  static get relationMappings() {
    const Wallet = require('./User');
    return {
      wallet: {
        relation: Model.HasManyRelation,
        modelClass: Wallet,
        join: {
          from: 'user.id',
          to: 'wallet.user_id',
        },
      },
    }
}

}
