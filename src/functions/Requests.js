const doRequest = require ('../helpers/doRequestHelper');
const {MOORSE_URL ,API_URL, AUTH_URL, YOUR_TRIAL_NUMBER, DESTINATION_NUMBER, GROUPID} = require('../config')

module.exports.login = async (user , password )=> {
    const options = {
      url: MOORSE_URL + AUTH_URL,
      method: 'post',
      data: {
        login: user,
        senha: password
      },
    };
    try {
      const response = await doRequest(options);
      return response.data;
    } catch (err) {
      console.error(err)
    }
  }

module.exports.sendMEssageToContact = async (token, message)=> {
    const options = {
      url:`${MOORSE_URL}${API_URL}/v2/whatsApp/sendMessage` ,
      method: 'post' ,
      data: {from: YOUR_TRIAL_NUMBER, to: DESTINATION_NUMBER, body: message },
      headers: {'Authorization': token},
    };
    try {
      const response = await doRequest(options);
      return response;
    } catch (err) {
      console.error(err)
    }
  }

module.exports.sendMEssageToGroup = async (token, message)=> {
  const options = {
    url: `${MOORSE_URL}${API_URL}/v2/whatsApp/groups/sendMessage`,
    method: 'post',
    data: {groupId: GROUPID , body: message},
    headers: {'Authorization': token}
  };
  try {
    const response = await doRequest(options);
    return response;
  } catch (err) {
    console.error(err)
  }
}
