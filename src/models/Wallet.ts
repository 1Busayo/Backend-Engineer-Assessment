import { Model } from 'objection'

export class Wallet extends Model {
  static get tableName() {
    return 'wallet';
  }

  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        id: { type: 'integer' },
        balance: { type: 'integer' },
        user_id: { type: 'integer' }
      }
    };
  }


  static get relationMappings() {
    const User = require('./User');
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'wallet.user_id',
          to: 'user.id',
        },
      },
    };
  }


}
