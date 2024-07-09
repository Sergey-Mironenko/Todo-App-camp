import { Request } from 'express';
import Joi from 'joi';

export class JoiService {
  constructor() {}

  public validateId = (data: Request[keyof Request]) => {
    const idSchema = Joi.object({
      id: Joi.string().required(), 
    });

    return idSchema.validate(data);
  }

  public validateCreating = (data: Request[keyof Request]) => {
    const creatingSchema = Joi.object({
      title: Joi.string().min(1).max(12).pattern(/^[a-zA-ZА-Яа-яЁё]*$/).required(),
      text: Joi.string().min(1).max(200).pattern(/^(?![\d+_@.-]+$)[a-zA-Z0-9.-]*$/).required(),
      userId: Joi.string().required(),
      userName: Joi.string().min(1).max(14).pattern(/^[a-zA-ZА-Яа-яЁё]*$/).required(),
      isPrivate: Joi.boolean().required(),
      isCompleted: Joi.boolean().required(), 
    });

    return creatingSchema.validate(data);
  }

  public validateUpdating = (data: Request[keyof Request]) => {
    const updatingSchema = Joi.object({
      id: Joi.string().required(), 
      title: Joi.string().min(1).max(12).pattern(/^[a-zA-ZА-Яа-яЁё]*$/).required(),
      isCompleted: Joi.boolean().required(), 
    });

    return updatingSchema.validate(data);
  }

  public validateName = (data: Request[keyof Request]) => {
    const emailSchema = Joi.object({
      id: Joi.string().min(1).max(14).pattern(/^[a-zA-ZА-Яа-яЁё]*$/).required(), 
    });

    return emailSchema.validate(data);
  }

  public validateEmail = (data: Request[keyof Request]) => {
    const emailSchema = Joi.object({
      id: Joi.string().min(1).email().required(), 
    });

    return emailSchema.validate(data);
  }

  public validatePassword = (data: Request[keyof Request]) => {
    const passwordSchema = Joi.object({
      id: Joi.string().min(8).max(20).pattern(/^[a-zA-Z0-9]*$/).required(), 
    });

    return passwordSchema.validate(data);
  }
};
