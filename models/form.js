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
  }

  return Form;
};
