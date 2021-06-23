new Vue({
    el:"#app",
   data:{
       title:"Zulkar",
       cars:['ford', 'toyota'],
       robot:{
           name:'frank',
       }
    //    greeting:()=>{
    //        return "hello world";
    //    }
   },
   methods:{
         greeting(){
           return this.title;
       }
   }
  });