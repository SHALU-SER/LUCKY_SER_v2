const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://www.linkpicture.com/q/20211122_150913.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.png, caption: `*Shadow-sir_v2*
 

       *ɢɪᴛʜᴜʙ ʟɪɴᴋ         _https://github.com/ABUOP1/ABU_SER_v2*
 
       *ʙᴏᴛ ᴍᴀᴋɪɴɢ ᴠɪᴅᴇᴏ   _https://chat.whatsapp.com/EnayNY69wLy7Gf4zbzoNoZ*

       *ᴀʙᴜ sᴇʀ ʙᴏᴛ ɢʀᴏᴜᴘ _https://chat.whatsapp.com/EnayNY69wLy7Gf4zbzoNoZ*
 

       *ʙᴏᴛ ᴏᴡɴᴇʀ ɴᴜᴍʙᴜʀ _https://wa.me/917025994178*
  
  
       *ʙᴏᴛ ᴏᴡɴᴇʀs 2       _https://wa.me/916238748280*
`}) 

})); 
