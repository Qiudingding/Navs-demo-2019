// 1.初始化数据

var hashA = init()
var keys = hashA['keys']
var hash = hashA['hash']

// 2.生成键盘

//遍历 keys,生成 kbd 标签
generateKeyboard(keys, hash)

// 3.监听用户动作
listenTouser(hash)

//下面是工具函数

	
function getFromLocalStorage(name){
 	return JSON.parse(localStorage.getItem(name)|| 'null')
}
		
function tag(tagName){
   return document.createElement(tagName)
}
		
function createSpan(textContent){
	  var span = tag('span')
      span.textContent = textContent
      span.className = "text"
      return span
}

function createButton(id){
	var button = tag('button')
    	button.textContent = '编辑'
    	button.id = id
    	button.onclick = function(onclick){
      	// onclick['target']就是用户点击的元素
    		var button2 = onclick['target']
      		var img2 = button2.previousSibling
      		var key = button2['id'] //q w e r t 
      		var x = prompt('请输入网址呦') //qq.com
      		hash[key] = x // hash变更
      		img2.src = 'http://'+x+'/favicon.ico'
      		img2.onerror = function(xxx){
          		xxx.target.src = '//i.loli.net/2019/02/26/5c74e5814884e.png'
        	}
      		localStorage.setItem('zzz', JSON.stringify(hash))
      	}
    return button
}

function createImg(domain){
    var img = tag('img')
        if(domain){
      		img.src = 'http://'+ domain +'/favicon.ico'
          	}else{
      	  		img.src = '//i.loli.net/2019/02/26/5c74e5814884e.png'
       	}
        img.onerror = function(xxx){
        	xxx.target.src = '//i.loli.net/2019/02/26/5c74e5814884e.png'
        }	
    return img		
}
function init(){
      var keys = {'0': {0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},'1': {0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:9},'2': {0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},'length': 3
	  }
      var hash = {'q': 'qq.com','w': 'weibo.com','e': 'ele.me','r': undefined,'t': 'taobao.com','y': 'youku.com','u': undefined,'i': 'iconfont.cn','o': undefined,'p': 'portal.shadowsocks.nu','a': 'alibaba.com.cn','s': undefined,'d': 'dior.cn','f': 'facebook.com','g': undefined,'h': undefined,'j': 'juejin.im','k': undefined,'l': 'linkedin.com','z': 'zhihu.com','x': undefined,'c': undefined,'v': undefined,'b': 'bilibili.com','n': undefined,'m': 'meituan.com',
      }	

// 取出 localStorage 中的 zzz 对应的 hash
		
var hashInLocalStorage = getFromLocalStorage('zzz')
if(hashInLocalStorage){
	hash = hashInLocalStorage
}		
   return {
	"keys": keys,
	"hash": hash
   }
}

function generateKeyboard(key, hash){
         for(var index=0; index< keys['length']; index = index + 1){
         		var div = tag('div')
		div.className = 'row'
    	nav.appendChild(div)
    	var row = keys[index] // 第一个数组 第二个数组 第三个数组
    	for(var index2 = 0; index2< row['length']; index2 = index2 + 1 ){
      		var span = createSpan(row[index2])
      		var button = createButton(row[index2])
      		var img = createImg(hash[row[index2]])
      		var kbd = tag('kbd')    
            		kbd.className = 'key'
      		kbd.appendChild(span) 
      		kbd.appendChild(img)
      		kbd.appendChild(button)
      		div.appendChild(kbd)
    	}
	}
}	

function listenTouser(hash){
	document.onkeypress = function(onkey){
		var key = onkey['key']
		var website = hash[key]
		//location.href = 'http://'+website
		window.open('http://'+website,  '_blank')
	}
}