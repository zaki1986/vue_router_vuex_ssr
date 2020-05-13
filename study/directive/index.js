import Vue from 'vue'

new Vue({
  el: '#root',
  data: {
    arr: [1, 2, 3],
    obj: {
      a: '123',
      b: '456',
      c: '789'
    },
    text: 0,
    active: true,
    html: '<span>this is html</span>',
    radio: ''
  },
  template: `
    <div>
      <div v-if="active" v-pre>Text: {{text}}</div>
      <div v-if="active" v-once>Text: {{text}}</div>
      <div v-if="active">Text: {{text}}</div>
      <div v-else>else content</div>
      <div v-html="html"></div>
      <div>正常：<input type="text" v-model="text"></div>
      <div>转换数字修饰符：<input type="text" v-model.number="text"></div>
      <div>去除前后空格修饰符：<input type="text" v-model.trim="text"></div>
      <div>
        <input type="checkbox" v-model="active">{{active}}
      </div>
      <div>
        <input type="checkbox" value="1" v-model="arr">
        <input type="checkbox" value="2" v-model="arr">
        <input type="checkbox" value="3" v-model="arr">
      </div>
      <div>
        <input type="radio" value="one" v-model="radio">
        <input type="radio" value="two" v-model="radio">
        <input type="radio" value="three" v-model="radio">
      </div>
      <ul>
        <li v-for="(item, index) in arr" :key="item">{{item}} : {{index}}</li>
      </ul>
      <ul>
        <li v-for="(val, key, index) in obj" :key="key">{{val}} : {{key}} : {{index}}</li>
      </ul>
    </div>
  `
})
