<template>
    <Page class="page">
      <ScrollView>
        <StackLayout class="container" verticalAlignment="center">
          <AbsoluteLayout class="clock-container">
          <AbsoluteLayout class="clock-container__cirle" left="15" top="15">
            <Label class="clock-container__label clock-container__label-red" text="favy" left="90" top="5" />
            <Label class="clock-container__label" text="9" left="8" top="90" />
            <Label class="clock-container__label" text="6" left="95" top="175" />
            <Label class="clock-container__label" text="3" left="180" top="90" />
            <Label originY="1" class="clock-container__pointer hour" :style="{ 'transform': getHour }" left="95" top="45" />
            <Label originY="1" class="clock-container__pointer minute" :style="{ 'transform': getMinute }" left="95" top="30" />
            <Label originY="1" class="clock-container__pointer second" :style="{ 'transform': getSecond }" left="96" top="30" />
          </AbsoluteLayout>
        </AbsoluteLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
  export default{
    mounted(){
      this.updateCurrentTime();
      setInterval(this.updateCurrentTime, 1000);
    },
    data(){
      return{
        htmlString: '<span><h1>HtmlView demo in <font color="blue">NativeScript</font> App</h1></span>',

        hour: 0,
        minute: 0,
        second: 0
      };
    },
    computed:{
      getHour(){
        return "rotate(" + this.hour + "deg);";
      },
      getMinute(){
        return "rotate(" + this.minute + "deg);";
      },
      getSecond(){
        return "rotate(" + this.second + "deg);";
      }
    },
    methods:{
      updateClock(hours, minutes, seconds){
        this.hour = hours * 30;
        this.minute = minutes * 6;
        this.second = seconds * 6;
      },
      updateCurrentTime(){
        let date = new Date();

        let hours = ((date.getHours() + 11) % 12) + 1;
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        this.updateClock(hours, minutes, seconds);
      }
    }
  };
</script>

<style scoped>
  .page{
    /* background: slategray; */
    background: #FFF;
    /* ^^^ might be an issue with android 8 and linear-gradient on android */
  }

  .clock-container{
    width: 240;
    height: 240;
    border-radius: 130;
    border-width: 2;
    border-color: rgba(0, 0, 0, .5);
  }

  .clock-container__cirle{
    width: 220;
    height: 220;
    border-radius: 110;
    border-width: 3;
    border-color: transparent;
    background-color: transparent;
  }

  .clock-container__label{
    color: rgba(0, 0, 0, .6);
    font-size: 16px;
    font-weight: bold;
  }

  .clock-container__label-red{
    color: #A7010E;
  }

  .clock-container__pointer{
    border-radius: 4;
    background-color: #A7010E;
    width: 4;
    height: 70;
  }

  .hour{
    height: 55;
    background-color: #77CCA4;
  }

    .minute{}

    .second{
        width: 2;
        height: 70;
        background-color: #E27633;
    }

    .text__container{
        background-color: #FFF;
    }
</style>
