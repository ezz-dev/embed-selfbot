function send(id, content, embed=null) {
    data = {content: content}
    if (embed) {data['embed'] = embed}
    token = Object.values(webpackJsonp.push([[],{['']:(_,e,r)=>{e.cache=r.c}},[['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getToken!==''.a).exports.default.getToken()
    var r = new XMLHttpRequest()
    r.open('POST', `https://discord.com/api/channels/${id}/messages`, false)
    r.setRequestHeader('Authorization', token)
    r.setRequestHeader('Content-Type', 'application/json')
    r.send(JSON.stringify(data))
}

function parser(text) {
    if (text.startsWith('%embed')) {
        args = text.replace('%embed', '').split(' //')
        if (args.length == 1) {
        send(document.location.href.split('/').slice(-1)[0], '', {'description': args[0], color: 0xa000ff})
        } else if (args.length == 2) {
        send(document.location.href.split('/').slice(-1)[0], '', {'title': args[0], 'description': args[1], color: 0xa000ff})
        } else if (args.length == 3) {
        send(document.location.href.split('/').slice(-1)[0], '', {'title': args[0], 'description': args[1], 'footer': {'text': args[2]}, color: 0xa000ff})
        }
    }};

document.onkeypress = function (arg) {
	if (arg.code == 'Backquote') {
		text = document.getElementsByClassName('markup-2BOw-j slateTextArea-1Mkdgw fontSize16Padding-3Wk7zP')[0].innerText.trim()
		parser(text)
	}
}



