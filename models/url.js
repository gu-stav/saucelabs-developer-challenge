module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    'url',
    {
      uuid: DataTypes.UUID,
      slug: DataTypes.STRING,
      url: DataTypes.STRING
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['slug']
        }
      ]
    }
  );
