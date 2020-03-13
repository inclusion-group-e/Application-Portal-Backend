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

    static async new(form){
      return await this.create({
        title: form.title,
        question1: form.question1
      });
    }

    static async delete(id){
      const form = await this.findOne({ where: {id: id} });
      return await form.destroy();
    }
  }

  return Form;
};
