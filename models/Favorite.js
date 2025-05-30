import { DataTypes } from 'sequelize'

export default function (sequelize) {
  return sequelize.define(
    'Favorite',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      member_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //   model: 'member',
        //   key: 'id'
        // },
        // onDelete: 'SET NULL',
        // onUpdate: 'CASCADE'
      },
      favorite_type: {
        type: DataTypes.ENUM('Event', 'Artist', 'Product'),
      },
      item_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      tableName: 'favorite', //直接提供資料表名稱
      timestamps: true, // 使用時間戳
      paranoid: false, // 軟性刪除
      underscored: true, // 所有自動建立欄位，使用snake_case命名
      createdAt: 'created_at', // 建立的時間戳
      updatedAt: 'updated_at', // 更新的時間戳
    }
  )
}
