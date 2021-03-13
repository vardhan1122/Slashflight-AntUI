import React from 'react';
import { Avatar } from "antd";
import { Button } from "antd";
import { Col } from "antd";
import { Layout } from "antd";
import { Menu } from "antd";
import { Row } from "antd";
import { Typography } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { EnvironmentOutlined } from "@ant-design/icons";
import { FilterOutlined } from "@ant-design/icons";
import { HomeOutlined } from "@ant-design/icons";
import { RocketOutlined } from "@ant-design/icons";
import { SettingOutlined } from "@ant-design/icons";
import { StockOutlined } from "@ant-design/icons";
import { SwapOutlined } from "@ant-design/icons";
import { UnorderedListOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import { WalletOutlined } from "@ant-design/icons";

function SlashflightAntUI(props) {
  return (
    <div>
      <Layout>
        <Layout
          style={{
            backgroundColor: "rgba(155,155,155,0.9)",
            borderRadius: "20px",
            padding: "20px",
          }}
        >
          <Row style={{ backgroundColor: "#f0f1f5", borderRadius: "20px" }}>
            <Col
              sm={7}
              xs={7}
              lg={4}
              md={5}
              style={{
                backgroundColor: "#4c56c0",
                borderRadius: "20px",
                paddingBottom: "20px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#4852b6",
                  paddingBottom: "20px",
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                  textAlign: "center",
                }}
              >
                <Row
                  align="middle"
                  justify="space-around"
                  style={{ paddingTop: "40px" }}
                >
                  <Col sm={24} lg={24} xl={24} md={24}>
                    <Avatar
                      shape="circle"
                      size="default"
                      src="https://images.unsplash.com/photo-1543132220-4bf3de6e10ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzA0fHxiaXNzaW5lc3MlMjBtZW4lMjBwcm9maWxlJTIwcGljc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      style={{ width: "60px", height: "60px" }}
                    />
                  </Col>
                  <Col xl={24} style={{ marginTop: "15px" }}>
                    <Typography.Text
                      style={{
                        color: "rgba(255,255,255,0.95)",
                        fontSize: "17px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      VARDHAN KUMAR
                    </Typography.Text>
                  </Col>
                  <Col style={{ marginTop: "5px" }}>
                    <Typography.Text
                      style={{
                        color: "rgba(255,255,255,0.78)",
                        fontSize: "12px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      vardhan.vr90@gmail.com
                    </Typography.Text>
                  </Col>
                </Row>
              </div>
              <div style={{ color: "#ffffff", background: "none" }}>
                <Menu
                  triggerSubMenuAction="click"
                  theme="dark"
                  style={{ color: "#ffffff", background: "none" }}
                >
                  <Menu.Item
                    icon={
                      <HomeOutlined
                        style={{ color: "#84ce95", fontSize: "20px" }}
                      />
                    }
                    style={{
                      color: "#ffffff",
                      fontSize: "14px",
                      marginTop: "20px",
                    }}
                  >
                    DASHBOARD
                  </Menu.Item>
                  <Menu.Item
                    icon={
                      <RocketOutlined
                        style={{
                          color: "#84ce95",
                          marginLeft: "-5px",
                          fontSize: "20px",
                        }}
                      />
                    }
                    style={{
                      marginLeft: "5px",
                      borderBottomLeftRadius: "10px",
                      color: "#000000",
                      background: "#f0f1f5",
                      fontSize: "14px",
                      borderTopLeftRadius: "10px",
                      marginTop: "20px",
                    }}
                  >
                    FLIGHT
                  </Menu.Item>
                  <Menu.Item
                    icon={
                      <WalletOutlined
                        style={{ color: "#84ce95", fontSize: "20px" }}
                      />
                    }
                    style={{
                      color: "#ffffff",
                      fontSize: "14px",
                      marginTop: "20px",
                    }}
                  >
                    WALLET
                  </Menu.Item>
                  <Menu.Item
                    icon={
                      <UnorderedListOutlined
                        style={{ color: "#84ce95", fontSize: "20px" }}
                      />
                    }
                    style={{
                      color: "#ffffff",
                      fontSize: "14px",
                      marginTop: "20px",
                    }}
                  >
                    REPORTS
                  </Menu.Item>
                  <Menu.Item
                    icon={
                      <StockOutlined
                        style={{ color: "#84ce95", fontSize: "20px" }}
                      />
                    }
                    style={{
                      color: "#ffffff",
                      fontSize: "14px",
                      marginTop: "20px",
                    }}
                  >
                    STATISTICS
                  </Menu.Item>
                  <Menu.Item
                    icon={
                      <SettingOutlined
                        style={{ color: "#84ce95", fontSize: "20px" }}
                      />
                    }
                    style={{
                      color: "#ffffff",
                      fontSize: "14px",
                      marginTop: "20px",
                    }}
                  >
                    SETTINGS
                  </Menu.Item>
                </Menu>
              </div>
              <div
                style={{
                  marginLeft: "20px",
                  marginTop: "30px",
                  marginBottom: "10px",
                  marginRight: "20px",
                }}
              >
                <Row>
                  <Col>
                    <Typography.Title
                      style={{ color: "#84ce95", fontSize: "13px" }}
                    >
                      ACTIVE USERS
                    </Typography.Title>
                  </Col>
                </Row>
              </div>
              <div style={{ margin: "5px" }}>
                <Row>
                  <Col>
                    <Avatar.Group style={{ marginLeft: "10px" }}>
                      <Avatar
                        shape="circle"
                        src="https://images.unsplash.com/photo-1573165850883-9b0e18c44bd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        style={{
                          marginLeft: "-10px",
                          width: "32px",
                          borderColor: "#4852b6",
                          background: "#84ce95",
                          height: "32px",
                        }}
                      />
                    </Avatar.Group>
                    <Avatar.Group>
                      <Avatar
                        src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjYxfHxiaXNzaW5lc3MlMjBtZW4lMjBwcm9maWxlJTIwcGljc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        style={{
                          marginLeft: "-10px",
                          width: "32px",
                          borderColor: "#4852b6",
                          background: "#84ce95",
                          height: "32px",
                        }}
                      />
                    </Avatar.Group>
                    <Avatar.Group>
                      <Avatar
                        src="https://images.unsplash.com/photo-1573495611745-41a6963351ed?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDQxfHxiaXNzaW5lc3MlMjB3b21lbiUyMHByb2ZpbGUlMjBwaWNzfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"
                        style={{
                          marginLeft: "-10px",
                          width: "32px",
                          borderColor: "#4852b6",
                          background: "#84ce95",
                          height: "32px",
                        }}
                      />
                    </Avatar.Group>
                    <Avatar.Group>
                      <Avatar
                        src="https://images.unsplash.com/flagged/photo-1553642618-de0381320ff3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTEyfHxiaXNzaW5lc3MlMjBtZW4lMjBwcm9maWxlJTIwcGljc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        style={{
                          marginLeft: "-10px",
                          width: "32px",
                          borderColor: "#4852b6",
                          background: "#84ce95",
                          height: "32px",
                        }}
                      />
                    </Avatar.Group>
                    <Avatar.Group>
                      <Avatar
                        style={{
                          marginLeft: "-10px",
                          width: "32px",
                          borderColor: "#4852b6",
                          background: "#84ce95",
                          height: "32px",
                        }}
                      >
                        <Typography.Text>+71</Typography.Text>
                      </Avatar>
                    </Avatar.Group>
                  </Col>
                </Row>
              </div>
              <div style={{ margin: "10px" }}>
                <img
                  src="https://www.thinkholsinger.com/wp-content/uploads/2015/07/World-2_980x400.jpg"
                  style={{ width: "100%", borderRadius: "10px" }}
                ></img>
              </div>
            </Col>
            <Col
              sm={17}
              xs={17}
              lg={20}
              md={19}
              style={{ marginBottom: "30px" }}
            >
              <div
                style={{
                  borderRadius: "20px",
                  backgroundColor: "#ffffff",
                  padding: "10px",
                  margin: "20px",
                }}
              >
                <Row>
                  <Col sm={24} lg={12} xs={24} xl={12} md={24}>
                    <div
                      style={{
                        backgroundColor: "#f0f1f5",
                        borderRadius: "20px",
                        padding: "10px",
                        margin: "10px",
                        textAlign: "center",
                      }}
                    >
                      <Row>
                        <Col lg={10} xs={11} xl={10} md={10}>
                          <Button
                            icon={
                              <EnvironmentOutlined
                                style={{
                                  color: "#84ce95",
                                  fontSize: "17px",
                                  fontWeight: "900",
                                }}
                              />
                            }
                            style={{
                              border: "none",
                              marginLeft: "-16px",
                              color: "rgba(74,74,74,0.92)",
                              background: "none",
                              fontWeight: "600",
                              fontSize: "12px",
                              fontFamily: "sans-serif",
                            }}
                          >
                            NEW YORK (JFK)
                          </Button>
                        </Col>
                        <Col lg={4} xs={2} xl={4} md={4}>
                          <Button
                            icon={
                              <SwapOutlined
                                style={{
                                  borderRadius: "50px",
                                  padding: "8px",
                                  fontSize: "15px",
                                  color: "#ffffff",
                                  background: "#84ce95",
                                }}
                              />
                            }
                            style={{
                              border: "none",
                              marginLeft: "-16px",
                              marginTop: "-5px",
                              background: "none",
                            }}
                          />
                        </Col>
                        <Col lg={10} xs={11} xl={10} md={10}>
                          <Button
                            icon={
                              <EnvironmentOutlined
                                style={{ color: "#84ce95", fontSize: "17px" }}
                              />
                            }
                            style={{
                              border: "none",
                              marginLeft: "-16px",
                              color: "rgba(74,74,74,0.92)",
                              background: "none",
                              fontWeight: "600",
                              fontSize: "12px",
                              fontFamily: "sans-serif",
                            }}
                          >
                            BOMBAY (BOM)
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col sm={12} lg={6} xs={12} xl={6} md={12}>
                    <div
                      style={{
                        borderRadius: "20px",
                        padding: "10px",
                        margin: "10px",
                        background: "#f0f1f5",
                        textAlign: "center",
                      }}
                    >
                      <input
                        type="date"
                        style={{
                          border: "none",
                          marginLeft: "-7px",
                          outline: "none",
                          color: "rgba(74,74,74,0.92)",
                          background: "none",
                          fontWeight: "500",
                          width: "141px",
                          fontSize: "15px",
                        }}
                      ></input>
                    </div>
                  </Col>
                  <Col sm={12} lg={6} xs={12} xl={6} md={12}>
                    <div
                      style={{
                        borderRadius: "20px",
                        padding: "10px",
                        margin: "10px",
                        background: "#f0f1f5",
                        textAlign: "center",
                      }}
                    >
                      <Button
                        icon={
                          <UserOutlined
                            style={{
                              color: "#84ce95",
                              fontSize: "17px",
                              fontWeight: "900",
                            }}
                          />
                        }
                        style={{
                          border: "none",
                          fontSize: "12px",
                          fontFamily: "sans-serif",
                          color: "rgba(74,74,74,0.92)",
                          background: "none",
                          fontWeight: "600",
                        }}
                      >
                        2 TRAVELLER
                      </Button>
                    </div>
                  </Col>
                  <Col sm={24} xs={24} lg={12} xl={12} md={24}>
                    <div
                      style={{
                        borderRadius: "20px",
                        padding: "5px",
                        margin: "10px",
                        background: "#f0f1f5",
                        textAlign: "center",
                      }}
                    >
                      <Row>
                        <Col
                          xs={8}
                          style={{
                            borderRadius: "20px",
                            paddingTop: "5px",
                            paddingBottom: "5px",
                            background: "#84ce95",
                          }}
                        >
                          <Button
                            style={{
                              border: "none",
                              fontSize: "12px",
                              fontFamily: "sans-serif",
                              color: "rgba(255,255,255,0.88)",
                              background: "none",
                              fontWeight: "600",
                            }}
                          >
                            ONE WAY
                          </Button>
                        </Col>
                        <Col
                          xs={8}
                          style={{ paddingTop: "5px", paddingBottom: "5px" }}
                        >
                          <Button
                            style={{
                              border: "none",
                              fontSize: "12px",
                              fontFamily: "sans-serif",
                              color: "rgba(74,74,74,0.92)",
                              background: "none",
                              fontWeight: "600",
                            }}
                          >
                            ROUND TRIP
                          </Button>
                        </Col>
                        <Col
                          xs={8}
                          style={{ paddingTop: "5px", paddingBottom: "5px" }}
                        >
                          <Button
                            style={{
                              border: "none",
                              fontSize: "12px",
                              fontFamily: "sans-serif",
                              color: "rgba(74,74,74,0.92)",
                              background: "none",
                              fontWeight: "600",
                            }}
                          >
                            MULTI CITY
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col sm={12} xs={12} lg={6} xl={6} md={12}>
                    <div
                      style={{
                        borderRadius: "20px",
                        padding: "10px",
                        margin: "10px",
                        background: "#f0f1f5",
                        textAlign: "center",
                      }}
                    >
                      <Button
                        icon={
                          <FilterOutlined
                            style={{
                              color: "#84ce95",
                              fontSize: "17px",
                              fontWeight: "900",
                            }}
                          />
                        }
                        style={{
                          border: "none",
                          fontSize: "12px",
                          fontFamily: "sans-serif",
                          color: "rgba(74,74,74,0.92)",
                          background: "none",
                          fontWeight: "600",
                        }}
                      >
                        FIRST CLASS
                      </Button>
                    </div>
                  </Col>
                  <Col sm={12} xs={12} lg={6} xl={6} md={12}>
                    <div
                      style={{
                        borderRadius: "20px",
                        padding: "10px",
                        margin: "10px",
                        background: "#4852b6",
                        textAlign: "center",
                      }}
                    >
                      <Button
                        style={{
                          border: "none",
                          fontSize: "12px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.88)",
                          background: "none",
                          fontWeight: "600",
                        }}
                      >
                        SEARCH
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
              <div style={{ margin: "40px 20px", marginTop: "60px" }}>
                <Row align="middle">
                  <Col sm={24} xs={24} lg={12} xl={12} md={10}>
                    <div>
                      <Typography.Title
                        style={{
                          fontSize: "17px",
                          fontFamily: "sans-serif",
                          color: "rgba(74,74,74,0.96)",
                          fontWeight: "600",
                        }}
                      >
                        RESULTS (25)
                      </Typography.Title>
                    </div>
                  </Col>
                  <Col sm={6} lg={4} xs={6} xl={4} md={4}>
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "20px",
                        textAlign: "center",
                      }}
                    >
                      <Typography.Title
                        style={{
                          fontSize: "14px",
                          padding: "10px 0px",
                          fontFamily: "sans-serif",
                          color: "rgba(155,155,155,0.6)",
                          fontWeight: "600",
                        }}
                      >
                        FILTER
                      </Typography.Title>
                    </div>
                  </Col>
                  <Col sm={2} lg={2} xs={2} xl={2} md={2} />
                  <Col sm={16} xs={16} lg={6} xl={6} md={8}>
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "20px",
                        display: "flex",
                        paddingTop: "5px",
                        paddingLeft: "5px",
                        justifyContent: "center",
                      }}
                    >
                      <Typography.Title
                        style={{
                          fontSize: "14px",
                          padding: "5px 15px",
                          color: "rgba(155,155,155,0.6)",
                          fontWeight: "600",
                        }}
                      >
                        TICKET OF CLASS
                      </Typography.Title>
                      <Button
                        icon={
                          <CaretDownOutlined style={{ fontSize: "20px" }} />
                        }
                        style={{
                          border: "none",
                          background: "none",
                          color: "rgba(74,74,74,0.67)",
                          marginLeft: "-15px",
                          marginTop: "-5px",
                        }}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
              <div style={{ margin: "20px" }}>
                <Row>
                  <Col sm={24} xs={24} lg={16} xl={16} md={24}>
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "20px",
                        padding: "20px",
                      }}
                    >
                      <Row>
                        <Col xs={4}>
                          <div style={{ textAlign: "center" }}>
                            <img
                              src="https://i.pinimg.com/originals/2e/e8/f0/2ee8f07cf98ec8ef0875a0d2e24f27e8.png"
                              style={{ width: "60px", height: "60px" }}
                            ></img>
                          </div>
                        </Col>
                        <Col xs={4}>
                          <div style={{ textAlign: "center" }}>
                            <Typography.Title
                              style={{
                                color: "rgba(74,74,74,0.94)",
                                fontSize: "20px",
                              }}
                            >
                              JFK
                            </Typography.Title>
                            <Typography.Title
                              style={{
                                color: "rgba(74,74,74,0.92)",
                                fontSize: "12px",
                              }}
                            >
                              13:00
                            </Typography.Title>
                          </div>
                        </Col>
                        <Col xs={6} style={{ marginTop: "5px" }}>
                          <div style={{ textAlign: "center" }}>
                            <Typography.Title
                              style={{
                                fontSize: "10px",
                                fontFamily: "sans-serif",
                                color: "rgba(74,74,74,0.92)",
                                fontWeight: "600",
                              }}
                            >
                              EMIRATES
                            </Typography.Title>
                            <Typography.Title
                              style={{
                                fontSize: "12px",
                                fontFamily: "sans-serif",
                                marginTop: "-1px",
                                color: "#84ce95",
                                fontWeight: "600",
                              }}
                            >
                              11H:20M
                            </Typography.Title>
                            <Typography.Title
                              style={{
                                fontSize: "12px",
                                fontFamily: "sans-serif",
                                marginTop: "-1px",
                                color: "rgba(74,74,74,0.92)",
                                fontWeight: "600",
                              }}
                            >
                              NON-STOP
                            </Typography.Title>
                          </div>
                        </Col>
                        <Col xs={4}>
                          <div style={{ textAlign: "center" }}>
                            <Typography.Title
                              style={{
                                color: "rgba(74,74,74,0.94)",
                                fontSize: "20px",
                              }}
                            >
                              BOM
                            </Typography.Title>
                            <Typography.Title
                              style={{
                                color: "rgba(74,74,74,0.92)",
                                fontSize: "12px",
                              }}
                            >
                              14:20
                            </Typography.Title>
                          </div>
                        </Col>
                        <Col xs={6}>
                          <div style={{ textAlign: "center" }}>
                            <div style={{ marginLeft: "34px" }}>
                              <i
                                className="fas fa-dollar-sign"
                                style={{ color: "rgba(0,0,0,0.93)" }}
                              ></i>
                              <Typography.Text
                                style={{
                                  color: "rgba(0,0,0,0.93)",
                                  fontSize: "14px",
                                  fontWeight: "500",
                                }}
                              >
                                1,572
                              </Typography.Text>
                            </div>
                            <Button
                              style={{
                                border: "none",
                                borderRadius: "15px",
                                color: "rgba(255,255,255,0.88)",
                                background: "#84ce95",
                                fontWeight: "600",
                                fontSize: "10px",
                                marginTop: "10px",
                                fontFamily: "sans-serif",
                              }}
                            >
                              BOOK NOW
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div
                      style={{ borderTop: "1px dashed #f0f1f5", margin: "0px" }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "20px",
                        padding: "20px",
                      }}
                    >
                      <Row>
                        <Col xs={4}>
                          <div style={{ textAlign: "center" }}>
                            <img
                              src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Hawaiian_Airlines_logo_2017.svg/1200px-Hawaiian_Airlines_logo_2017.svg.png"
                              style={{ width: "60px", height: "60px" }}
                            ></img>
                          </div>
                        </Col>
                        <Col xs={4}>
                          <div style={{ textAlign: "center" }}>
                            <Typography.Title
                              style={{
                                color: "rgba(74,74,74,0.94)",
                                fontSize: "20px",
                              }}
                            >
                              JFK
                            </Typography.Title>
                            <Typography.Title
                              style={{
                                color: "rgba(74,74,74,0.92)",
                                fontSize: "12px",
                              }}
                            >
                              13:00
                            </Typography.Title>
                          </div>
                        </Col>
                        <Col xs={6} style={{ marginTop: "5px" }}>
                          <div style={{ textAlign: "center" }}>
                            <Typography.Title
                              style={{
                                fontSize: "10px",
                                fontFamily: "sans-serif",
                                color: "rgba(74,74,74,0.92)",
                                fontWeight: "600",
                              }}
                            >
                              HUWAIIAN AIRWAYS
                            </Typography.Title>
                            <Typography.Title
                              style={{
                                fontSize: "12px",
                                fontFamily: "sans-serif",
                                marginTop: "-1px",
                                color: "#84ce95",
                                fontWeight: "600",
                              }}
                            >
                              11H:20M
                            </Typography.Title>
                            <Typography.Title
                              style={{
                                fontSize: "12px",
                                fontFamily: "sans-serif",
                                marginTop: "-1px",
                                color: "rgba(74,74,74,0.92)",
                                fontWeight: "600",
                              }}
                            >
                              NON-STOP
                            </Typography.Title>
                          </div>
                        </Col>
                        <Col xs={4}>
                          <div style={{ textAlign: "center" }}>
                            <Typography.Title
                              style={{
                                color: "rgba(74,74,74,0.94)",
                                fontSize: "20px",
                              }}
                            >
                              BOM
                            </Typography.Title>
                            <Typography.Title
                              style={{
                                color: "rgba(74,74,74,0.92)",
                                fontSize: "12px",
                              }}
                            >
                              14:20
                            </Typography.Title>
                          </div>
                        </Col>
                        <Col xs={6}>
                          <div style={{ textAlign: "center" }}>
                            <div style={{ marginLeft: "34px" }}>
                              <i
                                className="fas fa-dollar-sign"
                                style={{ color: "rgba(0,0,0,0.93)" }}
                              ></i>
                              <Typography.Text
                                style={{
                                  color: "rgba(0,0,0,0.93)",
                                  fontSize: "14px",
                                  fontWeight: "500",
                                }}
                              >
                                2,072
                              </Typography.Text>
                            </div>
                            <Button
                              style={{
                                border: "none",
                                borderRadius: "15px",
                                color: "rgba(255,255,255,0.88)",
                                background: "#84ce95",
                                fontWeight: "600",
                                fontSize: "10px",
                                marginTop: "10px",
                                fontFamily: "sans-serif",
                              }}
                            >
                              BOOK NOW
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div
                      style={{ borderTop: "1px dashed #f0f1f5", margin: "0px" }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "20px",
                        padding: "20px",
                      }}
                    >
                      <Row>
                        <Col xs={4}>
                          <div style={{ textAlign: "center" }}>
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYcTdc0B0ea3hbMyKAKLB41KP25cYI1BC9BA&usqp=CAU"
                              style={{ width: "60px", height: "60px" }}
                            ></img>
                          </div>
                        </Col>
                        <Col xs={4}>
                          <div style={{ textAlign: "center" }}>
                            <Typography.Title
                              style={{
                                color: "rgba(74,74,74,0.94)",
                                fontSize: "20px",
                              }}
                            >
                              JFK
                            </Typography.Title>
                            <Typography.Title
                              style={{
                                color: "rgba(74,74,74,0.92)",
                                fontSize: "12px",
                              }}
                            >
                              13:00
                            </Typography.Title>
                          </div>
                        </Col>
                        <Col xs={6} style={{ marginTop: "5px" }}>
                          <div style={{ textAlign: "center" }}>
                            <Typography.Title
                              style={{
                                fontSize: "10px",
                                fontFamily: "sans-serif",
                                color: "rgba(74,74,74,0.92)",
                                fontWeight: "600",
                              }}
                            >
                              LUFTHANSA
                            </Typography.Title>
                            <Typography.Title
                              style={{
                                fontSize: "12px",
                                fontFamily: "sans-serif",
                                marginTop: "-1px",
                                color: "#84ce95",
                                fontWeight: "600",
                              }}
                            >
                              11H:20M
                            </Typography.Title>
                            <Typography.Title
                              style={{
                                fontSize: "12px",
                                fontFamily: "sans-serif",
                                marginTop: "-1px",
                                color: "rgba(74,74,74,0.92)",
                                fontWeight: "600",
                              }}
                            >
                              NON-STOP
                            </Typography.Title>
                          </div>
                        </Col>
                        <Col xs={4}>
                          <div style={{ textAlign: "center" }}>
                            <Typography.Title
                              style={{
                                color: "rgba(74,74,74,0.94)",
                                fontSize: "20px",
                              }}
                            >
                              BOM
                            </Typography.Title>
                            <Typography.Title
                              style={{
                                color: "rgba(74,74,74,0.92)",
                                fontSize: "12px",
                              }}
                            >
                              14:20
                            </Typography.Title>
                          </div>
                        </Col>
                        <Col xs={6}>
                          <div style={{ textAlign: "center" }}>
                            <div style={{ marginLeft: "34px" }}>
                              <i
                                className="fas fa-dollar-sign"
                                style={{ color: "rgba(0,0,0,0.93)" }}
                              ></i>
                              <Typography.Text
                                style={{
                                  color: "rgba(0,0,0,0.93)",
                                  fontSize: "14px",
                                  fontWeight: "500",
                                }}
                              >
                                1,872
                              </Typography.Text>
                            </div>
                            <Button
                              style={{
                                border: "none",
                                borderRadius: "15px",
                                color: "rgba(255,255,255,0.88)",
                                background: "#84ce95",
                                fontWeight: "600",
                                fontSize: "10px",
                                marginTop: "10px",
                                fontFamily: "sans-serif",
                              }}
                            >
                              BOOK NOW
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div
                      style={{ borderTop: "1px dashed #f0f1f5", margin: "0px" }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "20px",
                        padding: "20px",
                      }}
                    >
                      <Row>
                        <Col xs={4}>
                          <div style={{ textAlign: "center" }}>
                            <img
                              src="https://i.pinimg.com/originals/e9/d9/c6/e9d9c6384f5719a995b773b7a2bc5b37.png"
                              style={{ width: "60px", height: "60px" }}
                            ></img>
                          </div>
                        </Col>
                        <Col xs={4}>
                          <div style={{ textAlign: "center" }}>
                            <Typography.Title
                              style={{
                                color: "rgba(74,74,74,0.94)",
                                fontSize: "20px",
                              }}
                            >
                              JFK
                            </Typography.Title>
                            <Typography.Title
                              style={{
                                color: "rgba(74,74,74,0.92)",
                                fontSize: "12px",
                              }}
                            >
                              13:00
                            </Typography.Title>
                          </div>
                        </Col>
                        <Col xs={6} style={{ marginTop: "5px" }}>
                          <div style={{ textAlign: "center" }}>
                            <Typography.Title
                              style={{
                                fontSize: "10px",
                                fontFamily: "sans-serif",
                                color: "rgba(74,74,74,0.92)",
                                fontWeight: "600",
                              }}
                            >
                              BRITISH AIRWAYS
                            </Typography.Title>
                            <Typography.Title
                              style={{
                                fontSize: "12px",
                                fontFamily: "sans-serif",
                                marginTop: "-1px",
                                color: "#84ce95",
                                fontWeight: "600",
                              }}
                            >
                              11H:20M
                            </Typography.Title>
                            <Typography.Title
                              style={{
                                fontSize: "12px",
                                fontFamily: "sans-serif",
                                marginTop: "-1px",
                                color: "rgba(74,74,74,0.92)",
                                fontWeight: "600",
                              }}
                            >
                              NON-STOP
                            </Typography.Title>
                          </div>
                        </Col>
                        <Col xs={4}>
                          <div style={{ textAlign: "center" }}>
                            <Typography.Title
                              style={{
                                color: "rgba(74,74,74,0.94)",
                                fontSize: "20px",
                              }}
                            >
                              BOM
                            </Typography.Title>
                            <Typography.Title
                              style={{
                                color: "rgba(74,74,74,0.92)",
                                fontSize: "12px",
                              }}
                            >
                              14:20
                            </Typography.Title>
                          </div>
                        </Col>
                        <Col xs={6}>
                          <div style={{ textAlign: "center" }}>
                            <div style={{ marginLeft: "34px" }}>
                              <i
                                className="fas fa-dollar-sign"
                                style={{ color: "rgba(0,0,0,0.93)" }}
                              ></i>
                              <Typography.Text
                                style={{
                                  color: "rgba(0,0,0,0.93)",
                                  fontSize: "14px",
                                  fontWeight: "500",
                                }}
                              >
                                1,936
                              </Typography.Text>
                            </div>
                            <Button
                              style={{
                                border: "none",
                                borderRadius: "15px",
                                color: "rgba(255,255,255,0.88)",
                                background: "#84ce95",
                                fontWeight: "600",
                                fontSize: "10px",
                                marginTop: "10px",
                                fontFamily: "sans-serif",
                              }}
                            >
                              BOOK NOW
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div
                      style={{ borderTop: "1px dashed #f0f1f5", margin: "0px" }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "20px",
                        padding: "20px",
                        marginBottom: "20px",
                      }}
                    >
                      <Row>
                        <Col xs={4}>
                          <div style={{ textAlign: "center" }}>
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIkJxl09zpENBgoH4cEHRsOCaRQgvqKTUhtA&usqp=CAU"
                              style={{ width: "60px", height: "60px" }}
                            ></img>
                          </div>
                        </Col>
                        <Col xs={4}>
                          <div style={{ textAlign: "center" }}>
                            <Typography.Title
                              style={{
                                color: "rgba(74,74,74,0.94)",
                                fontSize: "20px",
                              }}
                            >
                              JFK
                            </Typography.Title>
                            <Typography.Title
                              style={{
                                color: "rgba(74,74,74,0.92)",
                                fontSize: "12px",
                              }}
                            >
                              13:00
                            </Typography.Title>
                          </div>
                        </Col>
                        <Col xs={6} style={{ marginTop: "5px" }}>
                          <div style={{ textAlign: "center" }}>
                            <Typography.Title
                              style={{
                                fontSize: "10px",
                                fontFamily: "sans-serif",
                                color: "rgba(74,74,74,0.92)",
                                fontWeight: "600",
                              }}
                            >
                              KUWAIT AIRWAYS
                            </Typography.Title>
                            <Typography.Title
                              style={{
                                fontSize: "12px",
                                fontFamily: "sans-serif",
                                marginTop: "-1px",
                                color: "#84ce95",
                                fontWeight: "600",
                              }}
                            >
                              11H:20M
                            </Typography.Title>
                            <Typography.Title
                              style={{
                                fontSize: "12px",
                                fontFamily: "sans-serif",
                                marginTop: "-1px",
                                color: "rgba(74,74,74,0.92)",
                                fontWeight: "600",
                              }}
                            >
                              NON-STOP
                            </Typography.Title>
                          </div>
                        </Col>
                        <Col xs={4}>
                          <div style={{ textAlign: "center" }}>
                            <Typography.Title
                              style={{
                                color: "rgba(74,74,74,0.94)",
                                fontSize: "20px",
                              }}
                            >
                              BOM
                            </Typography.Title>
                            <Typography.Title
                              style={{
                                color: "rgba(74,74,74,0.92)",
                                fontSize: "12px",
                              }}
                            >
                              14:20
                            </Typography.Title>
                          </div>
                        </Col>
                        <Col xs={6}>
                          <div style={{ textAlign: "center" }}>
                            <div style={{ marginLeft: "34px" }}>
                              <i
                                className="fas fa-dollar-sign"
                                style={{ color: "rgba(0,0,0,0.93)" }}
                              ></i>
                              <Typography.Text
                                style={{
                                  color: "rgba(0,0,0,0.93)",
                                  fontSize: "14px",
                                  fontWeight: "500",
                                }}
                              >
                                1,936
                              </Typography.Text>
                            </div>
                            <Button
                              style={{
                                border: "none",
                                borderRadius: "15px",
                                color: "rgba(255,255,255,0.88)",
                                background: "#84ce95",
                                fontWeight: "600",
                                fontSize: "10px",
                                marginTop: "10px",
                                fontFamily: "sans-serif",
                              }}
                            >
                              BOOK NOW
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col sm={24} xs={24} lg={8} xl={8} md={24}>
                    <div
                      style={{
                        borderRadius: "20px",
                        marginLeft: "20px",
                        background: "#4c56c0",
                      }}
                    >
                      <div style={{ borderRadius: "20px" }}>
                        <Row justify="space-between">
                          <Col>
                            <div
                              style={{ margin: "10px 20px", marginTop: "20px" }}
                            >
                              <Typography.Title
                                style={{
                                  fontSize: "12px",
                                  fontFamily: "sans-serif",
                                  color: "rgba(255,255,255,0.70)",
                                  fontWeight: "600",
                                  textAlign: "right",
                                }}
                              >
                                FROM
                              </Typography.Title>
                              <Typography.Title
                                style={{
                                  color: "rgba(255,255,255,0.85)",
                                  fontSize: "20px",
                                  marginTop: "-3px",
                                }}
                              >
                                JFK
                              </Typography.Title>
                            </div>
                          </Col>
                          <Col style={{ marginTop: "35px" }}>
                            <div
                              style={{ margin: "10px 20px", marginTop: "20px" }}
                            >
                              <Typography.Title
                                style={{
                                  fontSize: "12px",
                                  fontFamily: "sans-serif",
                                  color: "rgba(255,255,255,0.70)",
                                  fontWeight: "600",
                                  textAlign: "right",
                                }}
                              >
                                NON-STOP
                              </Typography.Title>
                            </div>
                          </Col>
                          <Col>
                            <div
                              style={{ margin: "10px 20px", marginTop: "20px" }}
                            >
                              <Typography.Title
                                style={{
                                  fontSize: "12px",
                                  fontFamily: "sans-serif",
                                  color: "rgba(255,255,255,0.70)",
                                  fontWeight: "600",
                                  textAlign: "right",
                                }}
                              >
                                TO
                              </Typography.Title>
                              <Typography.Title
                                style={{
                                  color: "rgba(255,255,255,0.85)",
                                  fontSize: "20px",
                                  marginTop: "-3px",
                                }}
                              >
                                BOM
                              </Typography.Title>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <div style={{ margin: "10px" }}>
                              <img
                                src="https://www.fly4free.com/wp-content/uploads/2017/05/map-98.png"
                                style={{ width: "100%", borderRadius: "10px" }}
                              ></img>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div
                        style={{
                          borderBottomLeftRadius: "20px",
                          paddingTop: "10px",
                          borderBottomRightRadius: "20px",
                          marginTop: "20px",
                          background: "#4852b6",
                        }}
                      >
                        <Row
                          justify="space-between"
                          style={{ paddingTop: "10px", margin: "10px" }}
                        >
                          <Col>
                            <div
                              style={{
                                borderRadius: "20px",
                                background: "#84ce95",
                              }}
                            >
                              <Typography.Title
                                style={{
                                  fontSize: "12px",
                                  padding: "10px 20px",
                                  fontFamily: "sans-serif",
                                  color: "rgba(255,255,255,0.70)",
                                  fontWeight: "600",
                                }}
                              >
                                NON STOP
                              </Typography.Title>
                            </div>
                          </Col>
                          <Col>
                            <div>
                              <Typography.Title
                                style={{
                                  fontSize: "12px",
                                  paddingTop: "10px",
                                  paddingBottom: "10px",
                                  fontFamily: "sans-serif",
                                  color: "rgba(255,255,255,0.70)",
                                  fontWeight: "600",
                                }}
                              >
                                ONE STOP
                              </Typography.Title>
                            </div>
                          </Col>
                          <Col>
                            <div>
                              <Typography.Title
                                style={{
                                  fontSize: "12px",
                                  paddingTop: "10px",
                                  paddingBottom: "10px",
                                  fontFamily: "sans-serif",
                                  color: "rgba(255,255,255,0.70)",
                                  fontWeight: "600",
                                }}
                              >
                                MORE STOP
                              </Typography.Title>
                            </div>
                          </Col>
                        </Row>
                        <Row style={{ margin: "10px", marginTop: "30px" }}>
                          <Col>
                            <div>
                              <Typography.Title
                                style={{
                                  fontSize: "12px",
                                  fontFamily: "sans-serif",
                                  color: "rgba(255,255,255,0.70)",
                                  fontWeight: "600",
                                }}
                              >
                                PRICE
                              </Typography.Title>
                            </div>
                          </Col>
                        </Row>
                        <Row
                          justify="space-between"
                          style={{ paddingBottom: "30px" }}
                        >
                          <Col xs={24}>
                            <div
                              style={{
                                marginLeft: "10px",
                                backgroundColor: "rgba(155,155,155,0.34)",
                                marginTop: "10px",
                                height: "2px",
                                marginRight: "10px",
                              }}
                            >
                              <div
                                style={{
                                  marginLeft: "50px",
                                  borderRadius: "8px",
                                  background: "#84ce95",
                                  width: "16px",
                                  marginTop: "-5px",
                                  float: "left",
                                  height: "16px",
                                }}
                              ></div>
                              <div
                                style={{
                                  borderRadius: "8px",
                                  background: "#84ce95",
                                  width: "16px",
                                  marginTop: "-5px",
                                  float: "right",
                                  height: "16px",
                                  marginRight: "50px",
                                }}
                              ></div>
                            </div>
                            <div
                              style={{
                                color: "#ffffff",
                                fontSize: "15px",
                                marginTop: "20px",
                              }}
                            >
                              <span
                                style={{
                                  borderRadius: "20px",
                                  marginLeft: "30px",
                                  padding: "2px 20px",
                                  float: "left",
                                  background: "#84ce95",
                                }}
                              >
                                $500
                              </span>
                              <span
                                style={{
                                  borderRadius: "20px",
                                  padding: "2px 20px",
                                  float: "right",
                                  background: "#84ce95",
                                  marginRight: "30px",
                                }}
                              >
                                $2500
                              </span>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Layout>
      </Layout>
    </div>
  );
}
export default SlashflightAntUI;