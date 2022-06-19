package com.advtech.rest.webservices.restfulwebservices.helloworld;

public class HelloBean {

    String msg;

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    @Override
    public String toString() {
        return "HelloBean{" +
                "msg='" + msg + '\'' +
                '}';
    }
}
