
new Vue({
    el:"#app4",
    data:{
    name:"shaon"
    },
    methods:{
      updateName(){
        this.name="Zulkar";
      },
      destroyName(){
        this.$destroy()
      }
    },
    beforeCreate(){
      console.log('running before create');
    },
    created(){
      console.log('running created');
    }
    ,
    beforeMount(){
      console.log('running before mount');
    },
    mounted(){
      console.log('running Mounted');
    },
    beforeUpdate(){
      console.log('running before update');
    },
    updated(){
      console.log('running updated');
    },
    beforeDestroy(){
      console.log('running before destroyed');
    },
    destroyed(){
      console.log('running destroyed');
    },


  });
