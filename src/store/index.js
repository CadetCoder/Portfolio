import Vue from 'vue'
import Vuex from 'vuex'

// import {client} from '../axiosClient'
import _ from 'lodash';


Vue.use(Vuex)


export default new Vuex.Store({
    state: {
      Sociallinks:[
          {
              icon:'mdi-facebook',
              src:'#'
          },
          {
              icon:'mdi-linkedin',
              src:'#'
          },
          {
              icon:'mdi-github',
              src:'#'
          },
          {
              icon:'mdi-instagram',
              src:'#'
          }
      ],
      projects: [
          {
                name:"Go Mike Design",
                description:"Go Mike Design is an optimised SEO Website.",
                tech_stack:["JavaScript"],
                img:".src/assets/GoMike.png",
                url:"https://website-seo.vercel.app/"
            },
            {
                name:"The Travel App",
                description:"App using Vue.js ",
                tech_stack:["Vue"],
                img:"blob:https://vercel.com/a1fbc529-f5e8-47f6-bfd3-7bc86e29e326",
                url:"https://the-travel-app.vercel.app/"
            },
        
        ]

      

  },
    mutations:{
        // addProjects(state,projects){
        //     state.projects = projects
        // }
    },
    getters:{
        projectChunks(state){
            return _.chunk(state.projects,2)
        }
    },
    actions:{
        // async getProjects({commit}){
        //     //let url='http://localhost:8000/projects'
        //     let res=await client.get('projects');
        //     console.log(JSON.stringify(res));
        //     commit('addProjects',res.data);

        // }

    }



})
