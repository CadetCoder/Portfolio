<template>
    <div class="banner d-flex flex-column justify-center align-items-center  ">

          <div class="intro">
            <p class="ma-0 pa-0">Hello! I'm</p>
            <h1 class="heading ma-0 pa-0 "> Darrel Toledo </h1>
            <h2 class="secondary-text typewrite" data-period="2000" data-type='[ "I code.", "I am a Web Developer", "I Love to Develop", "I Love Design"]'> <span class="wrap"></span></h2>
            <v-btn color="accent" outlined class="btn my-8"><a href="..src/assets/dtoledoCV.pdf" download>get my resume</a>
            </v-btn>
          </div>
    </div>
</template>


<script>
export default {
    name:"banner"
}
</script>


<style lang="scss" >
     .banner {
        text-align: left;
        height:100vh;
        width:100vw;
        background-color: var(--main-bg-color);
        padding: 10%;
    }
    
    .intro{
       
        p {
            margin-left: 10px; 
            padding: 0;
            font-size: 1.5em ;
            font-weight: bold;
            color :var(--dark-accent) ;
        };

        span{
            color : var(--dark-accent);
        }

        .btn{
            color: var(--gray);
        }

      
        .secondary-text{
            color: var(--gray) ;
        }

        .heading {
            margin:0px; 
            padding: 0px;
            font-size: 4em ;
            color : var(--highlight-color);
        }

    }


</style>

<script>
export default {
    data: () => {
        return {
            //
        }
    },
    methods: {
        var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
    },
}
</script>