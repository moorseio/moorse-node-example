const Requests = require('./functions/Requests')
const {USER, PASSWORD, MESSAGE, MESSAGE_GROUP} = require ('./config')
 

async function main(){
  const token = await Requests.login(USER, PASSWORD);
  const messageToContact = await Requests.sendMEssageToContact(token,MESSAGE )
  const messageToGroup = await Requests.sendMEssageToGroup(token, MESSAGE_GROUP)
}

main()