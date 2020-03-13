'use strict';
module.exports = (sequelize, DataTypes) => {
  const SequelizeResponse = sequelize.define('Response', {
    formId: DataTypes.INTEGER,
    email: DataTypes.STRING,
    status: DataTypes.STRING,
    q1Response: DataTypes.STRING,
    comments: DataTypes.STRING
  }, {});

  class Response extends SequelizeResponse {
    static async all(){
      return await this.findAll();
    }

    static async one(id){
      return await this.findOne({ where: {id: id} });
    }

    static async new(response){
      return await this.create({
        formId: response.formId,
        email: response.email,
        status: 'NEW',
        q1Response: response.q1Response,
        comments: ''
      });
    }

    static async patch(id, data){
      const response = await this.findOne({ where: {id: id} });

      return await response.update({
        status: data.status,
        comments: data.comments
      });
    }
  }

  return Response;
};
