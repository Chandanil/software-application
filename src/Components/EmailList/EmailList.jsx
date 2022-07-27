import "./EmailList.scss";
import Pagination from 'react-bootstrap/Pagination';
import {useState} from 'react';
import $ from 'jquery';

export const EmailList = () => {
  let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}
const [selectall,setSelectAll] = useState(false)


$(document).ready(function(){
  $('.selectall').on("change",function(){
    if($(this).is(":checked")){
      $('.item-select').find('input[type="checkbox"]').each(function(){
        $(this).attr('checked','true');
      })
      
    }else{
      $('.item-select').find('input[type="checkbox"]').each(function(){
        $(this).removeAttr('checked');
      })
    }
   
  })

  // $('input[type="checkbox"]').on("change",function(){
  //   if($(this).is(":checked")){
  //     $(this).attr('checked','true');
  //   }else{
  //     $(this).removeAttr('checked');
  //   }
  // })
})
  return (
    <>
      <div className="emaillist">
        <div className="cl-header">
          <h5 className="title">@ Email</h5>
        </div>
        <div className="email-body">
          <div className="select-all">
            <input type="checkbox" class="selectall"/>
            <label>Select All</label>
          </div>
          <ul>
            <li className="list-item">
              <div className="item">
                <img src="Images/team.jpg" className="small-image" />
                <div className="name">
                  <h5 className="title">Chandani Lama</h5>
                  <span className="sub-title">
                    User-friendly value-added application
                  </span>
                </div>
                <div className="list-icon">
                  <i className="fa fa-paperclip"></i>
                  <span className="status"></span>
                  <span className="time">10:40 AM</span>
                </div>
              </div>
              <div className="item-select">
                <input type="checkbox" />
                <i className="fa fa-star"></i>
                <span>
                  wellish lamman fanfoa ifisfi wellish lamman fanfoa ifisfi
                </span>
              </div>
            </li>
            <li className="list-item">
              <div className="item">
                <img src="Images/team.jpg" className="small-image" />
                <div className="name">
                  <h5 className="title">Chandani Lama</h5>
                  <span className="sub-title">
                    User-friendly value-added application
                  </span>
                </div>
                <div className="list-icon">
                  <i className="fa fa-paperclip"></i>
                  <span className="status"></span>
                  <span className="time">10:40 AM</span>
                </div>
              </div>
              <div className="item-select">
                <input type="checkbox" />
                <i className="fa fa-star"></i>
                <span>
                  wellish lamman fanfoa ifisfi wellish lamman fanfoa ifisfi
                </span>
              </div>
            </li>
            <li className="list-item">
              <div className="item">
                <img src="Images/team.jpg" className="small-image" />
                <div className="name">
                  <h5 className="title">Chandani Lama</h5>
                  <span className="sub-title">
                    User-friendly value-added application
                  </span>
                </div>
                <div className="list-icon">
                  <i className="fa fa-paperclip"></i>
                  <span className="status"></span>
                  <span className="time">10:40 AM</span>
                </div>
              </div>
              <div className="item-select">
                <input type="checkbox" />
                <i className="fa fa-star"></i>
                <span>
                  wellish lamman fanfoa ifisfi wellish lamman fanfoa ifisfi
                </span>
              </div>
            </li>
            <li className="list-item">
              <div className="item">
                <img src="Images/team.jpg" className="small-image" />
                <div className="name">
                  <h5 className="title">Chandani Lama</h5>
                  <span className="sub-title">
                    User-friendly value-added application
                  </span>
                </div>
                <div className="list-icon">
                  <i className="fa fa-paperclip"></i>
                  <span className="status"></span>
                  <span className="time">10:40 AM</span>
                </div>
              </div>
              <div className="item-select">
                <input type="checkbox" />
                <i className="fa fa-star"></i>
                <span>
                  wellish lamman fanfoa ifisfi wellish lamman fanfoa ifisfi
                </span>
              </div>
            </li>
          </ul>
          <div>
    <Pagination className="cl-pagination" size="sm">{items}</Pagination>
  </div>
        </div>
      </div>
    </>
  );
};
