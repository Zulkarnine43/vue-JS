new Vue({
    el:"#app",
   data:{
       src:"download.png",
       link:"https://www.google.com",
       myText:"hello",
       myHtml:"<strong>Hello</strong>",
       age:5,
       age2:7,
       cars:['BMW','FORD'],
       users:{
           name:"shaon",
           age:21,
       },
       formData:{
           firstName:'',
           lastName:''
       },
       a:0,
       b:0,

       salary:10
   },
   methods:{
         greeting(){
           return this.age===6?true:false;
       },
       update(){
           setTimeout(()=>{
               this.age=10
           },2000)
       },
       updateName(){
           this.age=22
       },
       mouseMove(age, event){
           this.age=age;
           console.log(event);
       },
       handleForm(){
           console.log(this.formData);
       }
    },
    computed:{
        addToA(){
            console.log('A');
            return this.a +this.salary
        },
        addToB(){
            console.log('B');
         return this.b +this.salary
     },
    }
 
  });