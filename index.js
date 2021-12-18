function send(id, content, embed=null) {
    data = {content: content}
    if (embed) {data['embed'] = embed}
    // Get your authentification token - this is needed to send message on your behalf:
    token = (webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m.exports&&m.exports.default&&m.exports.default.getToken!==''.a).exports.default.getToken()
    var r = new XMLHttpRequest()
    r.open('POST', `https://discord.com/api/channels/${id}/messages`, false)
    r.setRequestHeader('Authorization', token)
    r.setRequestHeader('Content-Type', 'application/json')
    r.send(JSON.stringify(data)) // And send the message
}

function parser(text) {
    if (text.startsWith('%embed')) {
        args = text.replace('%embed', '').split(' //') // Parse command arguments
        if (args.length == 1) {
        send(document.location.href.split('/').slice(-1)[0], '', {'description': args[0], color: 0xa000ff}) // <- You may change the color here
        } else if (args.length == 2) {
        send(document.location.href.split('/').slice(-1)[0], '', {'title': args[0], 'description': args[1], color: 0xa000ff}) // <- Here too
        } else if (args.length == 3) {
        send(document.location.href.split('/').slice(-1)[0], '', {'title': args[0], 'description': args[1], 'footer': {'text': args[2]}, color: 0xa000ff}) // <- And here
        }
    }
}

document.onkeypress = function (arg) {
	if (arg.code == 'Backquote') { // <- Here you can change the button that sends your embed
		text = document.getElementsByClassName('markup-2BOw-j slateTextArea-1Mkdgw fontSize16Padding-3Wk7zP')[0].innerText.trim()
		parser(text)
	}
}
