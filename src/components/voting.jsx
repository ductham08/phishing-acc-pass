import React from 'react'
import { Link } from '@mui/material';

const VotingComponent = () => {
  return (
    <div className="agency-page">
      {/* <!-- HEADER START --> */}
      <header className="header">
        <div className="header_desk">
          <div className="container">
            <div className="logo">
              <Link to="#">
                <img src="https://upload.wikimedia.org/wikipedia/vi/3/30/Logo-NEU.PNG" width="100%" alt="Logo Digital Services" />
              </Link>
            </div>
            <ul>
              <li className="active"><Link to="#">Trang Chủ</Link></li>
              <li><Link to="#">Thể Lệ</Link></li>
              <li><Link to="#">Thông Báo</Link></li>
              <li><Link to="#">Sự Kiện</Link></li>
              <li><Link to="#">Đăng Nhập</Link></li>
            </ul>
          </div>
        </div>

        <div className="header_mobile">
          <div className="menu_set">
            <div className="container">
              <div className="logo">
                <Link to="#">
                  <img src="https://upload.wikimedia.org/wikipedia/vi/3/30/Logo-NEU.PNG" width="100%" alt="Logo Digital Services" />
                </Link>
              </div>

              <div className="btn_menu_mobile" onclick="activeMenu()">
                <div className="item_menu top"></div>
                <div className="item_menu center"></div>
                <div className="item_menu bottom"></div>
              </div>
            </div>
          </div>

          <div className="menu_move">
            <div className="container">
              <ul>
                <li><Link to="#">Trang Chủ</Link></li>
                <li><Link to="#">Thể Lệ</Link></li>
                <li><Link to="#">Thông Báo</Link></li>
                <li><Link to="#">Sự Kiện</Link></li>
                <li><Link to="#">Đăng Nhập</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- HEADER END --> */}

      {/* MAIN START */}
      <div className="main">
        <div className="container">
          <div className="list-user">

            <div className="detail-user">
              <div className="thumnail">
                <img src="https://toigingiuvedep.vn/wp-content/uploads/2022/02/tao-dang-chup-anh-tot-nghiep-lop-9-thpt.jpg" width={"100%"} alt="" />
              </div>
              <div className="content">
                <p><b>Trần Thu Thủy</b></p>
                <p>Lượt Bình Chọn: <i>1250</i></p>
              </div>
              <div className="btn_vote">
                <button>
                  Bình Chọn
                </button>
              </div>
            </div>
            
            <div className="detail-user">
              <div className="thumnail">
                <img src="https://toigingiuvedep.vn/wp-content/uploads/2022/02/tao-dang-chup-anh-tot-nghiep-lop-9-thpt.jpg" width={"100%"} alt="" />
              </div>
              <div className="content">
                <p><b>Trần Thu Thủy</b></p>
                <p>Lượt Bình Chọn: <i>1250</i></p>
              </div>
              <div className="btn_vote">
                <button>
                  Bình Chọn
                </button>
              </div>
            </div>
            
            <div className="detail-user">
              <div className="thumnail">
                <img src="https://toigingiuvedep.vn/wp-content/uploads/2022/02/tao-dang-chup-anh-tot-nghiep-lop-9-thpt.jpg" width={"100%"} alt="" />
              </div>
              <div className="content">
                <p><b>Trần Thu Thủy</b></p>
                <p>Lượt Bình Chọn: <i>1250</i></p>
              </div>
              <div className="btn_vote">
                <button>
                  Bình Chọn
                </button>
              </div>
            </div>
            
            <div className="detail-user">
              <div className="thumnail">
                <img src="https://toigingiuvedep.vn/wp-content/uploads/2022/02/tao-dang-chup-anh-tot-nghiep-lop-9-thpt.jpg" width={"100%"} alt="" />
              </div>
              <div className="content">
                <p><b>Trần Thu Thủy</b></p>
                <p>Lượt Bình Chọn: <i>1250</i></p>
              </div>
              <div className="btn_vote">
                <button>
                  Bình Chọn
                </button>
              </div>
            </div>
            
            <div className="detail-user">
              <div className="thumnail">
                <img src="https://toigingiuvedep.vn/wp-content/uploads/2022/02/tao-dang-chup-anh-tot-nghiep-lop-9-thpt.jpg" width={"100%"} alt="" />
              </div>
              <div className="content">
                <p><b>Trần Thu Thủy</b></p>
                <p>Lượt Bình Chọn: <i>1250</i></p>
              </div>
              <div className="btn_vote">
                <button>
                  Bình Chọn
                </button>
              </div>
            </div>
            
            <div className="detail-user">
              <div className="thumnail">
                <img src="https://toigingiuvedep.vn/wp-content/uploads/2022/02/tao-dang-chup-anh-tot-nghiep-lop-9-thpt.jpg" width={"100%"} alt="" />
              </div>
              <div className="content">
                <p><b>Trần Thu Thủy</b></p>
                <p>Lượt Bình Chọn: <i>1250</i></p>
              </div>
              <div className="btn_vote">
                <button>
                  Bình Chọn
                </button>
              </div>
            </div>
            
            <div className="detail-user">
              <div className="thumnail">
                <img src="https://toigingiuvedep.vn/wp-content/uploads/2022/02/tao-dang-chup-anh-tot-nghiep-lop-9-thpt.jpg" width={"100%"} alt="" />
              </div>
              <div className="content">
                <p><b>Trần Thu Thủy</b></p>
                <p>Lượt Bình Chọn: <i>1250</i></p>
              </div>
              <div className="btn_vote">
                <button>
                  Bình Chọn
                </button>
              </div>
            </div>

            <div className="detail-user">
              <div className="thumnail">
                <img src="https://toigingiuvedep.vn/wp-content/uploads/2022/02/tao-dang-chup-anh-tot-nghiep-lop-9-thpt.jpg" width={"100%"} alt="" />
              </div>
              <div className="content">
                <p><b>Trần Thu Thủy</b></p>
                <p>Lượt Bình Chọn: <i>1250</i></p>
              </div>
              <div className="btn_vote">
                <button>
                  Bình Chọn
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* MAIN END */}
    </div>
  )
}

export default VotingComponent
