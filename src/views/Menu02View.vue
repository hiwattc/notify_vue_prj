<template>
  <div class="Menu02">
    <h1>Axios test</h1>
    <div id="app">
     <button v-on:click="fetchData1">get data1</button>
     <button v-on:click="fetchData2">get data2</button>
     <button v-on:click="fetchData3">reset</button>
     <div align="center" border="1">
      <table>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
      </tr>
      <tr v-for="user in users" v-bind:key="user.id">
        <td>{{user.id}}</td>
        <td>{{user.name}}</td>
        <td>{{user.email}}</td>
      </tr>
    </table>    
     <!--<h3 v-for="user in users" v-bind:key="user.id">{{user.name}}</h3>-->

     </div>
     
    </div>

  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Menu02View',
  //props: ["uses"],
  data: function() {
    return {
      users: [
              {"id":"0","name":"test1","email":"test1@gmail.com"},
              {"id":"1","name":"test2","email":"test2@gmail.com"},
              {"id":"2","name":"test3","email":"test3@gmail.com"},
              {"id":"3","name":"test4","email":"test4@gmail.com"},
              {"id":"4","name":"test5","email":"test5@gmail.com"},
              ]
    }
  },
  created(){
    console.log("menu02 created");
  },
  mounted(){
    console.log("menu02 mounted");
  },
  methods: {
  //fetchData1의경우 this가 undefined가 되어 let that=this 로 하면 되긴함
  fetchData1: function() {
    let that = this;
    axios.get('https://jsonplaceholder.typicode.com/users/')
      .then(function(res) {
        //console.log(res.data[0].name);
        //this.users=res.data;
        //this.data.users=res.data;
        that.users=res.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  //fetchData2는 정상실행
  fetchData2() {
    axios.get('https://jsonplaceholder.typicode.com/users/')
      .then(res => this.users = res.data)
      .catch(err => console.log(err));
  },
  //fetchData3는 정상실행
  fetchData3() {
    this.users=
             [ 
              {"id":"0","name":"test1","email":"test1@gmail.com"},
              {"id":"1","name":"test2","email":"test2@gmail.com"},
              {"id":"2","name":"test3","email":"test3@gmail.com"},
              {"id":"3","name":"test4","email":"test4@gmail.com"},
              {"id":"4","name":"test5","email":"test5@gmail.com"},
              ]  }
}
} 
</script>




