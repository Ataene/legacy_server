const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema(
  {
    currentAsset: {
      type: String,
      required: true,
    },
    fixedAssets: {
      type: String,
      required: true,
    },
    currentLiability: {
      type: String,
      required: true,
    },
    LongTermAsset: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;
