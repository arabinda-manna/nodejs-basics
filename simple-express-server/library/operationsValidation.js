const {
  celebrate, Joi, Segments,
} = require('celebrate');

const first10MultiplesInputValidate = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    num: Joi.number().integer().min(0).max(10)
      .required(),
  }),
});

const stringCharacterCalcInputValidate = celebrate({
  [Segments.BODY]: Joi.object().keys({
    string: Joi.string().min(1).max(256).required(),
  }),
});

const isAmstrongInputValidate = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    num: Joi.number().integer().min(0).max(10000000)
      .required(),
  }),
});

module.exports = {
  first10MultiplesInputValidate,
  stringCharacterCalcInputValidate,
  isAmstrongInputValidate,
};
