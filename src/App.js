import React,{Component} from 'react';
import Checkout from './Components/Checkout/checkout';
import classes from './App.module.css';
import data from './data.json';
import Header from './UI/Header/header';
import Modal from './UI/Modal/modal';

class App extends Component {
  state={items:data,price:2760,discount:100,typediscount:82.50,modalshow:false,deleted:null};
  addHandler=(itemindex)=>{
    const item=this.state.items;
    item[itemindex].quantity=item[itemindex].quantity+1;
    var typediscount=this.state.typediscount;
    var price=this.state.price+(item[itemindex].price);
    var discount=this.state.discount+(item[itemindex].discount);
    if(item[itemindex].type=="fiction")
    {
      typediscount=typediscount+(item[itemindex].price)*(0.15);
    }
    this.setState({items:item,price:price,discount:discount,typediscount:typediscount});
  }

  deleteHandler=(itemindex)=>{
    const item=this.state.items;
    var typediscount=this.state.typediscount;
    var price=this.state.price;
    var discount=this.state.discount;
    if(item.length>0)
    {
      discount=discount-(item[itemindex].quantity*item[itemindex].discount);
      price=price-(item[itemindex].quantity*item[itemindex].price);
      if(item[itemindex].type=="fiction")
      {
      typediscount=typediscount-(item[itemindex].quantity*item[itemindex].price)*(0.15);
      }
    }
    var msg=item[itemindex].name;
    var msg2=msg+"Has been deleted!!!";
    item.splice(itemindex,1);
    this.setState({items:item,price:price,discount:discount,typediscount:typediscount,modalshow:true,deleted:msg2})
  }
  purchasecancelHandler=()=>{
    this.setState({modalshow:false});
  }
  subHandler=(itemindex)=>{
    const item=this.state.items;
    if(item[itemindex].quantity>1)
    {
      item[itemindex].quantity=item[itemindex].quantity-1;
      var typediscount=this.state.typediscount;
      var price=this.state.price-(item[itemindex].price);
      var discount=this.state.discount-(item[itemindex].discount);
      if(item[itemindex].type=="fiction")
      {
        typediscount=typediscount-(item[itemindex].price)*(0.15);
      }
      this.setState({items:item,price:price,discount:discount,typediscount:typediscount});
    }
  }
  render(){
  return (
    <div className={classes.App}>
      <h2> &lt; Order Summary</h2>
      <div className={classes.appdiv}>
      <Checkout length={this.state.items.length} price={this.state.price} discount={this.state.discount} typediscount={this.state.typediscount}/>
        <div className={classes.left}>
          <Header length={this.state.items.length}/>
            {this.state.items.map((item,index)=>{console.log(item.length);
                                                  
              return <div className={classes.down}><div className={classes.downleft}>
              <div className={classes.mydiv}>
                  <div className={classes.mydiv2}>
                  <img className={classes.myimage} src={item.img_url}/>
                  <p>{item.name}</p>
                  </div>
                  <button className={classes.mybutton} onClick={()=>this.deleteHandler(index)}>X</button>
              </div>
              </div>
            <div className={classes.downright}>
              <div className={classes.middown}>
                <p><button className={classes.mybutton} onClick={()=>this.subHandler(index)}>-</button></p>
                <div className={classes.quantity}><p>{item.quantity}</p></div>
                <p><button className={classes.mybutton} onClick={()=>this.addHandler(index)}>+</button></p>
              </div>
              <div className={classes.rightdown}>
                <p>${item.price}</p>
              </div>
            </div>
            </div>
            } )}
            <Modal show={this.state.modalshow}  modelClosed={this.purchasecancelHandler}>
              {this.state.deleted}
            </Modal>
          </div>

        </div>
      </div>
  );
          }
}

export default App;
