
import css from './index.css'

let dom=`

    <div class="progress">
        <div class="progress-bar">
            <div class="progress-bar-inner">
            </div>
        </div>
        <p></p>
    </div>
`;
export default class Progress
{
  el=null
  bar=null
  text=null
  constructor(){
    this.el=document.createElement('div');
    this.el.className="progress-continer";
    this.el.innerHTML=dom;
    this.bar=this.el.querySelector('.progress-bar-inner');
    this.text=this.el.querySelector('p');

    document.querySelector('body').appendChild(this.el);
  }
  progressing(num,text){
    this.el.style.display='block';
    this.bar.style.width=`${num*100}%`;
    this.text.innerHTML=`加载中...${num*100}%`;
  }
  progressend(){
    this.el.style.display='none';
  }

}
