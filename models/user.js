'use strict';
module.exports = (sequelize, DataTypes) => {
  const SequelizeResponse = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});

  class User extends SequelizeResponse {
    static async all(){
      return await this.findAll();
    }

    static async one(id){
      return await this.findOne({ where: {id: id} });
    }

    static async new(email){
      return await this.create({
        email: email,
        password: 'DEFAULT'
      });
    }

    static async patch(id, password){
      const user = await this.findOne({ where: {id: id} });

      return await user.update({
        password: password
      });
    }

    static async delete(id){
      const user = await this.findOne({ where: {id: id} });
      return await user.destroy();
    }
  }

  return User;
};
