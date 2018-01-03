import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $: any;
// import { RegisterService } from '../register.service';
@Component({
  selector: 'app-factory-info',
  templateUrl: './factory-info.component.html',
  styleUrls: ['./factory-info.component.scss']
})
export class FactoryInfoComponent implements OnInit {
  // var $: any;
  CompanyName = '易虎网科技南京有限公司';
  ContactName = '赵三';
  production;
  factoryForm: FormGroup; // <--- heroForm is of type FormGroup
  imgList = [];
  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
  }
  ngOnInit() {
    // this.factoryForm = this.fb.group({
    //   companyName: ['易虎网科技南京有限公司', Validators.required],
    //   contactName: ['赵三', Validators.required],
    //   address: ['', Validators.required],
    //   // category: ['', Validators.required ],
    //   // production: ['', Validators.required ]
    // });
    window.onload = function () {
      var acc = document.getElementsByClassName('accordion');
      var i;
      console.log(acc.length);
      for (i = 0; i < acc.length; i++) {
        // acc[i].onclick = function () {
        //   this.classList.toggle('active');
        //   var panel = this.nextElementSibling;
        //   if (panel.style.maxHeight) {
        //     panel.style.maxHeight = null;
        //   } else {
        //     panel.style.maxHeight = '259px';
        //   }
        // };
      }
    };
  }
  // showMenu() {
  //   this.classList.toggle('active');
  //   var panel = document.getElementsByClassName('panel');
  //   if (panel.style.maxHeight) {
  //     panel.style.maxHeight = null;
  //   } else {
  //     panel.style.maxHeight = '259px';
  //   }
  // }
  add() {
    // $('#production').setValue(101);
    // t.setValue(101);
    // document.getElementById('production').value='101';
    // prd.value = '101';
    // var p = $('')
    // console.log('hello', t.value++);
  }
  deleteImg(index, item) {
    if (item.PicRefNo !== -1) {
      var o = {
        'PicRefNo': item.PicRefNo
      };
      // this.RegisterService.deleteBrandPic(o).subscribe(
      //   data => {
      //     if (data.ResultCode === 0 ) {
      //       this.imgList.splice(index, 1);
      //     }
      //   }
      // );
    }else {
      this.imgList.splice(index, 1);
    }
  }
  selectedFileOnChanged(event: any, type) {
    let file = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload =  () => {
      var arr = reader.result.split(',');
      var str = arr[1];
      // this.RegisterService.upLoadImg(str).subscribe(
      //   data=>{
      //     console.log(data);
      //     this.color = data.ResultCode == 0 ? "success" : "warning";
      //     if(type == '1'){
      //       this.msg1 = data.ResultCode == 0 ?'上传成功':'上传失败';
      //       if(data.ResultCode==0){
      //         this.brandimg = data.Data.ImageUrl
      //       }
      //       setTimeout(()=>{
      //         this.msg1 ="";
      //       },1000)
      //     }else if(type == '2'){
      //       this.msg3 = data.ResultCode == 0 ?'上传成功':'上传失败';
      //       if(data.ResultCode==0){
      //         this.BrandBigicon = data.Data.ImageUrl
      //       }
      //       setTimeout(()=>{
      //         this.msg3 ="";
      //       },1000)
      //     }else{
      //       if(type==3) {
      //         this.msg2 = data.ResultCode == 0 ? '上传成功' : '上传失败';
      //       }else{
      //         this.msg4 = data.ResultCode == 0 ? '上传成功' : '上传失败';
      //       }
      //       if(data.ResultCode==0){//PicRefNo
      //         this.imgList.push({
      //           "PicUrl":data.Data.ImageUrl,
      //           "PicType":type==3?1:2,
      //           "PicRefNo":-1
      //         })
      //       };
      //       setTimeout(()=>{
      //         this.msg2 ="";
      //         this.msg4="";
      //       },1000)
      //     }
      //   }
      // )
    };

  }
  onSubmit({value, valid}) {
    // console.log(this.factoryForm.value);
    // console.log(this.factoryForm.controls['production'].value);
    if (!valid) {
      console.log('invalid');
      return; }
    console.log(JSON.stringify(value));
  }

}
