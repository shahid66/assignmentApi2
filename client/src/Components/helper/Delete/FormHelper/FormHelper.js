let EmailRegx=/\S+@\S+\.\S+/;
let OnlyNumberRegx=/^\d+\.?\d*$/;
let validFileExtension=["jpg","JPG",'PNG',"png"];
let MobileRegx=/(^(\+88|0088)?(01){1}[1234567]{1}(\d){8})$/;

class FormHelper{
    IsEmpty(value){
        return value.length ===0;
    }
    IsMobile(value){
        return !MobileRegx.test(value);
    }
    IsImageValid(imgExtension){
        return validFileExtension.test(imgExtension);
    }
    IsNumber(value){
        return OnlyNumberRegx.test(value);
    }
    IsEmail(value){
        return !EmailRegx.test(value);
    }
    getBase64(file){
        return new Promise((resolve,reject)=>{
           const reader=new FileReader();
           reader.readAsDataURL(file);
           reader.onload=()=>resolve(reader.result);
           reader.onerror=(error)=>reject(error) 
        })
    }
}
export const{
    IsEmail,
    IsImageValid,
    IsEmpty,
    IsMobile,
    IsNumber,
    getBase64
}=new FormHelper() 