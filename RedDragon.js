require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./Media/Zlib/myfunc')
const nexusnw = require('xfarr-api')
const maker = require('mumaker')

//rpg database\\
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

//Database\\
let setik = JSON.parse(fs.readFileSync('./Media/database/setik.json'));
let vien = JSON.parse(fs.readFileSync('./Media/database/vien.json'));
let imagi = JSON.parse(fs.readFileSync('./Media/database/imagi.json'))
let videox = JSON.parse(fs.readFileSync('./Media/database/video.json'))

//read database\\
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = KMUTHU = async (KMUTHU, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await KMUTHU.decodeJid(KMUTHU.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid
	    const type = Object.keys(mek.message)[0]        
	    const content = JSON.stringify(mek.message)

        //group\\
        const groupMetadata = m.isGroup ? await KMUTHU.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	    
        //member\\
        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
		
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	
	//group target \\
const reply = (teks) => {
            KMUTHU.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": ` ☬RED༒DRAGON࿐`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./Media/image/dragon.jpg`),"sourceUrl": "https://i.ibb.co/DY1K5x1/20220605-104505.jpg"}}}, { quoted: m})
        }
        
        const replay = (teks) => {
            KMUTHU.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": ` ☬RED༒DRAGON࿐`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./Media/image/dragon.jpg`),"sourceUrl": "https://i.ibb.co/DY1K5x1/20220605-104505.jpg"}}}, { quoted: m})
        }
	
        //Public & Self\\
        if (!KMUTHU.public) {
            if (!m.key.fromMe) return
        }

        //Push Message To Console && Auto Read\\
        if (m.message) {
            KMUTHU.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	//reset limit every 12 hours\\
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Limit Reseted')
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })
        
	//auto set bio\\
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await KMUTHU.setStatus(`${KMUTHU.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	
	  //antilink\\
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        reply(`「 ANTI LINK 」\n\nYou have been detected sending a group link, sorry you will be kicked !`)
        if (!isBotAdmins) return reply(`I Am Not An Admin, How Could I Kick Somebody Who Send Link 😒`)
        let gclink = (`https://chat.whatsapp.com/`+await KMUTHU.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Sent This Group Link❤️`)
        if (isAdmins) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are An Admin Of The Group❤️`)
        if (isCreator) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are My Owner Hahahahah🤣😘, You Think I Will Betray You Huh🔰🌹`)
        KMUTHU.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }

        //auto reply 
        for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./Media/sticker/${anji}.webp`)
                    if (global.chatbotpre === "false") return
					KMUTHU.sendMessage(m.chat, { sticker: result }, { quoted: m })
					}
			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./Media/RedDragonVoice/${anju}.mp3`)
                    if (global.chatbotpre === "false") return
					KMUTHU.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./Media/image/${anjh}.jpg`)
					KMUTHU.sendMessage(m.chat, { image: result }, { quoted: m })
					}
			}
					for (let anjh of videox){
				if (budy === anjh){
					result = fs.readFileSync(`./Media/vid/${anjh}.mp4`)
					KMUTHU.sendMessage(m.chat, { video: result }, { quoted: m })
					}
				  }

      //Mute Chat\\
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
        
        //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        
switch(command) {

	case 'kick': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net/nRemoved'
		await KMUTHU.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net/nAdded'
		await KMUTHU.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net/nPromoted'
		await KMUTHU.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await KMUTHU.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) return replay(`${mess.owner}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net/nBlocked!'
		await KMUTHU.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
               case 'vote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (m.chat in vote) replay(`_There Are Still Votes In This Chat!_\n\n*${prefix}delvote* - To Delete Vote Session`)
            if (!text) return replay(`Enter Reason For Vote, Example: *${prefix + command} Handsome Owner*`)
            reply(`Voting Starts!\n\n*${prefix}upvote* - For ❮❮ YES ❯❯\n*${prefix}devote* - For ❮❮ NO ❯❯\n*${prefix}checkvote* - To Check The Vote\n*${prefix}delvote* - To Delete Vote Session`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*❮❮ VOTE ❯❯*

*Reason:* ${vote[m.chat][0]}

╔❮✮ YES / UPVOTE ✮❯
│ 
╠ Total: ${vote[m.chat][1].length}
│
│ 
╚════

╔❮✮ NO / DEVOTE  ✮❯
│ 
╠ Total: ${vote[m.chat][2].length}
│
│ 
╚════

*${prefix}delvote* - To Delete Vote Session`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '❮❮ YES ❯❯'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '❮❮ NO ❯❯'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: KMUTHU.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            KMUTHU.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) replay(`You've Voted`)
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*❮❮ VOTE ❯❯*

*Reason:* ${vote[m.chat][0]}

╔❮✮ UPVOTE ✮❯
│ 
╠ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
╚════

╔❮✮ DEVOTE ✮❯
│ 
╠ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
╚════

*${prefix}delvote* - To Delete Vote Session`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '❮❮ YES ❯❯'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '❮❮ NO ❯❯'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: KMUTHU.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            KMUTHU.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replay(`You've Voted`)
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*❮❮ VOTE ❯❯*

*Reason:* ${vote[m.chat][0]}

╔❮✮ UPVOTE ✮❯
│ 
╠ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
╚════

╔❮✮ DEVOTE ✮❯
│ 
╠ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
╚════

*${prefix}delvote* - To Delete Vote Session`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '❮❮ YES ❯❯'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '❮❮ NO ❯❯'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: KMUTHU.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            KMUTHU.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'checkvote':
if (!m.isGroup) return replay(`${mess.group}`)
if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
teks_vote = `*❮❮ VOTE ❯❯*

*Reason:* ${vote[m.chat][0]}

╔❮✮ UPVOTE ✮❯
│ 
╠ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
╚════

╔❮✮ DEVOTE ✮❯
│ 
╠ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
╚════

*${prefix}delvote* - To Delete Vote Session


©${KMUTHU.user.id}
`
KMUTHU.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            delete vote[m.chat]
            reply('Successfully Deleted The Vote Session In This Group')
	    }
            break
            case 'antilink': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return reply(`Activated`)
                db.data.chats[m.chat].antilink = true
                reply(`Antilink Active !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return reply(`Deactivated`)
                db.data.chats[m.chat].antilink = false
                reply(`Antilink Inactive !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await KMUTHU.sendButtonText(m.chat, buttons, `Antilink Mode`, KMUTHU.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return reply(`Previously Active`)
                db.data.chats[m.chat].mute = true
                reply(`${KMUTHU.user.name} Has Been Muted In This Group !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return reply(`Previously Inactive`)
                db.data.chats[m.chat].mute = false
                reply(`${KMUTHU.user.name} Has Been Unmuted In This Group!`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await KMUTHU.sendButtonText(m.chat, buttons, `Mute Bot`, KMUTHU.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': {
                if (!m.isGroup) return replay(`${mess.group}`)
                let response = await KMUTHU.groupInviteCode(m.chat)
                KMUTHU.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n${groupMetadata.subject} Group Link`, m, { detectLink: true })
            }
            break
        break
        case 'ytmp4': case 'getvideo': case 'ytvideo': {
            let { ytv } = require('./Media/Zlib/y2mate')
            if (!text) return reply(`Example : ${prefix + command} https://youtu.be/E5C-lrl_g9I 360p`)
            let quality = args[1] ? args[1] : '360p'
            let media = await ytv(text, quality)
            if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
            KMUTHU.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `╠🙂🔥${botname}\n║\n╠🧸 Title : ${media.title}\n╠📂 File Size : ${media.filesizeF}\n╠🔗 Url : ${isUrl(text)}\n╠🪣 Ext : MP3\n╠🎞️ Resolution : ${args[1] || '360p'}\n║\n╠🤓 *ᴘᴏᴡᴇʀᴅ ʙʏ:* ◉ *ʀᴇᴅ-ᴅʀᴀɢᴏɴ-ʙᴏᴛ*` }, { quoted: m })
        }
        break
            case 'addmsg': {
                if (!m.quoted) return reply(`Reply Message You Want To Save In Database`)
                if (!text) return reply(`Example : ${prefix + command} File Name`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) return reply(`'${text}' Has Been Registered In The Message List`)
                msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Successfully Added Message In Message List As '${text}'
    
Access With ${prefix}getmsg ${text}

View List Of Messages With ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) return reply(`Example : ${prefix + command} file name\n\nView Message List With ${prefix}listmsg`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
                KMUTHU.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./Media/database/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 DATABASE LIST 」\n\n'
		for (let i of seplit) {
		    teks += `💫 *Name :* ${i.nama}\n💫 *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
		delete msgs[text.toLowerCase()]
		reply(`Delete Successfully '${text}' From The Message list`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'Start', buttonText: { displayText: '🚙Start🚙' }, type: 1 }
                ]
                KMUTHU.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await KMUTHU.getName(m.sender)} Welcome To Anonymous Chat\n\nClick The Button Below To Find A Partner\`\`\``, KMUTHU.user.name, m)
            }
			break
           
            case 'public': {
                if (!isCreator) return replay(`${mess.owner}`)
                KMUTHU.public = true
                reply('Successful Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) return replay(`${mess.owner}`)
                KMUTHU.public = false
                reply('Successful Change To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(respon)
            }
            break
            case 'speedtest': {
            reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) reply(stdout)
        if (stderr.trim()) reply(stderr)
            }
            }
            break
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {
              if (!q) return reply(`Example : ${prefix + command} ${global.ownername}`) 

             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             let anu = await maker.textpro(link, q)
                KMUTHU.sendMessage(m.chat, { image: { url: anu }, caption: `Generated by: ◉ *ʀᴇᴅ-ᴅʀᴀɢᴏɴ-ʙᴏᴛ*` }, { quoted: m })
             }
             break
case 'bug': case 'report': {
                    	if(!text) return reply(`Enter The Bug\n\n=(Example)= ${command} Menu Error!`)
                    	KMUTHU.sendMessage(`918129624395@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
Report Message: ${text}` })
reply(`Successfully Reported To The Owner\n\nPlease Make Sure The Bug Is Valid, If You Play With This, Use This Feature Again And Again For No Reason, You Will Be Blocked For Sure !`)
                    }
                    break
                    case 'bot': case 'alive': case 'menu': case 'list':
                        timestampe = speed();
                        latensie = speed() - timestampe
                        var unicorn = await getBuffer('https://i.ibb.co/x7qYTrq/20220605-103944.jpg')
                        await KMUTHU.send5ButImg(from, `` + '' + ' ', `●●➾ Hi, ${pushname}\n●●➾ I am Alive👋\n●●➾ ${botname}\n▌⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀\n▌✮❯ 𝙊𝙬𝙣𝙚𝙧 𝙉𝙖𝙢𝙚 :${global.ownername}\n▌✮❯ 𝙊𝙬𝙣𝙚𝙧 𝙉𝙪𝙢𝙗𝙚𝙧 :${global.owner}\n▌✮❯ 𝙎𝙥𝙚𝙚𝙙 : ${latensie.toFixed(4)} miliseconds\n▌✮❯ 𝙋𝙡𝙖𝙩𝙛𝙤𝙧𝙢 : ${os.platform()}\n▌⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀⦀\n${global.alivemsg}\n\n●●➾ ☬𝗥𝗘𝗗༒𝗗𝗥𝗔𝗚𝗢𝗡-𝗕𝗢𝗧࿐`,unicorn, [{
                            urlButton: {
                            displayText: 'Red Dragon Website ●',
                            url: 'https://sites.google.com/view/red-dragon-bot/home'
                            }
                            }, {
                            urlButton: {
                            displayText: `${button}`,
                            url: `${btnurl}`
                            }                            	
                            }, {
                            quickReplyButton: {
                            displayText: '⫷ OWNER ⫸',
                            id: `${prefix}owner`
                            }
                            },{
                            quickReplyButton: {
                            displayText: '⫷ LIST MENU ⫸',
                            id: `${prefix}command`
                            }
                            }] )
                            break

                            case 'notice':{
                                replay(`Hi, ${global.ownername}\nFrom RED-DRAGON\n\nDear owner,\nIf you use bot commands,\nYou should be delete it for everyone after send.\nElse, if your bot refreshing or restarting times, your bot send auto replies for your messages non stop. It is a interruption to users. This note only for bot owner.`)
                                replay(`හායි, ${global.ownername}\nRED-DRAGON විසින්\n\nඅයිිතිකරු වෙත,\nඔබ විසින් විධාන භාවිතා කරනවානම් එය සැමගෙන් මකා දැමිය යුතුය.\nඑසේ නොකළහොත් ඔබේ බොට් ක්‍රියාකාරීත්වය අලුත් වන සෑම විටම ඔබ යැවූ විධාන සඳහා කිහිප වරක් හෝ දිගටම auto reply යැවීමට ඉඩ ඇත. මෙය අයිතිකරු හට පමණක් වලංගු වේ.`)
                            }
                            break

                case 'command': {
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `╔═══════════════════╗\n╠Hi ${pushname}👀\n║`,
                    description: `╠ 🎸Choose The List Menu🎸\n║\n║\n║\n╠ ☬𝗥𝗘𝗗༒𝗗𝗥𝗔𝗚𝗢𝗡-𝗕𝗢𝗧࿐\n╠ 📧 ${global.ownername}\n║`,
                    buttonText: "🖥 LIST MENU 📕",
                    footerText: `╠ ${global.footer}\n╚═══════════════════╝`,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "🪐All Features🪐",
								"rows": [
									{
                                        "title": "🎸◉-All Menu🎸📑",
										"description": "Displays The List Of All The Features!",
										"rowId": `${prefix}allmenu`
										
									}
								]
							},
							{
								"title": "🪐Bot Features🪐",
								"rows": [
									{
										"title": "🎸Main Menu",
										"description": "Displays The List Of Main Features",
										"rowId": `${prefix}mainmenu`
									},
									{
										"title": "🎸Owner Menu",
										"description": "Displays The List Of Owner Features",
										"rowId": `${prefix}ownermenu`
										},
									{
										"title": "🎸Group Menu",
										"description": "Displays The List Of Main Features",
										"rowId": `${prefix}groupmenu`
										},
									{
										"title": "🎸Rpg Menu",
										"description": "Displays The List Of Rpg Features",
										"rowId": `${prefix}rpgmenu`
									},
									{
										"title": "🎸Download Menu",
										"description": "Displays The List Of Download Features",
										"rowId": `${prefix}downloadmenu`
									},
									{
										"title": "🎸Search Menu",
										"description": "Displays The List Of Searching Features",
										"rowId": `${prefix}searchmenu`
									},
									{
											"title": "🎸Random Menu",
										"description": "Displays The List Of Random Features",
										"rowId": `${prefix}randommenu`
										},
										{
											"title": "🎸Random Anime Menu",
										"description": "Displays The List Of Random Anime Features",
										"rowId": `${prefix}randomanimemenu`
										},
										{
											"title": "🎸Fun Menu",
										"description": "Displays The List Of Fun Features",
										"rowId": `${prefix}funmenu`
										},
										{
											"title": "🎸Convert Menu",
										"description": "Displays The List Of Convert Features",
										"rowId": `${prefix}convertmenu`
										},
										{
											"title": "🎸Database Menu",
										"description": "Displays The List Of Database Features",
										"rowId": `${prefix}databasemenu`
										},
										{
											"title": "🎸Voice Changer Menu",
										"description": "Displays The List Of Voice Changing Features",
										"rowId": `${prefix}voicechangermenu`
										},
										{
											"title": "🎸TEXT-to-IMG Menu",
										"description": "Displays The List Of Textpro Features",
										"rowId": `${prefix}textpromenu`
										},
										{
											"title": "🎸Islamic Menu",
										"description": "Displays The List Of Islamic Features",
										"rowId": `${prefix}islamicmenu`
										},
										{
											"title": "🎸Horoscope Menu",
										"description": "Displays The List Of Horoscope Features",
										"rowId": `${prefix}horoscopemenu`
										}
								]
							},
							{
								"title": "🪐Chat With Fellow Users🪐",
								"rows": [
									{
										"title": "🎸Anonymous Chat Menu",
										"description": "Displays The List Of Anonymous Chat Features",
										"rowId": `${prefix}anonymouschatmenu`
									}
								]
							},
							{
								"title": "🪐CREDIT🪐",
								"rows": [
									{
										"title": "🎸Thanks To",
										"description": "Displays The List Of Credit Of The Bot !!",
										"rowId": `${prefix}tqtt`
									}
								]
							}
						],
          listType: 1
                }
            }), {})
            KMUTHU.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break

