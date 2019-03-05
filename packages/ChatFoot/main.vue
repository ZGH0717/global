<template>
  <div class="chat-foot">
    <div class="mask" v-if="showEmoji" @click="_close"></div>

    <div class="bgf pd10 borderT borderB clearfix ">
      <div class=" l fs14  ft-input">
        <div class="borderB" :class="{active:isFocus}">
          <textarea class="w90" v-model.trim="currentValue" @focus="showEmoji=false,isFocus=true" @blur="isFocus=false"></textarea>
        </div>
        <!--<input class="w100 h100 text-indent" v-model.trim="currentValue" maxlength="300" type="text">-->
        <div class=" emoji-btn" @click="changeShowHandle"></div>
      </div>
      <button class="r fs12 color3" type="button" @click="sendHandle">发送</button>
    </div>
    <transition name="">
      <div class="emoji-content bgf  pdT10" v-show="showEmoji">
        <span class="pdL10 pdR10 pdT5 pdB5 middle fs20" v-for="(item,index) in list" :key="index" @click="bindClick(item)">{{item}}</span>
      </div>
    </transition>
  </div>
</template>

<script>
  var emoji = require('emoji');
  var EMOJI_MAP = emoji.EMOJI_MAP;

  export default {
    name: "IChatFoot",
    props:{
      value:{
        type:String,
        default:''
      }
    },
    data() {
      return {
        currentValue: this.value,
        showEmoji:false,
        isFocus:false
      }
    },
    computed: {
      list() {
        let attr = []
        for (var key in EMOJI_MAP) {
          attr.push(key);
        }
        return attr
      }
    },
    watch:{
      value(val){
        this.currentValue=val
      },
      currentValue(val){
        this.$emit('input',val)
      }
    },
    mounted() {
    },
    methods: {
      _close(){
        this.showEmoji=false;
      },
      _show(){
        this.showEmoji=true;
      },
      sendHandle() {
        this._close()
        this.$emit('sendHandle', this.currentValue)
      },
      bindClick(item) {
        this.currentValue+=item
      },
      changeShowHandle(){
        setTimeout(()=>{
          this._show()
        },100)
      }
    }
  }
</script>
