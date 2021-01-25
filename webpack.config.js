var ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin("/guest-services/css/[name].css");

const webpack = require("webpack");
const commonsPlugin = new webpack.optimize.CommonsChunkPlugin(
  "commons",
  "/guest-services/common.js"
);

module.exports = {
  entry: {
    index: "./src/index.js",
    main: "./src/components/menu-principal.js",
    general_info_menu: "./src/pages/general_info_menu.js",
    general_info: "./src/pages/general_info.js",
    telephone_directory: "./src/pages/telephone_directory.js",
    sports_desk: "./src/pages/sports_desk.js",
    restaurants_menu: "./src/pages/restaurants_menu.js",
    faro_grill: "./src/pages/faro_grill.js",
    flor_canela: "./src/pages/flor_canela.js",
    heaven_beach: "./src/pages/heaven_beach.js",
    faro_grill_1: "./src/pages/faro_grill_1.js",
    afternoon_tea: "./src/pages/afternoon_tea.js",
    afternoon_tea_1: "./src/pages/afternoon_tea_1.js",
    flor_canela_1: "./src/pages/flor_canela_1.js",
    heaven_beach_1: "./src/pages/heaven_beach_1.js",
    activities_program: "./src/pages/activities_program.js",
    activities_program_1: "./src/pages/activities_program_1.js",
    royal_care_standard: "./src/pages/royal_care_standard.js",
    kids_club: "./src/pages/kids_club.js",
    golf: "./src/pages/golf.js",
  },
  output: {
    path: "./build/",
    publicPath: "/",
    filename: "/guest-services/js/[name].js",
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ["es2015", "react", "stage-2"],
        },
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          "style-loader",
          "css-loader!sass-loader"
        ),
      },
    ],
  },
  plugins: [extractCSS, commonsPlugin],
  devServer: {
    historyApiFallback: true,
    contentBase: "./build",
    inline: true,
    hot: false,
  },
};
