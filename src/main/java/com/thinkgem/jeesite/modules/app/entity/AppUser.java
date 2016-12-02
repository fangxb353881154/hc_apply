/**
 * Copyright &copy; 2012-2014 <a href="https://github.com/thinkgem/jeesite">JeeSite</a> All rights reserved.
 */
package com.thinkgem.jeesite.modules.app.entity;

import org.hibernate.validator.constraints.Length;
import com.thinkgem.jeesite.modules.sys.entity.User;

import com.thinkgem.jeesite.common.persistence.DataEntity;

/**
 * app客户信息Entity
 * @author JFang
 * @version 2016-12-02
 */
public class AppUser extends DataEntity<AppUser> {
	
	private static final long serialVersionUID = 1L;
	private String phone;		// 手机号
	private String name;		// 客户姓名
	private String idCard;		// 身份证
	private User user;		// 所属代理
	
	public AppUser() {
		super();
	}

	public AppUser(String id){
		super(id);
	}

	@Length(min=1, max=11, message="手机号长度必须介于 1 和 11 之间")
	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}
	
	@Length(min=0, max=255, message="客户姓名长度必须介于 0 和 255 之间")
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	@Length(min=0, max=255, message="身份证长度必须介于 0 和 255 之间")
	public String getIdCard() {
		return idCard;
	}

	public void setIdCard(String idCard) {
		this.idCard = idCard;
	}
	
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
}