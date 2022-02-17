<template>
    <div id="about"> 
      <v-row>
          <v-col class="col-xs-12">
            
            <h2> ABOUT ME</h2>
            <p>Who Am I?</p>
            <p>A junior web developer, who aims to work with small businesses and marginalised communities to bring their passions to life.</p>
            <p> Currently I focus on MEVN stack and wordpress, but still exploring other technologies and frameworks that catch my interest! if you're looking for a developer to add to your team, I'd love to hear from you!</p>
          </v-col>
          <v-col class="col-xs-12">
              <v-img src="../assets/portrait.jpg" max-width="500px" contain >

              </v-img>
          </v-col>
      </v-row>
    </div>
</template>

<script>
export default {
    name : 'about'
}
</script>


<style lang="scss" scoped > 
    #about{
        padding-left: 10%;

       h2{  
           text-transform: uppercase;
           font-weight: bold;
           color:var(--accent-color);
           padding-top:15px;
        }
        p {
             padding-block: 10px;
             padding-right: 10px;
             font-weight: 400;
             color: var(--gray);
             font-size: 1.3em;
        }
    }

</style>