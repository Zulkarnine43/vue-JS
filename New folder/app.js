// const app11=new Vue({
//     el:"#app",
//    data:{
//   a:0,
//   link:"http://google.com",
//   name:"",
//   value:"first"
//    },
//    methods:{
//     ChangeValue(){
//         app12.value='changed';
//     }
//    }
//   });

//   const app12=new Vue({
//     el:"#app2",
//    data:{
//   value:"first"
//    }
//   });

//   const app13=new Vue({
//     el:"",
//    data:{
//   name:"first"
//    },
//    template:`<p>This is second instances {{name}}</p>`
//   });

//   setTimeout(()=>{
//     app13.$mount('#app3')
//   },2000)

  Vue.component('shaon',{
      data(){
          return{
          name:'Zulkar'
          }
      },
      template:`<p>{{name}}</p>`
  });

new Vue({
    el:"#app4",
  });
