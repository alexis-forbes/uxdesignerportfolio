/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from "next/link";

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? 'sub-bg' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Me</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Address</h6>
                    <p>Zenithgatan 18, Malmö</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email</h6>
                    <p>lauraphotocatalan@gmail.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call</h6>
                    <p>0761156889</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/*}
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Recent News</h5>
              </div>
              <ul>
                <li>
                  <div className="img">
                    <img src="/img/blog/1.jpg" alt="" />
                  </div>
                  <div className="sm-post">
                    <p>
                      The Start-Up Ultimate Guide to Make Your WordPress
                      Journal.
                    </p>
                    <span className="date">14 sep 2021</span>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <img src="/img/blog/2.jpg" alt="" />
                  </div>
                  <div className="sm-post">
                    <p>
                      The Start-Up Ultimate Guide to Make Your WordPress
                      Journal.
                    </p>
                    <span className="date">14 sep 2021</span>
                  </div>
                </li>
                <li>
                  <div className="subscribe">
                    <input type="text" placeholder="Type Your Email" />
                    <span className="subs pe-7s-paper-plane"></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        */}
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <Link href="/homepage/home7-light">
                  <a className="nav-item">
                    Laura Catalán
                  </a>
                </Link>
              </div>
              <div className="social">
                <a href="https://www.instagram.com/laura_katalan/?hl=es">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/laura-catal%C3%A1n-595224b7/?originalSubdomain=se">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
              <div className="copy-right">
                <p>
                  © 2022, Laura Catalán.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer