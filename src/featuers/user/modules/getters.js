/**
 * Created by pans0911 on 2017/2/20.
 */
export const InfoLnglat = (state) => state
export const AddressList = (state) => state.address_list
export const AddressSelect = (state) => {
  if(state.selected_address.user_id){
    return state.selected_address
  }else{
    return state.address_list[0]
  }
}
  