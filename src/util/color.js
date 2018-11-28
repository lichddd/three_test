export default {
  randomColor()
  {
    return Math.floor((Math.random()*0xffffff));
    let color=Math.floor((Math.random()*0xffffff)).toString(16);
    while(color.length<6)
    {
      color="0"+color;
    }
    return parseInt(`0x${color}`,16);
  }
}
