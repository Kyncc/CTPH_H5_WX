import * as types from './mutationTypes'
import * as getters from './getters'
import * as actions from './actions'

const state = {
  order:{
    buy_amount:'',
    delivery_at:'',
    k_percent:'',
    n_percent:'',
    p_percent:'',
    pay_type:'',
    product_id:'',
    product_price: '',
    product_name: '',
    product_specification: '',
    product_specification_id: '',
    receiver_address_id:'',
    shop_id:'',
    shop_name:'',
    total_deal_price:''
  },
  waitOrderId:'',
  offline_pay:{
    bank_account:"",
    bank_name:"",
    bankcard_no:"",	
    seller_phone:"",
    total_deal_price:""
  }
}

const mutations = {
  [types.PERSONAL_SHOP_INFO](state , data){
    state.order.shop_id = data.shop_id
    state.order.shop_name = data.shop_name
    state.order.product_id = data.product_id
    state.order.product_name = data.product_name
    state.order.product_price = data.product_price
    state.order.product_specification = data.product_specification
    state.order.product_specification_id = data.product_specification_id
  },
  [types.PERSONAL_ORDER_GOODSINFO](state , data){
    state.order.k_percent = data.k_percent
    state.order.n_percent = data.n_percent
    state.order.p_percent = data.p_percent
    state.order.total_deal_price = data.total_deal_price
    state.order.buy_amount = data.buy_amount
  },
  [types.PERSONAL_ORDER_USERINFO](state , data){
     state.order.pay_type = data.pay_type
     state.order.delivery_at = data.delivery_at
     state.order.receiver_address_id = data.receiver_address_id
  },
  [types.PERSONAL_WAIT_ORDERID](state , data){
     state.waitOrderId = data
  },
  [types.PERSONAL_CLEAR](state){
    this.order.buy_amount  = ''
    this.order.delivery_at = ''
    this.order.k_percent = ''
    this.order.n_percent = ''
    this.order.p_percent = ''
    this.order.pay_type = ''
    this.order.product_id = ''
    this.order.product_price = ''
    this.order.product_name = ''
    this.order.product_specification = ''
    this.order.product_specification_id = ''
    this.order.receiver_address_id = ''
    this.order.shop_id = ''
    this.order.shop_name = ''
    this.order.total_deal_price = ''
    this.waitOrderId = ''
  },
  [types.PERSONAL_ORDER_FINISH](state,data){
    this.offline_pay.bank_account = data.bank_account
    this.offline_pay.bank_name = data.bank_name
    this.offline_pay.bankcard_no = data.bankcard_no
    this.offline_pay.seller_phone = data.seller_phone
    this.offline_pay.total_deal_price = data.total_deal_price
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}