case 'voicechangermenu': {
               
    let buttons = [
        {buttonId: `${prefix}allmenu`, buttonText: {displayText: '⫷ ALL MENU ⫸'}, type: 1},
        {buttonId: `${prefix}alive`, buttonText: {displayText: '⫷ ALIVE ⫸'}, type: 1},
        {buttonId: `${prefix}donate`, buttonText: {displayText: '⫷ INFO ⫸'}, type: 1}]
    let buttonMessage = {
        image: { url: picak+'Voice Changer'},
    caption: `
┏━❯ ${botname} ❮━━😎 
┃╔════💠 VOICE CHANGE 💠═╗	
┃║        
┃╠${dragonemoji} ${prefix}bass [reply aud]
┃╠${dragonemoji} ${prefix}blown [reply aud]
┃╠${dragonemoji} ${prefix}deep [reply aud]
┃╠${dragonemoji} ${prefix}earrape [reply aud]
┃╠${dragonemoji} ${prefix}fast [reply aud]
┃╠${dragonemoji} ${prefix}fat [reply aud]
┃╠${dragonemoji} ${prefix}nightcore [reply aud]
┃╠${dragonemoji} ${prefix}reverse [reply aud]
┃╠${dragonemoji} ${prefix}robot [reply aud]
┃╠${dragonemoji} ${prefix}slow [reply aud]
┃╠${dragonemoji} ${prefix}squirrel [reply aud]
┃╚═════════════☬
┗━━❯ ${pushname} ❮━😎`,
footer: KMUTHU.user.name,
buttons,
headerType: 4
}
KMUTHU.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    KMUTHU.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})