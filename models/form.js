'use strict';
module.exports = (sequelize, DataTypes) => {
  const SequelizeForm = sequelize.define('Form', {
    title: DataTypes.STRING,
    question1: DataTypes.STRING
  }, {});

  class Form extends SequelizeForm {
    static async all(){
      return await this.findAll();
    }

    static async one(id){
      return await this.findOne({ where: {id: id} });
    }

    static async create(data){
      return await this.create({ title: data.title, question1: data.question1 });
    }
  }

  return Form;
};
