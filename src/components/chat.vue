<template>
    <div id="surch">
      <div class="page-header-main">
        <div class="box-flex width-80 margin-auto margin-top-2 flex-direction-row flex-justify-center">
            <span>当前讨论组在线人：</span><span class="margin-right-3" v-for="(val, key) in onlineUser">{{val}}</span>
        </div>
        <div class="box-flex width-80 margin-auto margin-top-2 margin-bottom-110x flex-direction-column" id="message">
        </div>
        <div class="box-flex bg-show width-100 margin-top-2 flex-direction-column flex-justify-center flex-items-center fixed bottom-0">
            <div class="box-flex">
                <span >{{nowUser.username}}</span>
            </div>
            <div class="box-flex width-100 flex-direction-row">
                <div class="box-flex flex-6 width-100 padding-all chat">
                    <el-input type="textarea" :rows="2" placeholder="your message" v-model="textarea"></el-input>
                </div>
                <div class="box-flex flex-1  flex-items-flex-end flex-justify-center margin-bottom-3">
                    <el-button type="primary" @click="doCommit" >发送</el-button>
                </div>
            </div>
            
        </div>
      </div>
    </div>
</template>
<script>
import '@/util/socket.io'
let msgShow=document.getElementById("message")
export default {
  data () {
    return {
      textarea: 'Hello world',
      onlineUser:{},
      nowUser:{}
    }
  },
  beforeCreate: function () {
            this.userid = localStorage.getItem("wetalks_user");
			this.username = 'liuyahui';
			
			//连接websocket后端服务器
			this.socket = io.connect('ws://47.88.2.72:3000');
			
			//告诉服务器端有用户登录
			this.socket.emit('login', {userid:this.userid, username:this.username});
			
			//监听新用户登录
            let self=this
			this.socket.on('login', function(o){
				console.log(o)	
                self.updateSystom(o,'login')
			});
			
			//监听用户退出
			this.socket.on('logout', function(o){
				console.log(o)	
                self.updateSystom(o,'logout')
			});
  },
  created: function(){
			//监听消息发送
			this.socket.on('message', function(obj){
				var isme = (obj.userid == localStorage.getItem("wetalks_user")) ? true : false;
				var contentDiv = '<div>'+obj.content+'</div>';
				var usernameDiv = '<span>'+obj.username+'</span>';
				
				var section = document.createElement('section');
				if(isme){
					section.className = 'user';
					section.innerHTML = contentDiv + usernameDiv;
				} else {
					section.className = 'service';
					section.innerHTML = usernameDiv + contentDiv;
				}
				document.getElementById("message").appendChild(section);
			});
  },
  methods: {
    doCommit:function(){
        let content=this.textarea
        if(this.textarea != ''){
				var obj = {
					'userid': localStorage.getItem("wetalks_user"),
					'username': 'liuyahui',
					'content': content
				};
				this.socket.emit('message', obj);
				this.textarea = ''
                this.scrollToBottom()
		}
		return false;
    },
    cacle: function(){
        this.textarea = ''
    },
    updateSystom: function(item,action){
        this.onlineUser=item.onlineUsers
        this.nowUser=item.user
        let html = '';
        html += '<div class="msg-system">';
        html += item.user.username;
        html += (action == 'login') ? ' 加入了讨论组' : ' 退出了讨论组';
        html += '</div>';
        var section = document.createElement('section');
        section.className = 'system J-mjrlinkWrap J-cutMsg';
        section.innerHTML = html;
        document.getElementById("message").appendChild(section)
    },
    scrollToBottom :function(){
        window.scrollTo(0, document.getElementById("message").clientHeight);
    }
  }
}
</script>
<style >
.chat textarea{height: 3rem!important}
section.user {
  float:right;
  text-align:right;
  margin-bottom: 10px;
}
section.user>div {
  max-width: 225px;
  position:relative;
  display: inline-block;
  padding:8px;
  margin:0 10px 0 12px;
  text-align:left;
  border-radius:10px;
  color:#fff;
  box-shadow: inset 0 0 1px #007aff;
  background-color:#007aff;
  vertical-align: top;
  word-break: break-all;
}

section.service {
  float:left;
  text-align:left;
  margin-bottom: 10px;
}
section.service>div {
  max-width: 225px;
  position:relative;
  display: inline-block;
  padding:8px;
  margin:0 10px 0 12px;
  text-align:left;
  border-radius:10px;
  color:#000;
  box-shadow: inset 0 0 1px #F6F6F6;
  background-color:#F6F6F6;
  vertical-align: top;
  word-break: break-all;
}
.msg-system{
    justify-content: center;
    text-align: center;
    margin: 1rem 0;
    color: #999
}
</style>
