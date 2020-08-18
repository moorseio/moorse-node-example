const Axios = require ('axios')

module.exports = async (options) => {
  const {data} = await Axios(options);
  return data;
}
